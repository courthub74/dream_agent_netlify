// --- move REAL cards into the track first ---
cardsCache.forEach(card => track.appendChild(card));

// --- CLONE THE ENTIRE SET to both ends ---
// (safer than guessing how many are visible)
let leftCloneCount  = cardsCache.length;
let rightCloneCount = cardsCache.length;

// build front clones (reverse order so visual order matches)
const frontFrag = document.createDocumentFragment();
for (let i = cardsCache.length - 1; i >= 0; i--) {
  const clone = cardsCache[i].cloneNode(true);
  stripIds(clone);                       // avoid duplicate IDs
  frontFrag.appendChild(clone);
}
track.insertBefore(frontFrag, track.firstChild);

// build end clones (normal order)
const endFrag = document.createDocumentFragment();
for (let i = 0; i < cardsCache.length; i++) {
  const clone = cardsCache[i].cloneNode(true);
  stripIds(clone);
  endFrag.appendChild(clone);
}
track.appendChild(endFrag);

// start so the first visible slide is the first REAL one
requestAnimationFrame(() => goToIndex(leftCloneCount, false));


function normalizeIndex(){
  const n   = cardsCache.length;         // real count
  const idx = getIndex();

  if (idx < leftCloneCount) {
    // in left clones -> jump forward by one full set
    goToIndex(idx + n, false);
  } else if (idx >= leftCloneCount + n) {
    // in right clones -> jump back by one full set
    goToIndex(idx - n, false);
  }
}


console.log({
  real: cardsCache.length,
  leftCloneCount,
  rightCloneCount,
  trackChildren: track.children.length
});
// expected: trackChildren = leftCloneCount + real + rightCloneCount = 3n
