// kitchen() - run the code
//   .then() - next
//   .catch() - catch error
//   .finally() - end of the promise


// Magical keyword
/*
async function kitchen() {
    try {
        await abc;
    }

    catch(error) {
        console.log("abs does not exist", error);
    }

    finally {
        console.log("Runs code anyways");
    }
}
kitchen();
*/

function getSomething() {
    console.log("Hello, i am response from the API");
}

const result = document.querySelector(".result");

try {
    getSomething();
    result.innerHTML = "SUCCESS";
} catch(error) {
    console.log("abs does not exist", error);
    result.innerHTML = "ERROR";
} finally {
    console.log("Runs code anyway");
}