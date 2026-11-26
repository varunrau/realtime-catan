/* Realtime Catan — dice companion */
(() => {
  'use strict';

  // ---------------------------------------------------------------- state
  const DEFAULTS = {
    formula: '30', autopause: true, ticks: true, fair: true, ck: false, robberWait: true,
    volume: 70, voice: true, wake: true, bg1: '#0b2230', bg2: '#1b5a6a',
  };
  const SEAT_COLORS = ['#d64541', '#2f80ed', '#f2a93b', '#f3ead8', '#27ae76', '#9b59b6', '#e67e22', '#5fc9c4'];
  const EVENT_FACES = { 1: 'ship', 2: 'blue', 3: 'ship', 4: 'green', 5: 'ship', 6: 'yellow' };
  const GATE = { blue: 'Politics', green: 'Science', yellow: 'Trade' };
  const SHIP_STEPS = 7;
  const NUM_WORDS = ['', '', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];

  const freshGame = () => ({
    turn: 0, status: 'idle', endsAt: 0, remaining: 0, rolls: [], robberIdx: 0, ship: 0, attacks: 0,
    alchArmed: false, deck: [], alerts: [],
  });

  const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
  const S = { ...DEFAULTS, ...load('hh-settings', {}) };
  let players = load('hh-players', []);
  let G = { ...freshGame(), ...load('hh-game', {}) };
  const mode = 'realtime'; // the app only runs real-time play
  localStorage.removeItem('hh-mode');
  // Never resume a running clock blindly after a reload
  if (G.status === 'running') { G.status = 'paused'; G.remaining = Math.max(1000, G.endsAt - Date.now()); }
  G.alerts = G.alerts || [];

  const save = () => {
    localStorage.setItem('hh-settings', JSON.stringify(S));
    localStorage.setItem('hh-players', JSON.stringify(players));
    localStorage.setItem('hh-game', JSON.stringify(G));
  };

  // ---------------------------------------------------------------- dom
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function toast(msg) {
    const t = el('div', 'toast', msg);
    $('#toasts').appendChild(t);
    setTimeout(() => t.remove(), 3000);
  }

  // ---------------------------------------------------------------- navigation
  let current = 'home', previous = 'home';
  function go(name) {
    if (name === 'realtime') name = 'play';
    if (name !== current) previous = current;
    current = name;
    $$('.screen').forEach((s) => s.classList.toggle('active', s.id === name));
    document.body.classList.toggle('in-play', name === 'play');
    if (name === 'play') { renderPlay(); if (G.alerts.length) setTimeout(showNextAlert, 250); }
    else $$('.alert').forEach((a) => a.classList.remove('show'));
    if (name === 'stats') renderStats();
    if (name === 'settings') renderSettings();
    if (name === 'home') renderHome();
  }
  document.addEventListener('click', (e) => {
    const g = e.target.closest('[data-go]');
    if (g) go(g.dataset.go);
    const m = e.target.closest('[data-modal]');
    if (m) openModal(m.dataset.modal);
    if (e.target.closest('[data-close]') || e.target.classList.contains('modal')) {
      const modal = e.target.closest('.modal');
      if (modal && modal.id !== 'alch-modal') modal.classList.remove('show');
    }
    if (e.target.closest('[data-resume]')) resumeFromAlert();
  });
  const openModal = (id) => $('#' + id).classList.add('show');
  // Settings opened from the Play dialog returns to it
  let settingsFromDialog = false;
  $('#settings-back').onclick = () => {
    if (settingsFromDialog) { settingsFromDialog = false; go('home'); openModal('play-modal'); return; }
    go(previous === 'settings' ? 'home' : previous);
  };
  $('#open-settings').onclick = () => { $('#play-modal').classList.remove('show'); settingsFromDialog = true; go('settings'); };
  $('#start-play').onclick = () => { $('#play-modal').classList.remove('show'); go('play'); };
  function renderHome() {
    renderSeats();
    $('#stats-card').hidden = !G.rolls.length;
    $('#play-btn').textContent = G.turn ? 'Continue' : 'Play';
  }

  // ---------------------------------------------------------------- formula
  function compileFormula(src) {
    const s = String(src).trim();
    if (!s || !/^[\d\s+\-*/().,t]*(?:(?:min|max|floor|ceil|round|sqrt|log|abs)[\d\s+\-*/().,t]*)*$/.test(s)) return null;
    try {
      const fn = new Function('t', 'const {min,max,floor,ceil,round,sqrt,log,abs}=Math; return (' + s + ');');
      const v = fn(1);
      if (!Number.isFinite(v)) return null;
      return fn;
    } catch { return null; }
  }
  let turnFn = compileFormula(S.formula) || (() => 30);
  const turnSeconds = (t) => {
    let v = 30;
    try { v = Number(turnFn(t)); } catch { /* fall through */ }
    if (!Number.isFinite(v)) v = 30;
    return Math.max(5, Math.min(600, v));
  };

  // ---------------------------------------------------------------- audio
  let AC = null, master = null;
  function audio() {
    if (!AC) {
      const C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      AC = new C();
      master = AC.createGain();
      master.connect(AC.destination);
    }
    if (AC.state === 'suspended') AC.resume();
    master.gain.value = (S.volume / 100) ** 1.5;
    return AC;
  }
  function noiseBuffer(ac) {
    const b = ac.createBuffer(1, ac.sampleRate * 0.08, ac.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length) ** 3;
    return b;
  }
  const sfx = {
    rattle() {
      const ac = audio(); if (!ac || !S.volume) return;
      const buf = noiseBuffer(ac);
      for (let i = 0; i < 9; i++) {
        const t = ac.currentTime + i * 0.055 + Math.random() * 0.04 + (i > 6 ? 0.25 : 0);
        const src = ac.createBufferSource(); src.buffer = buf;
        const f = ac.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1800 + Math.random() * 2600; f.Q.value = 3;
        const g = ac.createGain(); g.gain.value = 0.5 * (i > 6 ? 0.6 : 1);
        src.connect(f).connect(g).connect(master); src.start(t);
      }
    },
    tone(freq, dur, type = 'sine', vol = 0.3, when = 0) {
      const ac = audio(); if (!ac || !S.volume) return;
      const t = ac.currentTime + when;
      const o = ac.createOscillator(); o.type = type; o.frequency.value = freq;
      const g = ac.createGain();
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(master); o.start(t); o.stop(t + dur + 0.05);
    },
    tick(last) { this.tone(last ? 1320 : 990, 0.07, 'sine', last ? 0.35 : 0.22); },
    start() { [523, 659, 784].forEach((f, i) => this.tone(f, 0.5, 'triangle', 0.2, i * 0.09)); },
    seven() {
      const ac = audio(); if (!ac || !S.volume) return;
      [110, 138.6, 164.8].forEach((f) => {
        const t = ac.currentTime;
        const o = ac.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f;
        const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(1600, t); lp.frequency.exponentialRampToValueAtTime(200, t + 1.4);
        const g = ac.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
        o.connect(lp).connect(g).connect(master); o.start(t); o.stop(t + 1.7);
      });
    },
    horn() {
      const ac = audio(); if (!ac || !S.volume) return;
      [87, 88.5, 130.5].forEach((f, i) => {
        const t = ac.currentTime;
        const o = ac.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(f * 0.94, t); o.frequency.linearRampToValueAtTime(f, t + 0.3);
        const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 700;
        const g = ac.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(i === 2 ? 0.08 : 0.16, t + 0.25); g.gain.setValueAtTime(0.16, t + 1.4); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.2);
        o.connect(lp).connect(g).connect(master); o.start(t); o.stop(t + 2.3);
      });
    },
    chime() { this.tone(880, 0.6, 'triangle', 0.18); this.tone(1318, 0.8, 'triangle', 0.12, 0.08); },
  };
  function say(text) {
    if (!S.voice || !('speechSynthesis' in window) || !S.volume) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1.02; u.volume = Math.min(1, S.volume / 70);
    speechSynthesis.speak(u);
  }

  // ---------------------------------------------------------------- wake lock
  let wakeLock = null;
  async function updateWake() {
    const want = S.wake && G.status === 'running' && current === 'play';
    try {
      if (want && !wakeLock && navigator.wakeLock) {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => (wakeLock = null));
      } else if (!want && wakeLock) { await wakeLock.release(); wakeLock = null; }
    } catch { /* not allowed */ }
  }
  document.addEventListener('visibilitychange', () => { if (!document.hidden) updateWake(); });

  // ---------------------------------------------------------------- dice
  const PIPS = { 1: ['mc'], 2: ['tl', 'br'], 3: ['tl', 'mc', 'br'], 4: ['tl', 'tr', 'bl', 'br'], 5: ['tl', 'tr', 'mc', 'bl', 'br'], 6: ['tl', 'tr', 'ml', 'mr', 'bl', 'br'] };
  let diceEls = [], diceKey = '', shuffleTimer = null;
  const rand6 = () => 1 + Math.floor(Math.random() * 6);

  function faceHTML(kind, v) {
    if (kind === 'event') return `<div class="${v === 'ship' ? 'ev-ship' : 'ev-gate ' + v}"></div>`;
    return PIPS[v].map((p) => `<div class="pip ${p}"></div>`).join('');
  }

  function buildDice() {
    const key = S.ck ? 'ck' : 'base';
    if (key === diceKey) return;
    diceKey = key;
    const box = $('#dice');
    $$('.die', box).forEach((n) => n.remove()); // keep the 3D canvas
    const kinds = S.ck ? ['yellow', 'red', 'event'] : ['ivory', 'red'];
    diceEls = kinds.map((kind) => {
      const d = el('div', 'die ' + kind);
      const face = el('div', 'face');
      d.append(el('div', 'shadow'), face);
      box.appendChild(d);
      return { d, face, kind };
    });
    window.Dice3D?.setKinds(kinds);
    showFaces(lastRoll(), false);
  }

  // Flat tumble: each die hops, spins and bounces while its face flickers, then lands on the result.
  function showFaces(roll, animate) {
    const finalVal = (x, i) => (x.kind === 'event' ? (roll?.event || 'ship') : roll ? [roll.d1, roll.d2][i] : [3, 4][i]);
    const setFinal = () => diceEls.forEach((x, i) => (x.face.innerHTML = faceHTML(x.kind, finalVal(x, i))));
    clearInterval(shuffleTimer);
    if (window.Dice3D?.ready) { setFinal(); window.Dice3D.show(diceEls.map(finalVal), animate); return; }
    if (!animate) return setFinal();
    diceEls.forEach((x, i) => {
      const turns = (2 + Math.floor(Math.random() * 2)) * (i % 2 ? -1 : 1);
      x.d.style.setProperty('--spin', `${turns * 360}deg`);
      x.d.style.setProperty('--delay', `${i * 70}ms`);
      x.d.classList.remove('rolling');
      void x.d.offsetWidth; // restart the animation
      x.d.classList.add('rolling');
    });
    const start = performance.now();
    shuffleTimer = setInterval(() => {
      if (performance.now() - start > 720) { clearInterval(shuffleTimer); setFinal(); return; }
      diceEls.forEach((x) => (x.face.innerHTML = faceHTML(x.kind, x.kind === 'event' ? EVENT_FACES[rand6()] : rand6())));
    }, 70);
  }

  function drawPair() {
    if (!S.fair) return [1 + Math.floor(Math.random() * 6), 1 + Math.floor(Math.random() * 6)];
    if (!G.deck || G.deck.length <= 5) {
      G.deck = [];
      for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) G.deck.push([a, b]);
      for (let i = G.deck.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [G.deck[i], G.deck[j]] = [G.deck[j], G.deck[i]]; }
    }
    return G.deck.pop();
  }

  const lastRoll = () => G.rolls[G.rolls.length - 1];

  // ---------------------------------------------------------------- game flow
  const robberActive = () => !(S.ck && S.robberWait && G.attacks === 0);
  const seatName = (i) => (players.length ? players[i % players.length].name : `Seat ${(i % 4) + 1}`);
  const seatColor = (i) => (players.length ? players[i % players.length].color : '#93a8b3');

  function roll() {
    if (G.alerts.length) return;
    if (G.alchArmed) {
      G.status = 'halted';
      G.remaining = 0;
      openAlchemist();
      renderPlay();
      return;
    }
    const [d1, d2] = drawPair();
    finalizeRoll(d1, d2, false);
  }

  function finalizeRoll(d1, d2, alch) {
    const event = S.ck ? EVENT_FACES[1 + Math.floor(Math.random() * 6)] : null;
    const prev = { ship: G.ship, attacks: G.attacks, robberIdx: G.robberIdx };
    const total = d1 + d2;
    G.turn++;
    const r = { d1, d2, total, event, alch, turn: G.turn, prev, robberMoved: false, attack: false, mover: null };

    let attack = false;
    if (event === 'ship') {
      G.ship++;
      if (G.ship >= SHIP_STEPS) { attack = true; G.attacks++; G.ship = 0; r.attack = true; }
    }
    const robberNow = total === 7 && !(S.ck && S.robberWait && prev.attacks === 0 && !attack);
    if (total === 7 && robberNow) {
      r.robberMoved = true;
      r.mover = G.robberIdx;
      G.robberIdx++;
    }
    G.rolls.push(r);

    // Alerts queue (barbarians resolve first, then the robber)
    const dur = turnSeconds(G.turn) * 1000;
    if (attack) G.alerts.push('ship');
    if (total === 7) G.alerts.push(robberNow ? 'seven' : 'seven-discard');
    if (G.alerts.length && S.autopause) { G.status = 'halted'; G.remaining = dur; }
    else { G.status = 'running'; G.endsAt = Date.now() + dur; G.alerts = []; }

    // Feedback
    sfx.rattle();
    setTimeout(() => {
      if (attack) { sfx.horn(); say(`${NUM_WORDS[total]}. The barbarians attack!`); }
      else if (total === 7) { sfx.seven(); say(robberNow ? `Seven. The robber is ${seatName(r.mover)}.` : 'Seven. Discard.'); }
      else {
        const gate = event && event !== 'ship' ? `. ${event} gate` : '';
        say(NUM_WORDS[total] + gate);
      }
      if (!S.autopause || !G.alerts.length) {
        if (attack && !S.autopause) toast('Barbarians attack');
        if (total === 7 && !S.autopause) toast(robberNow ? `Robber: ${esc(seatName(r.mover))}` : 'Discard');
      }
    }, 800);

    save();
    renderPlay(true);
    setTimeout(showNextAlert, 1300);
    updateWake();
  }

  function showNextAlert() {
    $$('.alert').forEach((a) => a.classList.remove('show'));
    const a = G.alerts[0];
    document.body.classList.toggle('alerting', !!a);
    if (!a) return;
    if (a === 'ship') $('#alert-ship').classList.add('show');
    else {
      const r = lastRoll();
      const title = $('#seven-title');
      if (a === 'seven') title.innerHTML = `The robber is <span class="robber-name" style="--who:${seatColor(r.mover)}">${esc(seatName(r.mover))}</span>`;
      else title.textContent = 'Discard';
      $('#alert-seven').classList.add('show');
    }
  }

  function resumeFromAlert() {
    G.alerts.shift();
    if (G.alerts.length) { showNextAlert(); save(); return; }
    $$('.alert').forEach((a) => a.classList.remove('show'));
    document.body.classList.remove('alerting');
    if (G.status === 'halted') {
      // A 7 produces nothing, so once the robber is dealt with the next turn rolls at once
      if (lastRoll()?.total === 7) { G.status = 'running'; save(); roll(); return; }
      G.status = 'running';
      G.endsAt = Date.now() + (G.remaining || turnSeconds(G.turn) * 1000);
      sfx.chime();
    }
    save(); renderPlay(); updateWake();
  }

  function startClock() {
    audio();
    if (G.status === 'idle' || G.turn === 0) { sfx.start(); roll(); return; }
    if (G.status === 'paused') {
      G.status = 'running'; G.endsAt = Date.now() + G.remaining;
      sfx.chime();
    }
    save(); renderPlay(); updateWake();
  }
  function pauseClock() {
    if (G.status !== 'running') return;
    G.status = 'paused'; G.remaining = Math.max(0, G.endsAt - Date.now());
    save(); renderPlay(); updateWake();
  }

  // ---------------------------------------------------------------- alchemist
  let alchA = 0, alchB = 0;
  function buildFacePick(id, setter, red) {
    const box = $(id); box.innerHTML = '';
    for (let v = 1; v <= 6; v++) {
      const b = el('button', '', String(v));
      b.onclick = () => { setter(v); $$('button', box).forEach((x) => x.classList.toggle('sel', x === b)); $('#alch-ok').disabled = !(alchA && alchB); };
      box.appendChild(b);
    }
  }
  function openAlchemist() {
    alchA = alchB = 0;
    $('#alch-a').className = 'face-pick ' + (S.ck ? 'yellow' : 'white');
    buildFacePick('#alch-a', (v) => (alchA = v));
    buildFacePick('#alch-b', (v) => (alchB = v), true);
    $('#alch-ok').disabled = true;
    openModal('alch-modal');
    sfx.chime();
    say('Alchemist. Name the dice.');
  }
  $('#alch-ok').onclick = () => {
    $('#alch-modal').classList.remove('show');
    G.alchArmed = false;
    finalizeRoll(alchA, alchB, true);
  };
  $('#alch-cancel').onclick = () => {
    $('#alch-modal').classList.remove('show');
    G.alchArmed = false;
    const [a, b] = drawPair();
    finalizeRoll(a, b, false);
  };

  // ---------------------------------------------------------------- play controls
  $('#main-btn').onclick = () => {
    audio();
    if (G.status === 'running') pauseClock();
    else if (G.status === 'halted') showNextAlert();
    else startClock();
  };
  $('#next-btn').onclick = () => { audio(); if (G.status === 'running' || G.status === 'paused') roll(); };
  $('#alch-btn').onclick = () => {
    G.alchArmed = !G.alchArmed;
    save(); renderPlay();
  };

  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input')) return;
    if (e.key === 'Escape') { $$('.modal.show').forEach((m) => m.id !== 'alch-modal' && m.classList.remove('show')); return; }
    if (current !== 'play') return;
    if ($('.modal.show')) return;
    if (G.alerts.length && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); resumeFromAlert(); return; }
    const k = e.key.toLowerCase();
    if (k === ' ') { e.preventDefault(); $('#main-btn').click(); }
    else if (k === 'n') $('#next-btn').click();
    else if (k === 'p') pauseClock();
    else if (k === 'a' && S.ck) $('#alch-btn').click();
  });

  // ---------------------------------------------------------------- render play
  function buildTicks() {
    const box = $('#dial-ticks');
    if (box.childElementCount) return;
    for (let i = 0; i < 60; i++) {
      const t = el('i', i % 5 === 0 ? 'major' : '');
      t.style.transform = `rotate(${i * 6}deg)`;
      box.appendChild(t);
    }
  }

  function renderPlay(animate = false) {
    document.body.classList.toggle('no-ck', !S.ck);
    buildTicks();
    buildDice();
    $('#turn-count').textContent = G.turn;

    const r = lastRoll();
    const total = $('#total');
    total.textContent = r ? r.total : '—';
    total.classList.toggle('hot', !!r && (r.total === 6 || r.total === 8));
    total.classList.toggle('seven', !!r && r.total === 7);
    if (animate) {
      showFaces(r, true);
      total.classList.remove('pop'); total.style.opacity = 0;
      setTimeout(() => { total.style.opacity = ''; void total.offsetWidth; total.classList.add('pop'); }, 1100);
    }

    // Controls
    const main = $('#main-btn'), lbl = $('#main-label');
    main.classList.toggle('running', G.status === 'running');
    lbl.textContent = { idle: 'Start', running: 'Pause', paused: 'Resume', halted: 'Resolve' }[G.status];
    $('#next-btn').disabled = !(G.status === 'running' || G.status === 'paused');
    $('#alch-btn').classList.toggle('armed', !!G.alchArmed);

    document.body.classList.toggle('halted', G.status === 'halted' || G.status === 'paused');

    // Robber card
    const nextIdx = G.robberIdx;
    $('#robber-card').classList.toggle('inactive', !robberActive());
    $('#robber-next').innerHTML = `<span class="who-dot" style="background:${seatColor(nextIdx)}"></span>${esc(seatName(nextIdx))}`;

    // Ship
    const track = $('#ship-track');
    track.innerHTML = '';
    for (let i = 0; i <= SHIP_STEPS; i++) {
      const s = el('div', 'step' + (i < G.ship ? ' on' : '') + (i === G.ship ? ' boat' : '') + (i === SHIP_STEPS ? ' shore' : ''));
      track.appendChild(s);
    }

    // Progress
    const pt = $('#progress-text');
    if (r && r.event && r.event !== 'ship') {
      const lvl = Math.max(1, r.d2 - 1);
      pt.innerHTML = `<span class="tag ${r.event}">${GATE[r.event]}</span> <b>Level ${lvl}+</b>`;
    } else pt.textContent = '—';

    // History
    const h = $('#history');
    h.innerHTML = '';
    G.rolls.slice(-14).reverse().forEach((x) => {
      h.appendChild(el('div', 'h' + (x.total === 7 ? ' seven' : '') + (x.total === 6 || x.total === 8 ? ' hot' : '') + (x.alch ? ' alch' : ''), String(x.total)));
    });
    if (!G.rolls.length) h.innerHTML = '<span class="muted small">No rolls yet</span>';
    renderSpark();
    tickClock();
  }

  function counts() {
    const c = Object.fromEntries([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k) => [k, 0]));
    G.rolls.forEach((r) => c[r.total]++);
    return c;
  }
  function renderSpark() {
    const sp = $('#spark');
    const c = counts();
    const max = Math.max(1, ...Object.values(c));
    if (!sp.childElementCount) {
      for (let k = 2; k <= 12; k++) sp.appendChild(el('i', k === 7 ? 'seven' : ''));
      const labels = el('div', 'spark-labels');
      for (let k = 2; k <= 12; k++) labels.appendChild(el('span', '', String(k)));
      sp.after(labels);
    }
    [...sp.children].forEach((b, i) => (b.style.height = `${(c[i + 2] / max) * 100}%`));
  }

  // ---------------------------------------------------------------- clock loop
  let lastSec = null;
  function tickClock() {
    const ring = $('#dial');
    let p = 1, secs;
    const full = turnSeconds(Math.max(1, G.turn)) * 1000;
    if (G.status === 'running') {
      const left = Math.max(0, G.endsAt - Date.now());
      p = left / full; secs = Math.ceil(left / 1000);
    } else if (G.status === 'idle') { p = 1; secs = Math.round(turnSeconds(1)); }
    else { p = Math.min(1, (G.remaining || full) / full); secs = Math.ceil((G.remaining || full) / 1000); }
    ring.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(4));
    $('#clock-secs').textContent = secs;
    const warn = G.status === 'running' && secs <= 5;
    document.body.classList.toggle('warn', warn);
    if (warn && secs !== lastSec && secs > 0 && S.ticks) sfx.tick(secs === 1);
    lastSec = secs;
  }

  function loop() {
    if (current === 'play') tickClock();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  setInterval(() => {
    if (G.status === 'running' && Date.now() >= G.endsAt && !G.alerts.length) roll();
  }, 120);

  // ---------------------------------------------------------------- seats
  function renderSeats() {
    const box = $('#seats');
    box.innerHTML = '';
    players.forEach((p, i) => {
      const s = el('div', 'seat');
      s.draggable = true;
      s.innerHTML = `<span class="chip" style="background:${p.color}" title="Change colour">${esc(p.name.slice(0, 1).toUpperCase())}</span><span>${esc(p.name)}</span><span class="x" title="Remove">×</span>`;
      $('.chip', s).onclick = () => { p.color = SEAT_COLORS[(SEAT_COLORS.indexOf(p.color) + 1) % SEAT_COLORS.length]; save(); renderSeats(); };
      $('.x', s).onclick = () => { players.splice(i, 1); save(); renderSeats(); };
      s.addEventListener('dragstart', (e) => { s.classList.add('dragging'); e.dataTransfer.setData('text/plain', String(i)); });
      s.addEventListener('dragend', () => s.classList.remove('dragging'));
      s.addEventListener('dragover', (e) => e.preventDefault());
      s.addEventListener('drop', (e) => {
        e.preventDefault();
        const from = +e.dataTransfer.getData('text/plain');
        const [m] = players.splice(from, 1);
        players.splice(i, 0, m);
        save(); renderSeats();
      });
      box.appendChild(s);
    });
  }
  $('#add-seat').onsubmit = (e) => {
    e.preventDefault();
    const name = $('#seat-name').value.trim();
    if (!name) return;
    if (players.length >= 8) return;
    const used = new Set(players.map((p) => p.color));
    players.push({ name, color: SEAT_COLORS.find((c) => !used.has(c)) || SEAT_COLORS[players.length % 8] });
    $('#seat-name').value = '';
    save(); renderSeats();
  };

  // ---------------------------------------------------------------- stats
  function renderStats() {
    const c = counts();
    const n = G.rolls.length;
    $('#stats-total').textContent = `${n} roll${n === 1 ? '' : 's'}`;
    const exp = (k) => (6 - Math.abs(7 - k)) / 36;
    const max = Math.max(1, ...Object.values(c), ...[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k) => exp(k) * n));
    const chart = $('#chart');
    chart.innerHTML = '';
    for (let k = 2; k <= 12; k++) {
      const col = el('div', 'col' + (k === 7 ? ' seven' : ''));
      const bar = el('div', 'barv');
      bar.style.height = '0%';
      bar.appendChild(el('span', 'cnt', String(c[k])));
      const ex = el('div', 'exp');
      ex.style.bottom = `${(exp(k) * n / max) * 100}%`;
      col.append(bar, ex);
      chart.appendChild(col);
      requestAnimationFrame(() => requestAnimationFrame(() => (bar.style.height = `${(c[k] / max) * 100}%`)));
    }
    let labels = $('.chart-labels');
    if (!labels) { labels = el('div', 'chart-labels'); chart.after(labels); }
    labels.innerHTML = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k) => `<span class="${k === 6 || k === 8 ? 'hot' : ''}">${k}</span>`).join('');

    let hot = null, cold = null, hotD = -Infinity, coldD = Infinity;
    for (let k = 2; k <= 12; k++) {
      if (k === 7) continue;
      const d = c[k] - exp(k) * n;
      if (d > hotD) { hotD = d; hot = k; }
      if (d < coldD) { coldD = d; cold = k; }
    }
    const tiles = [
      ['Sevens', c[7], n ? `${((c[7] / n) * 100).toFixed(0)}% · 17% expected` : ''],
      ['Hot', n ? hot : '—', n ? `${hotD >= 0 ? '+' : ''}${hotD.toFixed(1)}` : ''],
      ['Cold', n ? cold : '—', n ? coldD.toFixed(1) : ''],
    ];
    if (S.ck) tiles.push(['Barbarian attacks', G.attacks, '']);
    const box = $('#stat-tiles');
    box.innerHTML = tiles.map(([k, v, d]) => `<div class="card tile"><div class="v">${v}</div><div class="k">${k}${d ? ` <span>${d}</span>` : ''}</div></div>`).join('');
  }
  function resetGame() {
    if (!confirm('Reset the game?')) return;
    G = freshGame();
    $$('.alert').forEach((a) => a.classList.remove('show'));
    document.body.classList.remove('alerting');
    $('#alch-modal').classList.remove('show');
    save(); updateWake();
    if (current === 'play') { renderPlay(); showFaces(null, false); } else renderStats();
  }
  $('#reset-stats').onclick = resetGame;
  $('#reset-game').onclick = resetGame;

  // ---------------------------------------------------------------- settings
  function applyTheme() {
    document.documentElement.style.setProperty('--bg1', S.bg1);
    document.documentElement.style.setProperty('--bg2', S.bg2);
    document.body.classList.toggle('no-ck', !S.ck);
  }
  function renderFormulaPreview() {
    $('#formula-preview').innerHTML = [1, 5, 10, 20, 40].map((t) => `<span>t=${t} → <b>${Math.round(turnSeconds(t))}s</b></span>`).join('');
  }
  function renderSettings() {
    $('#set-formula').value = S.formula;
    $('#set-autopause').checked = S.autopause;
    $('#set-ticks').checked = S.ticks;
    $('#set-fair').checked = S.fair;
    $('#set-ck').checked = S.ck;
    $('#set-robberwait').checked = S.robberWait;
    $('#set-volume').value = S.volume;
    $('#set-voice').checked = S.voice;
    $('#set-wake').checked = S.wake;
    $('#set-bg1').value = S.bg1;
    $('#set-bg2').value = S.bg2;
    renderFormulaPreview();
  }
  $('#set-formula').addEventListener('input', (e) => {
    const fn = compileFormula(e.target.value);
    e.target.classList.toggle('bad', !fn);
    if (fn) { S.formula = e.target.value; turnFn = fn; save(); renderFormulaPreview(); }
  });
  const bindCheck = (id, key, after) => $(id).addEventListener('change', (e) => { S[key] = e.target.checked; save(); after?.(); });
  bindCheck('#set-autopause', 'autopause');
  bindCheck('#set-ticks', 'ticks');
  bindCheck('#set-fair', 'fair', () => (G.deck = []));
  bindCheck('#set-ck', 'ck', () => { applyTheme(); diceKey = ''; });
  bindCheck('#set-robberwait', 'robberWait');
  bindCheck('#set-voice', 'voice', () => S.voice && say('Announcements on'));
  bindCheck('#set-wake', 'wake', updateWake);
  $('#set-volume').addEventListener('input', (e) => { S.volume = +e.target.value; save(); if (master) master.gain.value = (S.volume / 100) ** 1.5; });
  $('#set-volume').addEventListener('change', () => sfx.chime());
  $('#set-bg1').addEventListener('input', (e) => { S.bg1 = e.target.value; applyTheme(); save(); });
  $('#set-bg2').addEventListener('input', (e) => { S.bg2 = e.target.value; applyTheme(); save(); });
  $('#reset-settings').onclick = () => {
    Object.assign(S, DEFAULTS);
    turnFn = compileFormula(S.formula);
    diceKey = '';
    save(); applyTheme(); renderSettings();
  };

  // 3D dice load as a module after this script; switch over when they're ready
  window.addEventListener('dice3d-ready', () => { diceKey = ''; if (current === 'play') buildDice(); });

  // ---------------------------------------------------------------- boot
  applyTheme();
  renderHome();
  if (G.alerts.length) { /* shown when the game screen opens */ }
  else if (G.status === 'halted') {
    if (G.alchArmed) setTimeout(openAlchemist, 300);
    else { G.status = 'paused'; G.remaining = G.remaining || turnSeconds(G.turn) * 1000; }
  }
})();
