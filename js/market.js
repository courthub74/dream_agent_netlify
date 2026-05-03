function applyMarketplaceLinks(work) {
  const marketXrp = document.getElementById("marketXrp");
  const marketOpenSea = document.getElementById("marketOpenSea");
  const marketSuperRare = document.getElementById("marketSuperRare");

  if (marketXrp) marketXrp.href = work.links?.xrp || "#";
  if (marketOpenSea) marketOpenSea.href = work.links?.os || "#";
  if (marketSuperRare) marketSuperRare.href = work.links?.sr || "#";

  const xrpBtn = document.getElementById("xrpBtn");
  const osBtn = document.getElementById("osBtn");
  const srBtn = document.getElementById("srBtn");

  if (xrpBtn) xrpBtn.href = work.links?.xrp || "#";
  if (osBtn) osBtn.href = work.links?.os || "#";
  if (srBtn) srBtn.href = work.links?.sr || "#";
}