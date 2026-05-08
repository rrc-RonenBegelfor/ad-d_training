// function declaration
function greet() {
    console.log('hi!');
}

// function expression
const speak = function() {
    console.log('good day!');
}

greet();
speak();

// Arguments and Parameters
const speakFunction = function(name = "Ponen", time = "Morning") {
    console.log(`Good ${time}, ${name}!`);
};

speakFunction();
speakFunction("Ronen", "Afternoon");

// returning values (regular function)
const calcArea = function(radius) {
    // let area = 3.14 * radius**2;
    // return area;
    return 3.14 * radius**2;
}

// or place in a variable
console.log(calcArea(5));

// arrow function
// side note, didnt' actually know this, if there is only one param, you can remove the ().
const calcAreaArrow = (radius) => {
    return 3.14 * radius**2;
}

console.log(calcAreaArrow(2));

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10,15,30], 0.2));