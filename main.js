function handleGetMorePokemons(data) {
  let output = "";

  data.results.map((poke) => {
    output += `
                <div class=poke>
                    <h3>${poke.name}</h3>
                    <a href='${poke.url}'> ${poke.url} </a>                
                </div>
            `;
  });

  document.getElementById("result").innerHTML = output;
}

function handleGetSinglePokemon(data) {
  const output = `
    <div class=poke>
        <img src="${data.sprites.front_default}" alt="${data.name} title="${data.name}" id="icon" />
        <p> <strong>${data.name} </strong> </p>
    </div>
  `;

  document.getElementById("result").innerHTML = output;
}

document.getElementById("btn").addEventListener("click", () => {
  const pokemonName = document.getElementById("imp").value;
  let url = "https://pokeapi.co/api/v2/pokemon";

  if (pokemonName) {
    url += `/${pokemonName}`;
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (pokemonName) {
        handleGetSinglePokemon(data);
      } else {
        handleGetMorePokemons(data);
      }
    })
    .catch((error) => console.log(error));
});

//data.sprites.front_default