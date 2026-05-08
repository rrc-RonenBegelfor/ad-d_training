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