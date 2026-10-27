document.documentElement.classList.add('js');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');

// Mobile menu: grows out of the button that opens it, closes on pick or outside tap.
(() => {
  const btn = document.querySelector('.menu-btn');
  const menu = document.getElementById('menu');
  const set = (open) => { menu.classList.toggle('open', open); btn.setAttribute('aria-expanded', open); };
  btn.addEventListener('click', (e) => { e.stopPropagation(); set(!menu.classList.contains('open')); });
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) set(false); });
  document.addEventListener('click', (e) => { if (!e.target.closest('.bar')) set(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
})();

// Highlight the section you are reading in the nav.
(() => {
  const links = [...document.querySelectorAll('.links a')];
  const map = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => a.classList.remove('on'));
      map.get(en.target.id)?.classList.add('on');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  map.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
})();

// Sections rise slightly into place; they are readable before this ever runs.
(() => {
  const els = document.querySelectorAll('.reveal');
  if (reduce.matches || !('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach((el) => io.observe(el));
})();

// Hero: a few sparks run along invisible power lines.
(() => {
  const cv = document.querySelector('.sparks');
  if (!cv || reduce.matches) return;
  const ctx = cv.getContext('2d');
  let w, h, dpr, lines, sparks = [], visible = true, raf;
  function size() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = cv.clientWidth; h = cv.clientHeight;
    cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // gently sagging cables across the upper half
    lines = [0.18, 0.27, 0.4].map((y, i) => ({ y: h * y, sag: 30 + i * 18, tilt: (i - 1) * 40 }));
  }
  const pointOn = (l, t) => ({ x: t * w, y: l.y + l.tilt * (t - 0.5) + l.sag * 4 * t * (1 - t) });
  function spawn() { sparks.push({ l: lines[(Math.random() * lines.length) | 0], t: 0, v: 0.0016 + Math.random() * 0.0022 }); }
  function frame() {
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(99, 209, 255, 0.10)';
    lines.forEach((l) => { ctx.beginPath(); for (let t = 0; t <= 1.001; t += 0.02) { const p = pointOn(l, t); t ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y); } ctx.stroke(); });
    if (sparks.length < 4 && Math.random() < 0.02) spawn();
    sparks = sparks.filter((s) => s.t <= 1);
    sparks.forEach((s) => {
      s.t += s.v;
      for (let k = 0; k < 14; k++) {           // short fading tail encodes speed
        const p = pointOn(s.l, Math.max(0, s.t - k * 0.004));
        ctx.fillStyle = `rgba(150, 225, 255, ${0.9 * (1 - k / 14)})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, 2.2 - k * 0.12, 0, Math.PI * 2); ctx.fill();
      }
    });
    if (visible) raf = requestAnimationFrame(frame);
  }
  size(); addEventListener('resize', size);
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; cancelAnimationFrame(raf); if (visible) raf = requestAnimationFrame(frame); }).observe(cv);
})();

// Gallery carousel: drag with the pointer, flick to throw, snaps where the momentum lands.
(() => {
  const car = document.querySelector('.carousel');
  if (!car) return;
  const cards = () => [...car.children];
  const step = () => cards()[0].getBoundingClientRect().width + parseFloat(getComputedStyle(car).columnGap || 16);
  document.querySelectorAll('.car-btns .round').forEach((b) =>
    b.addEventListener('click', () => car.scrollBy({ left: Number(b.dataset.dir) * step(), behavior: reduce.matches ? 'auto' : 'smooth' })));

  // Apple's projection: where a flick would come to rest with scroll-like deceleration.
  const project = (v, d = 0.998) => (v / 1000) * d / (1 - d);
  let startX = 0, startScroll = 0, hist = [], dragging = false, moved = false;
  car.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;                 // touch already gets native momentum
    dragging = true; moved = false; startX = e.clientX; startScroll = car.scrollLeft; hist = [[e.clientX, e.timeStamp]];
  });
  addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    if (!moved && Math.abs(dx) < 8) return;               // small hysteresis before we commit to a drag
    if (!moved) { moved = true; car.classList.add('dragging'); }
    car.scrollLeft = startScroll - dx;                    // 1:1 with the pointer
    hist.push([e.clientX, e.timeStamp]); if (hist.length > 5) hist.shift();
  });
  addEventListener('pointerup', () => {
    if (!dragging) return;
    dragging = false;
    if (!moved) return;
    const [a, b] = [hist[0], hist[hist.length - 1]];
    const v = b[1] > a[1] ? ((b[0] - a[0]) / (b[1] - a[1])) * 1000 : 0;   // px/s
    const target = car.scrollLeft - project(v);
    const s = step();
    const snapped = Math.max(0, Math.round(target / s) * s);
    car.scrollTo({ left: snapped, behavior: reduce.matches ? 'auto' : 'smooth' });
    setTimeout(() => car.classList.remove('dragging'), 450);
  });
  // a drag must not open the lightbox
  car.addEventListener('click', (e) => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
  car.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); car.scrollBy({ left: (e.key === 'ArrowRight' ? 1 : -1) * step(), behavior: 'smooth' }); }
  });
})();

// Barierka plays right on the page once you ask for it.
(() => {
  const btn = document.getElementById('play');
  const screen = document.getElementById('screen');
  if (!btn) return;
  btn.addEventListener('click', () => {
    // phones play in landscape on the game's own page, where it can fill the screen
    if (matchMedia('(max-width: 720px)').matches) { location.href = 'barierka/index.html'; return; }
    const f = document.createElement('iframe');
    f.src = 'barierka/index.html';
    f.title = 'Barierka';
    f.allow = 'fullscreen; autoplay';
    f.addEventListener('load', () => f.focus());
    screen.replaceChildren(f);
    screen.scrollIntoView({ block: 'center', behavior: reduce.matches ? 'auto' : 'smooth' });
  });
})();

// Lightbox: the photo grows out of the thumbnail you pressed and shrinks back into it.
(() => {
  const box = document.querySelector('.lightbox');
  const big = box.querySelector('img');
  let source = null, anim = null;

  function fromThumb() {
    const a = source.getBoundingClientRect();
    const b = big.getBoundingClientRect();
    const s = a.width / b.width;
    const dx = a.left + a.width / 2 - (b.left + b.width / 2);
    const dy = a.top + a.height / 2 - (b.top + b.height / 2);
    return `translate(${dx}px, ${dy}px) scale(${s})`;
  }
  // Always start from the live on-screen value so an interrupted open/close never jumps.
  function play(to) {
    const current = anim ? getComputedStyle(big).transform : null;
    if (anim) anim.cancel();
    const frames = reduce.matches
      ? [{ opacity: to === 'none' ? 0 : 1 }, { opacity: to === 'none' ? 1 : 0 }]
      : [{ transform: current && current !== 'none' ? current : (to === 'none' ? fromThumb() : 'none') }, { transform: to === 'none' ? 'none' : fromThumb() }];
    anim = big.animate(frames, { duration: reduce.matches ? 180 : 440, easing: 'cubic-bezier(0.2, 0.9, 0.25, 1)', fill: 'forwards' });
    return anim;
  }
  function open(btn) {
    source = btn;
    big.src = btn.dataset.full;
    big.alt = btn.querySelector('img').alt;
    box.showModal(); box.classList.add('open');
    const go = () => play('none');
    big.complete ? go() : big.addEventListener('load', go, { once: true });
  }
  function close() {
    if (!box.open) return;
    box.classList.remove('open');
    play('thumb').finished.then(() => { anim = null; box.close(); }).catch(() => {});
  }
  document.querySelectorAll('.shot').forEach((b) => b.addEventListener('click', () => open(b)));
  box.addEventListener('click', close);
  box.addEventListener('cancel', (e) => { e.preventDefault(); close(); });
})();

// Copy the contact address; it stays visible and selectable either way.
(() => {
  const btn = document.querySelector('[data-copy]');
  const note = document.querySelector('.copied');
  if (!btn) return;
  const selectMail = () => {
    const r = document.createRange();
    r.selectNodeContents(document.querySelector('.mail'));
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    note.textContent = 'Adres zaznaczony, skopiuj go skrótem ⌘C.';
  };
  btn.addEventListener('click', () => {
    if (navigator.clipboard) navigator.clipboard.writeText(btn.dataset.copy).then(() => { note.textContent = 'Skopiowano adres.'; }, selectMail);
    else selectMail();
  });
})();
