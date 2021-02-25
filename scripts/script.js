let randomBtn = document.getElementById("randomBtn");
console.log(randomBtn);

randomBtn.addEventListener("click", (randomBeer) => {
  let cardContainer = document.getElementById("beforeClick");
  let cardPhrase = document.getElementById("cardPhrase");

  let beerCatalog = [
    "Stella",
    "Beck's",
    "Corona",
    "Bohemia",
    "Colorado",
    "Brahma",
    "Skol",
    "Budweiser",
    "Antarctica",
    "Original",
    "Duplo Malte",
  ];

  let randomCatalogItem =
    beerCatalog[Math.floor(Math.random() * beerCatalog.length)];

  console.log(randomCatalogItem);

  cardPhrase.style.visibility = "visible";
  cardContainer.style.fontSize = "70px";
  if (window.matchMedia("(max-width: 1440px)").matches) {
    cardContainer.style.fontSize = "50px";
  }
  if (window.matchMedia("(max-width: 1024px)").matches) {
    cardContainer.style.fontSize = "50px";
  }
  if (window.matchMedia("(max-width: 425px)").matches) {
    cardContainer.style.fontSize = "33px";
  }
  cardContainer.innerHTML = `<h1>${randomCatalogItem}</h1>`;
});
