// Function expression
const showPetName = function(name) {
    console.log("The pets name is: " + name);
}

// Fat Arrow function
/** const showPetNameTwo = (name) => {
    console.log("The pets name is: ");
}
 */
// you can remove () and {}, but it's not good practis
// const showPetNameTwo = name => console.log("The pets name is: " + name);

// const showPetNameTwo = () => console.log("The pets name is: Thea");
// showPetNameTwo();

const showPetNameTwo = (name, age) => {
    console.log("The pets name is: " + name + " And her age is: " + age);
}

showPetName("Patrik");
showPetNameTwo("Thea", 15);

// Remember concatination (space)
const name = "Linda";
const age = 39;
console.log("My name is" + " " + name + " My age is " + age);
console.log(`My name is ${name} My age is ${age}`);

// Global scope are variables that can be used everywhere

const cityNames = ["Oslo", "Stockholm", "Copenhagen"];
console.log(cityNames);

function showMeCityNames() {
    console.log("The name of the city is: " + cityNames);
}

showMeCityNames();


function isScania() {
    for (let i = 0; i < cityNames.length; i++) {
        console.log(cityNames[i]);
    }
    if(cityNames) {
        console.log(cityNames + " is Scandinavian");
    } else {
        console.log("not Scandinavian");
    }
}

isScania(cityNames);

// Local scope is when you code inside for example a function

function scopeTest() {
    const animal = "giraff"
    console.log("This is a local scope " + animal);
}

scopeTest(); // This is a local scope giraff

// scopeTest(animal); // animal is not defined!

// Block scope is when you code inside {}

{
    const name1 = "Uzo";
    const car = "tesla";
    console.log(name);
    console.log(car);
}

// console.log(name1); // name1 is not defined

// `this` is used to get information about the container/element/function/event you log

console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const myObject = { // myObject is the parent
    number: 10, // is a sibling
    myFunction: function() { // is a sibling
        console.log(this.number);  // this = parent and number = sibling
  }
}

myObject.myFunction(); // {myFunction: ƒ}

// Termary operator = if/else operator

const pet = "rhino";
let isDangerous; // Boolean
/**
if(pet === "rhino") {
    isDangerous = true;
} else {
    isDangerous = false;
}**/

isDangerous = pet === "rhino" ? true : false;

// const isDangerous = pet === "rhino" ? true : false;
// isDangerous = pet === "Linda" && "rhino" ? true : false;

console.log(pet);
console.log(pet + " is dangerous: " + isDangerous);