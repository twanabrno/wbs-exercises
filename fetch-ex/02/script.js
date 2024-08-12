async function fetchPokemon() {
  // fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! Status: ${response.status}`);
  //   }
  //   return response.json();
  // })
  // .then(data => {
  //   const promises = data.results.map(pokemon =>
  //     fetch(pokemon.url).then(res => {
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! Status: ${res.status}`);
  //       }
  //       return res.json();
  //     })
  //   );

  //   return Promise.all(promises);
  // })
  // .then(pokemonData => {
  //   pokemonData.forEach(pokemon => {
  //     const types = pokemon.types.map(typeInfo => typeInfo.type.name).join(', ');

  //     const card = document.createElement('div');
  //     card.className = 'bg-white rounded-lg shadow-md p-4 flex flex-col items-center';

  //     const img = document.createElement('img');
  //     img.src = pokemon.sprites.front_default;
  //     img.alt = pokemon.name;
  //     img.className = 'w-20 h-20 mb-2';

  //     const name = document.createElement('h2');
  //     name.className = 'text-xl font-bold capitalize';
  //     name.textContent = pokemon.name;

  //     const type = document.createElement('p');
  //     type.className = 'text-gray-600';
  //     type.textContent = `Type: ${types}`;

  //     card.appendChild(img);
  //     card.appendChild(name);
  //     card.appendChild(type);

  //     document.getElementById('pokemon-container').appendChild(card);
  //   });
  // })
  // .catch(error => {
  //   console.error('Error fetching Pokémon data:', error);

  //   const errorMessage = document.createElement('p');
  //   errorMessage.className = 'text-red-500';
  //   errorMessage.textContent = 'Failed to load Pokémon data.';

  //   document.getElementById('pokemon-container').appendChild(errorMessage);
  // });

  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    });

    const pokemonData = await Promise.all(promises);

    pokemonData.forEach((pokemon) => {
      const types = pokemon.types
        .map((typeInfo) => typeInfo.type.name)
        .join(", ");

      const card = document.createElement("div");
      card.className =
        "bg-white rounded-lg shadow-md p-4 flex flex-col items-center";

      const img = document.createElement("img");
      img.src = pokemon.sprites.front_default;
      img.alt = pokemon.name;
      img.className = "w-20 h-20 mb-2";

      const name = document.createElement("h2");
      name.className = "text-xl font-bold capitalize";
      name.textContent = pokemon.name;

      const type = document.createElement("p");
      type.className = "text-gray-600";
      type.textContent = `Type: ${types}`;

      // Append elements to the card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(type);

      // Append card to the container
      document.getElementById("pokemon-container").appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);

    const errorMessage = document.createElement("p");
    errorMessage.className = "text-red-500";
    errorMessage.textContent = "Failed to load Pokémon data.";

    document.getElementById("pokemon-container").appendChild(errorMessage);
  }
}

window.onload = fetchPokemon;
