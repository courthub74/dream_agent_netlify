const collectBtn = document.getElementById("collectBtn");
const marketModal = document.getElementById("marketModal");
const closeMarketModal = document.getElementById("closeMarketModal");

const marketWorkTitle = document.getElementById("marketWorkTitle");
const marketXrp = document.getElementById("marketXrp");
const marketOpenSea = document.getElementById("marketOpenSea");
const marketSuperRare = document.getElementById("marketSuperRare");

function openMarketModal() {
  const work = works[current];

  marketWorkTitle.textContent = work.title;

  marketXrp.href = work.links?.xrp || "#";
  marketOpenSea.href = work.links?.os || "#";
  marketSuperRare.href = work.links?.sr || "#";

  marketModal.classList.remove("hidden");
  marketModal.classList.add("grid");
}

function closeMarkets() {
  marketModal.classList.add("hidden");
  marketModal.classList.remove("grid");
}

collectBtn.addEventListener("click", openMarketModal);
closeMarketModal.addEventListener("click", closeMarkets);

marketModal.addEventListener("click", (e) => {
  if (e.target === marketModal) closeMarkets();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMarkets();
});