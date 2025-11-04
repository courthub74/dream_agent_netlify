function enableDesktopCarousel() {
  if (shell) return;

  cardsCache = Array.from(collections.querySelectorAll(cardSelector));
  if (!cardsCache.length) return;

  shell = document.createElement('div');
  shell.className = 'collections-carousel';

  viewport = document.createElement('div');
  viewport.className = 'cc-viewport';

  track = document.createElement('div');
  track.className = 'cc-track';

  // CLONES for infinite loop
  const firstClone = cardsCache[0].cloneNode(true);
  const lastClone = cardsCache[cardsCache.length - 1].cloneNode(true);
  firstClone.classList.add("clone");
  lastClone.classList.add("clone");

  track.appendChild(lastClone);   // prepend last clone
  cardsCache.forEach(card => track.appendChild(card));
  track.appendChild(firstClone);  // append first clone

  // Controls
  const controls = document.createElement('div');
  controls.className = 'cc-controls';

  prevBtn = document.createElement('button');
  prevBtn.className = 'cc-arrow cc-prev';
  prevBtn.setAttribute('aria-label', 'Previous');
  prevBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M15 5 L8 12 L15 19"/></svg>`;

  nextBtn = document.createElement('button');
  nextBtn.className = 'cc-arrow cc-next';
  nextBtn.setAttribute('aria-label', 'Next');
  nextBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M9 5 L16 12 L9 19"/></svg>`;

  controls.appendChild(prevBtn);
  controls.appendChild(nextBtn);

  viewport.appendChild(track);
  shell.appendChild(viewport);
  shell.appendChild(controls);

  const heading = collections.querySelector('h2');
  collections.insertBefore(shell, heading.nextSibling);

  initControls();

  // Position at first real card
  const step = getStep();
  track.scrollLeft = step; 
}

function initControls() {
  if (!prevBtn || !nextBtn || !track) return;

  prevBtn.addEventListener('click', () => scrollByCards(-1, 1));
  nextBtn.addEventListener('click', () => scrollByCards( 1, 1));

  track.addEventListener('scroll', handleLoop, { passive: true });
}

function handleLoop() {
  const step = getStep();
  const maxScroll = step * (cardsCache.length);

  // Jump back instantly when hitting clones
  if (track.scrollLeft <= 0) {
    track.scrollLeft = maxScroll - step;
  } else if (track.scrollLeft >= maxScroll + step) {
    track.scrollLeft = step;
  }
}

function scrollByCards(dir = 1, count = 1) {
  const step = getStep() * count;
  const target = track.scrollLeft + dir * step;
  track.scrollTo({ left: target, behavior: 'smooth' });
}
