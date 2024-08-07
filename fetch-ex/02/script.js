async function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const promises = data.results.map((pokemon) =>
        fetch(pokemon.url).then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
      );

      return Promise.all(promises);
    })
    .then((pokemonData) => {
      pokemonData.forEach((pokemon) => {
        const types = pokemon.types
          .map((typeInfo) => typeInfo.type.name)
          .join(", ");
        const card = document.createElement("div");
        card.className =
          "bg-white rounded-lg shadow-md p-4 flex flex-col items-center";

        card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="w-20 h-20 mb-2" />
        <h2 class="text-xl font-bold capitalize">${pokemon.name}</h2>
        <p class="text-gray-600">Type: ${types}</p>
      `;

        document.getElementById("pokemon-container").appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching Pokémon data:", error);
      document.getElementById(
        "pokemon-container"
      ).innerHTML = `<p class="text-red-500">Failed to load Pokémon data.</p>`;
    });

  // try {
  //   const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! Status: ${response.status}`);
  //   }
  //   const data = await response.json();

  //   const promises = data.results.map(async (pokemon) => {
  //     const res = await fetch(pokemon.url);
  //     if (!res.ok) {
  //       throw new Error(`HTTP error! Status: ${res.status}`);
  //     }
  //     return res.json();
  //   });

  //   const pokemonData = await Promise.all(promises);

  //   pokemonData.forEach((pokemon) => {
  //     const types = pokemon.types
  //       .map((typeInfo) => typeInfo.type.name)
  //       .join(", ");
  //     const card = document.createElement("div");
  //     card.className =
  //       "bg-white rounded-lg shadow-md p-4 flex flex-col items-center";

  //     card.innerHTML = `
  //         <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="w-20 h-20 mb-2" />
  //         <h2 class="text-xl font-bold capitalize">${pokemon.name}</h2>
  //         <p class="text-gray-600">Type: ${types}</p>
  //       `;

  //     document.getElementById("pokemon-container").appendChild(card);
  //   });
  // } catch (error) {
  //   console.error("Error fetching Pokémon data:", error);
  //   document.getElementById(
  //     "pokemon-container"
  //   ).innerHTML = `<p class="text-red-500">Failed to load Pokémon data.</p>`;
  // }
}

window.onload = fetchPokemon;
