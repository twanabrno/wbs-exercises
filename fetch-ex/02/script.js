
  async function fetchPokemon() {
    const pokemonContainer = document.getElementById('pokemon-container');

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const data = await response.json();

    const promises = data.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));
    const pokemonData = await Promise.all(promises);

    pokemonData.forEach(pokemon => {
      const types = pokemon.types.map(typeInfo => typeInfo.type.name).join(', ');
      const card = document.createElement('div');
      card.className = 'bg-white rounded-lg shadow-md p-4 flex flex-col items-center';

      card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="w-20 h-20 mb-2" />
        <h2 class="text-xl font-bold capitalize">${pokemon.name}</h2>
        <p class="text-gray-600">Type: ${types}</p>
      `;

      pokemonContainer.appendChild(card);
    });
  }

  window.onload = fetchPokemon;