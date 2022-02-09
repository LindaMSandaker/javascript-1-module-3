const urlApi = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40";

const pokemonContainer = document.querySelector(".pokemon");

// async function kitchen() {
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc does not exist", error);
//     }
// }
//
// kitchen();

async function getPokeNames() {
    
    try {
       const response = await fetch(urlApi);
       const responseJSON = await response.json();
       const pokeData = responseJSON.results;
       console.log(pokeData);
       for(let i = 0; i < pokeData.length; i++) {
           console.log(pokeData[i].name);
           pokemonContainer.innerHTML += `<li><span>${pokeData[i].name}</span></li>`; 
       }
    }
    catch(error) {
        console.log("Some error happened", error);
    }
}

getPokeNames();