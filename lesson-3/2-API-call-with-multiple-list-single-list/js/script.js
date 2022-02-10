const urlApi = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40";

const pokemonContainer = document.querySelector(".pokemon");

async function getPokeNames() {
    
    try {
       const response = await fetch(urlApi);
       const responseJSON = await response.json();
       const pokeData = responseJSON.results;
       for(let i = 0; i < pokeData.length; i++) {
           pokemonContainer.innerHTML += `<li><span><a href="pokemon-details.html?name=${pokeData[i].name}">${pokeData[i].name}</a></span></li>`; 
       }
    }
    catch(error) {
        console.log("Some error happened", error);
        pokemonContainer.innerHTML += `<li><span>Sorry, some error happened</span></li>`;
    }
}

getPokeNames();