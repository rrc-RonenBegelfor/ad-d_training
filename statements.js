/* if statements */
const age = 21;

if (age > 20) {
    console.log("You are oever 20 years old.");
}

const names = ['ronen', 'ponen', 'lonen', 'tonen'];

if (names.length > 4) {
    console.log("thats a lot of names!")
} else if (names.length > 3) {
    console.log("Wow! not as much as 5 but still a lot!");
} else {
    console.log("Did you even provide any names..?")
}