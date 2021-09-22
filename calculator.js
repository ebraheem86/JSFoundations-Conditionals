const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const answer1 = +prompt("enter first number? ");
const answer2 = +prompt("enter second number? ");
const answer3 = prompt("what is the operator? ");

if(!isNaN(answer1) && !isNaN(answer2)){
    if(answer3 === "+"){
        console.log(`= ${answer1 + answer2}`)
    } else if(answer3 === "-"){
        console.log(`= ${answer1 - answer2}`)
    } else if(answer3 === "*"){
        console.log(`= ${answer1 * answer2}`)
    } else if(answer3 === "/"){
        console.log(`= ${answer1 / answer2}`)
    } else {
        console.log("invalid operator")
    }
} else {
    console.log("invalid numbers")
}

