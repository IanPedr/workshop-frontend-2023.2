async function fetchChars() {
  const response = await fetch("https://swapi.dev/api/people/");
  const data = await response.json();

  const galeria = document.getElementById("galeria");

  data.results.forEach((character) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <h2>${character.name}</h2>
            <p>Peso: ${character.mass}</p>
            <p>Cor do Cabelo: ${character.hair_color}</p>
            <p>Cor de Pele: ${character.skin_color}</p>
            <p>Cor do Olho: ${character.eye_color}</p>
            <p>Ano : ${character.birth_year}</p>
            <p>Gênero: ${character.gender}</p>
        `;
    galeria.appendChild(card);
  });
}

fetchChars();


var radio = document.querySelector(".manual-btn");
var cont = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  proximaImg();
}, 3000);

function proximaImg() {
  cont++;

  if (cont > 4) {
    cont = 1;
  }

  document.getElementById("radio" + cont).checked = true;
}

