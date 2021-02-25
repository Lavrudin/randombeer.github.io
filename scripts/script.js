let randomBtn = document.getElementById("randomBtn");
console.log(randomBtn);

randomBtn.addEventListener("click", (randomBeer) => {
  let cardContainer = document.getElementById("beforeClick");
  let cardPhrase = document.getElementById("cardPhrase");
  let orderNow = document.getElementById("orderNow");

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

  switch (randomCatalogItem) {
    case "Stella":
      orderNow.innerHTML = `<a href='https://www.ze.delivery/produtos/marca/stella-artois' target='_blank'>Clique para pedir a sua ${randomCatalogItem}</a>`;
      break;
    case "Beck's":
      orderNow.innerHTML = `<a href='https://www.ze.delivery/produtos/marca/becks' target='_blank'>Clique para pedir a sua ${randomCatalogItem}.</a>`;
      break;
    case "Corona":
      orderNow.innerHTML = `<a href='https://www.ze.delivery/produtos/marca/corona' target='_blank'>Clique para pedir a sua ${randomCatalogItem}</a>`;
      break;
    case "Bohemia":
      orderNow.innerHTML = `<a href='https://www.ze.delivery/produtos/marca/bohemia' target='_blank'>Clique para pedir a sua ${randomCatalogItem}</a>`;
      break;
    case "Colorado":
      orderNow.innerHTML = `<a href='https://www.ze.delivery/produtos/marca/colorado' target='_blank'>Clique para pedir a sua ${randomCatalogItem}</a>`;
      break;
    case "Brahma":
      orderNow.innerHTML = `<a href='https://www.ze.delivery/produtos/marca/brahma' target='_blank'>Clique para pedir a sua ${randomCatalogItem}</a>`;
      break;
    case "Skol":
      orderNow.innerHTML = `<a href='https://www.ze.delivery/produtos/marca/skol' target='_blank'>Clique para pedir a sua ${randomCatalogItem}</a>`;
      break;
    case "Budweiser":
      orderNow.innerHTML = `<a href='https://www.ze.delivery/produtos/marca/budweiser' target='_blank'>Clique para pedir a sua ${randomCatalogItem}</a>`;
      break;
    case "Antarctica":
      orderNow.innerHTML = `<a href='https://www.ze.delivery/produtos/marca/antarctica' target='_blank'>Clique para pedir a sua ${randomCatalogItem}</a>`;
      break;
    case "Original":
      orderNow.innerHTML = `<a href='https://www.ze.delivery/produtos/marca/original' target='_blank'>Clique para pedir a sua ${randomCatalogItem}</a>`;
      break;
    case "Duplo Malte":
      orderNow.innerHTML = `<a href='https://www.ze.delivery/produtos/marca/brahma' target='_blank'>Clique para pedir a sua ${randomCatalogItem}</a>`;
      break;
    default:
      console.log("HOUVE UM ERRO");
  }
});
