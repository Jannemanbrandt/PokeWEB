const pokedex = document.getElementById("pokedex");

const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 100; i++) {
    //const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const url = `https://localhost:3046/apicalls/v1/pokejan${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
      name: result.name,
      image: result.sprites["front_default"],
      imageback: result.sprites["back_default"],
      type: result.types.map((type) => type.type.name).join(", "),
      id: result.id,
    }));
    displayPokemon(pokemon);
  });
};

const displayPokemon = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLString = pokemon
    .map(
      (pokeman) => `
        <li>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <h2>${pokeman.name}</h2> 
              <img class="card-image" src="${pokeman.image}" alt="Avatar" style="${pokeman.name}">
            </div>
            <div class="flip-card-back">
              <h2>${pokeman.name}</h2> 
              <p>${pokeman.type}</p>
              <img src="${pokeman.imageback}" alt="Avatar" style="${pokeman.name}">
              <p>Pokenum: ${pokeman.id}</p> 
            </div>
          </div>
        </div>
        </li>
    `
    )
    .join("");
  pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();
