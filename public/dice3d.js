// Real 3D dice rendered with three.js: rounded, glossy, lit, with soft shadows.
// Exposes window.Dice3D = { ready, setKinds(kinds), show(values, animate) }.
import * as THREE from 'three';
import { RoundedBoxGeometry } from './vendor/RoundedBoxGeometry.js';
import { RoomEnvironment } from './vendor/RoomEnvironment.js';
import shipUrl from './assets/event-ship.png'; // inlined as a data URL by the bundler (works from file://)

const host = document.getElementById('dice');

// ---------------------------------------------------------------- renderer / scene
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
} catch {
  renderer = null;
}

if (renderer) {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.className = 'dice-gl';
  host.appendChild(canvas);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(22, 1, 0.1, 200);
  const VIEW_DIR = new THREE.Vector3(0, 0.3, 1).normalize();

  const key = new THREE.DirectionalLight(0xfff1dc, 2.2);
  key.position.set(-3, 9, 6);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5, near: 0.5, far: 30 });
  key.shadow.bias = -0.0005;
  key.shadow.radius = 6;
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x9fdcff, 0.6);
  rim.position.set(5, 2, -4);
  scene.add(rim);
  scene.add(new THREE.HemisphereLight(0xfff6e8, 0x1b3440, 0.45));

  const FLOOR_Y = -0.66;
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.32 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = FLOOR_Y;
  floor.receiveShadow = true;
  scene.add(floor);

  // ---------------------------------------------------------------- face textures
  const STYLE = {
    ivory: { base: '#efe7d6', hi: '#ffffff', pip: 'dark' },
    red: { base: '#cf3b2b', hi: '#ff8a78', pip: 'light' },
    yellow: { base: '#f0c246', hi: '#fff3b0', pip: 'dark' },
    event: { base: '#ebe5d6', hi: '#ffffff', pip: 'dark' },
  };
  const PIPS = { 1: ['mc'], 2: ['tl', 'br'], 3: ['tl', 'mc', 'br'], 4: ['tl', 'tr', 'bl', 'br'], 5: ['tl', 'tr', 'mc', 'bl', 'br'], 6: ['tl', 'tr', 'ml', 'mr', 'bl', 'br'] };
  const POS = { t: 0.26, m: 0.5, b: 0.74, l: 0.26, c: 0.5, r: 0.74 };
  const TEX = 512;
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const shipImg = new Image();
  shipImg.src = shipUrl;
  const pendingShip = [];

  function baseCanvas(style) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = TEX;
    const g = cv.getContext('2d');
    g.fillStyle = style.base;
    g.fillRect(0, 0, TEX, TEX);
    const glow = g.createRadialGradient(TEX * 0.32, TEX * 0.28, 0, TEX * 0.32, TEX * 0.28, TEX * 0.75);
    glow.addColorStop(0, style.hi + '55');
    glow.addColorStop(1, style.hi + '00');
    g.fillStyle = glow;
    g.fillRect(0, 0, TEX, TEX);
    return { cv, g };
  }

  function drawPip(g, x, y, r, light) {
    // engraved look: lit lower lip, then the pip with a soft inner gradient
    g.beginPath(); g.arc(x, y + r * 0.08, r * 1.04, 0, Math.PI * 2);
    g.fillStyle = light ? 'rgba(60,0,0,0.35)' : 'rgba(255,255,255,0.75)'; g.fill();
    const grad = g.createRadialGradient(x - r * 0.3, y - r * 0.35, r * 0.1, x, y, r);
    if (light) { grad.addColorStop(0, '#fffdf6'); grad.addColorStop(1, '#e2d4bb'); }
    else { grad.addColorStop(0, '#45454c'); grad.addColorStop(1, '#0b0b0e'); }
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fillStyle = grad; g.fill();
  }

  function numberTexture(kind, v) {
    const style = STYLE[kind];
    const { cv, g } = baseCanvas(style);
    for (const p of PIPS[v]) drawPip(g, POS[p[1]] * TEX, POS[p[0]] * TEX, TEX * 0.088, style.pip === 'light');
    return finish(cv);
  }

  function gateTexture(color) {
    const { cv, g } = baseCanvas(STYLE.event);
    const C = { blue: ['#7fb2ff', '#2a5fc4'], green: ['#8ce8aa', '#1f8c55'], yellow: ['#ffe48a', '#cf9512'] }[color];
    const x0 = TEX * 0.2, x1 = TEX * 0.8, y0 = TEX * 0.18, y1 = TEX * 0.8, w = x1 - x0;
    const arch = (inset) => {
      g.beginPath();
      g.moveTo(x0 + inset, y1);
      g.lineTo(x0 + inset, y0 + w / 2);
      g.arc(TEX / 2, y0 + w / 2, w / 2 - inset, Math.PI, 0);
      g.lineTo(x1 - inset, y1);
      g.closePath();
    };
    const grad = g.createLinearGradient(0, y0, 0, y1);
    grad.addColorStop(0, C[0]); grad.addColorStop(1, C[1]);
    arch(0); g.fillStyle = grad; g.fill();
    g.lineWidth = TEX * 0.018; g.strokeStyle = 'rgba(0,0,0,0.18)'; g.stroke();
    // doorway
    const dw = w * 0.4, dx = TEX / 2 - dw / 2, dy = y1 - w * 0.55;
    g.beginPath(); g.moveTo(dx, y1); g.lineTo(dx, dy + dw / 2); g.arc(TEX / 2, dy + dw / 2, dw / 2, Math.PI, 0); g.lineTo(dx + dw, y1); g.closePath();
    g.fillStyle = 'rgba(0,0,0,0.45)'; g.fill();
    return finish(cv);
  }

  function shipTexture() {
    const { cv, g } = baseCanvas(STYLE.event);
    const tex = finish(cv);
    const paint = () => {
      const s = TEX * 0.8;
      g.drawImage(shipImg, (TEX - s) / 2, (TEX - s) / 2, s, s);
      tex.needsUpdate = true;
      requestRender();
    };
    if (shipImg.complete && shipImg.naturalWidth) paint(); else pendingShip.push(paint);
    return tex;
  }
  shipImg.onload = () => pendingShip.splice(0).forEach((f) => f());

  function finish(cv) {
    const t = new THREE.CanvasTexture(cv);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = maxAniso;
    return t;
  }

  // BoxGeometry material order: +X, -X, +Y, -Y, +Z, -Z
  const NUM_LAYOUT = [2, 5, 3, 4, 1, 6];
  const EVENT_LAYOUT = ['ship', 'blue', 'ship', 'green', 'ship', 'yellow'];
  const NORMALS = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]].map((a) => new THREE.Vector3(...a));
  // Direction of each face texture's "up" in the die's local space (BoxGeometry UV layout)
  const UPS = [[0, 1, 0], [0, 1, 0], [0, 0, -1], [0, 0, 1], [0, 1, 0], [0, 1, 0]].map((a) => new THREE.Vector3(...a));

  const geometry = new RoundedBoxGeometry(1, 1, 1, 6, 0.13);
  const matCache = {};
  function materialsFor(kind) {
    if (matCache[kind]) return matCache[kind];
    const layout = kind === 'event' ? EVENT_LAYOUT : NUM_LAYOUT;
    let ship;
    const mats = layout.map((v) => {
      let map;
      if (kind !== 'event') map = numberTexture(kind, v);
      else if (v === 'ship') map = ship || (ship = shipTexture());
      else map = gateTexture(v);
      return new THREE.MeshPhysicalMaterial({
        map, roughness: 0.42, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.35,
        envMapIntensity: 0.45,
      });
    });
    return (matCache[kind] = { mats, layout });
  }

  // ---------------------------------------------------------------- dice + layout
  let dice = []; // { mesh, kind, home: Vector3, anim }
  // Centre-to-centre distance in die units, measured from the CSS layout. It is kept above
  // the cube's diagonal (~1.75) so tumbling dice can never overlap.
  let SPACING = 1.8;

  function setKinds(kinds) {
    if (!canvas.isConnected) host.appendChild(canvas);
    for (const d of dice) scene.remove(d.mesh);
    dice = kinds.map((kind, i) => {
      const { mats, layout } = materialsFor(kind);
      const mesh = new THREE.Mesh(geometry, mats);
      mesh.castShadow = true;
      const home = new THREE.Vector3((i - (kinds.length - 1) / 2) * SPACING, 0, 0);
      mesh.position.copy(home);
      scene.add(mesh);
      return { mesh, kind, layout, home, anim: null };
    });
    resize();
  }

  const _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _v = new THREE.Vector3(), _u = new THREE.Vector3();

  // Orientation that turns the face showing `value` toward the camera, upright.
  function targetQuat(d, value) {
    const options = d.layout.map((v, i) => (v === value ? i : -1)).filter((i) => i >= 0);
    const f = options[Math.floor(Math.random() * options.length)] ?? 4;
    const toCam = _v.copy(camera.position).sub(d.home).normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(NORMALS[f], toCam);
    // roll about the view axis so the face's "up" points to screen-up
    const up = _u.copy(UPS[f]).applyQuaternion(q);
    const worldUp = new THREE.Vector3(0, 1, 0);
    const a = up.clone().projectOnPlane(toCam).normalize();
    const b = worldUp.projectOnPlane(toCam).normalize();
    let ang = Math.acos(THREE.MathUtils.clamp(a.dot(b), -1, 1));
    if (new THREE.Vector3().crossVectors(a, b).dot(toCam) < 0) ang = -ang;
    _q2.setFromAxisAngle(toCam, ang);
    // rest with a slight forward tilt (a sliver of the top shows) and a gentle inward turn for outer dice
    const tilt = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), 0.32);
    const yaw = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.sign(d.home.x) * 0.16);
    return yaw.multiply(tilt).multiply(_q2.clone().multiply(q));
  }

  const DURATION = 1250;
  function show(values, animate) {
    const now = performance.now();
    dice.forEach((d, i) => {
      const v = values[i];
      const qEnd = targetQuat(d, v);
      if (!animate) {
        d.anim = null;
        d.mesh.quaternion.copy(qEnd);
        d.mesh.position.copy(d.home);
        return;
      }
      const dir = i % 2 ? -1 : 1;
      const axis = new THREE.Vector3(1, (Math.random() - 0.5) * 1.2, (Math.random() - 0.5) * 1.4 * dir).normalize();
      const axis2 = new THREE.Vector3((Math.random() - 0.5) * 0.6, 1, (Math.random() - 0.5) * 0.8).normalize();
      d.anim = {
        start: now + i * 70,
        qStart: d.mesh.quaternion.clone(),
        qEnd,
        axis,
        axis2,
        spin: Math.PI * 2 * (4.5 + Math.random() * 2) * (Math.random() < 0.5 ? -1 : 1),
        spin2: Math.PI * 2 * (1 + Math.random()) * (Math.random() < 0.5 ? -1 : 1),
        hop: 1.0 + Math.random() * 0.25,
      };
    });
    requestRender();
  }

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const smooth = (a, b, t) => { const x = THREE.MathUtils.clamp((t - a) / (b - a), 0, 1); return x * x * (3 - 2 * x); };

  function step(now) {
    let busy = false;
    for (const d of dice) {
      const a = d.anim;
      if (!a) continue;
      const t = THREE.MathUtils.clamp((now - a.start) / DURATION, 0, 1);
      if (t < 1) busy = true;
      // decaying bounces
      const y = a.hop * Math.abs(Math.sin(t * Math.PI * 2.5)) * Math.pow(1 - t, 1.7);
      d.mesh.position.set(d.home.x, d.home.y + y, d.home.z);
      // spin unwinds onto the final orientation; blend in from where the die was resting
      const left = 1 - easeOut(t);
      _q.setFromAxisAngle(a.axis, a.spin * left).multiply(_q2.setFromAxisAngle(a.axis2, a.spin2 * left)).multiply(a.qEnd);
      d.mesh.quaternion.copy(a.qStart).slerp(_q, smooth(0, 0.18, t));
      if (t >= 1) { d.mesh.quaternion.copy(a.qEnd); d.mesh.position.copy(d.home); d.anim = null; }
    }
    return busy;
  }

  // ---------------------------------------------------------------- render loop (only while needed)
  let raf = 0;
  function frame(now) {
    raf = 0;
    const busy = step(now);
    renderer.render(scene, camera);
    if (busy) raf = requestAnimationFrame(frame);
  }
  function requestRender() { if (!raf) raf = requestAnimationFrame(frame); }

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    const dieEl = host.querySelector('.die');
    const dpx = dieEl ? dieEl.offsetWidth : 100; // one die, in CSS pixels
    if (!w || !h) return;
    const els = host.querySelectorAll('.die');
    if (els.length > 1) SPACING = Math.max(1.8, (els[1].offsetLeft - els[0].offsetLeft) / dpx);
    dice.forEach((d, i) => {
      d.home.x = (i - (dice.length - 1) / 2) * SPACING;
      if (!d.anim) d.mesh.position.copy(d.home);
    });
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const visibleH = h / dpx; // world units that must fit vertically
    const dist = visibleH / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    camera.position.copy(VIEW_DIR).multiplyScalar(dist);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    // re-aim resting dice at the (possibly moved) camera
    for (const d of dice) if (!d.anim && d.value !== undefined) d.mesh.quaternion.copy(targetQuat(d, d.value));
    requestRender();
  }
  new ResizeObserver(resize).observe(host);

  // remember values so resizes can re-aim resting dice
  const api = {
    ready: true,
    setKinds,
    show(values, animate) {
      dice.forEach((d, i) => (d.value = values[i]));
      show(values, animate);
    },
  };
  host.classList.add('gl');
  window.Dice3D = api;
  window.dispatchEvent(new Event('dice3d-ready'));
}
