let counter = 1;

const intervalId = setInterval(async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    const data = await response.json();

    const pokemon = {
      id: data.id,
      name: data.name
    };
    console.log(pokemon);
    counter++;
    if (counter > 150) {
      clearInterval(intervalId);
      console.log("Finished fetching all 150 Pokémon!");
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    clearInterval(intervalId); s
  }
}, 1000);