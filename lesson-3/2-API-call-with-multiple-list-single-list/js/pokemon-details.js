console.log(document.location.search);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
console.log(params.get("name")); 

const pokemonName = params.get("name");

const API_url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

const pokemonDetails = document.querySelector(".pokemon-details");

async function getPokemonDetails() {
    try {
        const response = await fetch(API_url);
        const singlePokemonDetails = await response.json();
        console.log("singlePokemonDetails: ", singlePokemonDetails);
        const pokeWeight = singlePokemonDetails.weight;
        console.log(pokeWeight);
        pokemonDetails.innerHTML = `<div>The weight of the Pokémon is: ${pokeWeight} kg</div>`
    }
    catch(error) {
        console.log(error);
    }
}

getPokemonDetails();
