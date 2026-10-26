// Lightbox: the photo grows out of the thumbnail you pressed and shrinks back into it.
(() => {
  const box = document.querySelector('.lightbox');
  const big = box.querySelector('img');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let source = null;
  let anim = null;

  // Transform that makes the large image sit exactly on top of the thumbnail.
  function fromThumb() {
    const a = source.getBoundingClientRect();
    const b = big.getBoundingClientRect();
    const s = a.width / b.width;
    const dx = a.left + a.width / 2 - (b.left + b.width / 2);
    const dy = a.top + a.height / 2 - (b.top + b.height / 2);
    return `translate(${dx}px, ${dy}px) scale(${s})`;
  }

  // Always start from the live on-screen value so a close during the opening (or vice versa) never jumps.
  function play(to, opts) {
    const current = anim ? getComputedStyle(big).transform : null;
    if (anim) anim.cancel();
    const frames = reduce.matches
      ? [{ opacity: current ? 1 : 0 }, { opacity: to === 'none' ? 1 : 0 }]
      : [{ transform: current && current !== 'none' ? current : (to === 'none' ? fromThumb() : 'none') }, { transform: to === 'none' ? 'none' : fromThumb() }];
    anim = big.animate(frames, { duration: reduce.matches ? 180 : 420, easing: 'cubic-bezier(0.2, 0.9, 0.25, 1)', fill: 'forwards', ...opts });
    return anim;
  }

  function open(btn) {
    source = btn;
    const img = btn.querySelector('img');
    big.src = btn.dataset.full;
    big.alt = img.alt;
    box.showModal();
    box.classList.add('open');
    const go = () => play('none');
    big.complete ? go() : big.addEventListener('load', go, { once: true });
  }

  function close() {
    if (!box.open) return;
    box.classList.remove('open');
    play('thumb').finished.then(() => { anim = null; box.close(); big.removeAttribute('style'); }).catch(() => {});
  }

  document.querySelectorAll('.shot').forEach((btn) => btn.addEventListener('click', () => open(btn)));
  box.addEventListener('click', close);
  box.addEventListener('cancel', (e) => { e.preventDefault(); close(); });
})();

// Copy the contact address; the address stays visible and selectable either way.
(() => {
  const btn = document.querySelector('[data-copy]');
  const note = document.querySelector('.copied');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const text = btn.dataset.copy;
    const done = () => { note.textContent = 'Skopiowano adres.'; };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(done, () => selectMail());
    } else selectMail();
    function selectMail() {
      const r = document.createRange();
      r.selectNodeContents(document.querySelector('.mail'));
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      note.textContent = 'Adres zaznaczony, skopiuj go skrótem ⌘C.';
    }
  });
})();
