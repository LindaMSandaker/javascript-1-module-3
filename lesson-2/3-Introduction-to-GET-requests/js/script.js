

const url = "https://catfact.ninja/facts";

const factsContainer = document.querySelector(".my-cats-fact");

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.data); 
        const catFactsArr = data.data;
        factsContainer.innerHTML = "";
        for(let i = 0; i < catFactsArr.length; i++){
            console.log(catFactsArr[i].fact);
            if(i === 4) {
                break;
            }
            factsContainer.innerHTML += `<li>${catFactsArr[i].fact}</li>`
        }
    })
    .catch((error) =>  {
        console.log(error);
    })


// const url = "https://catfact.nnja/facts";
// TypeError: NetworkError when attempting to fetch resource. script.js:13:17
// Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://catfact.nnja/facts. (Reason: CORS request did not succeed). Status code: (null).