import "./style.css";

let characters = [];

async function getData() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    } else {
      const data = await response.json();
      characters = data.results;
      displayCharacter(characters);
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

function displayCharacter(characters) {
  const container = document.querySelector("#people");
  container.innerHTML = "";

  characters.forEach((character) => {
    const characterCardHTML = `
      <div class="character-card">
        <img src="${character.image}" alt="${character.name}" class="character-image" />
        <div class="character-info">
          <h3>${character.name}</h3>
          <p>${character.species} - ${character.status}</p>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", characterCardHTML);
  });
}

getData();

document.querySelector("#showAllCharacters").addEventListener("click", () => {
  displayCharacter(characters);
});

document.querySelector("#showHumans").addEventListener("click", () => {
  const humans = characters.filter(
    (character) => character.species === "Human"
  );
  displayCharacter(humans);
});

document.querySelector("#showAlive").addEventListener("click", () => {
  const aliveCharacters = characters.filter(
    (character) => character.status === "Alive"
  );
  displayCharacter(aliveCharacters);
});
