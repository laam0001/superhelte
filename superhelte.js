fetch("https://kea-alt-del.dk/t7/superheroes/")
  .then((res) => res.json())
  .then(showHeros);

function showHeros(heros) {
  heros.forEach(showHero);
}

function showHero(hero) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}
