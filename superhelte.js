fetch("https://kea-alt-del.dk/t7/superheroes/")
  .then((res) => res.json())
  .then(showHeros);

function showHeros(heros) {
  heros.forEach(showHero);
}

function showHero(hero) {
  console.log(hero);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h2").textContent = hero.realName;
  copy.querySelector("p.alias").textContent = hero.alias;
  copy.querySelector("p.powers").textContent = hero.powers;
  copy.querySelector("p.origin").textContent = hero.origin;
  copy.querySelector("p.weakness").textContent = hero.weakness;
  copy.querySelector("p.active").textContent = hero.active;
  copy.querySelector("p.evil").textContent = hero.isEvil;
  copy.querySelector("p.height").textContent = hero.height;
  copy.querySelector("p.birthday").textContent = hero.birthday;
  copy.querySelector("img").src = hero.image;
  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}
