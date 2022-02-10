// http://localhost:63342/javascript-1-module-3/lesson-3/1-get-query-parameters/index.html?school=noroff

console.log(document.location);
console.log(document.location.search); // ?school=noroff

const queryString = document.location.search;

// In order to get the value:

const params = new URLSearchParams(queryString);
console.log(params);
console.log(params.get("school")); // noroff
const mySchoolParam = params.get("school");

// I want to check that I have a param called school

if(!params.has("school")){
    console.log("I don't have the param");
    // console.log I have the param
} else if(params.get("school") === "noroff") {
    console.log("I have the param");
} else {
    document.location.href = "second.html";
}


// I want to check that htis param is equal to noroff