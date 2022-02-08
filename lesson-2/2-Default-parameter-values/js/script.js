function printMessage(message) {
    if(!message) {
        message = "No value is here"
    }
    console.log(message);
}

printMessage();

// default value for the property argument

function printMessage(message = "No value here either") {
    console.log(message);
}

printMessage();
printMessage("Hello, here's a message for you");

function getSum(numA = 0, numB = 0) {
    return numA + numB;
}

const totalSum = getSum(5,19);
console.log("The totalsum is " + totalSum);

const totalSumTwo = getSum();
console.log(totalSumTwo); // NaN // 0 after putting numbers w/arg = 