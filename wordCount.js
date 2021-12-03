let prompt = require('prompt-sync')();
let str = prompt("Enter the string: ");
let word = prompt("Enter the target word: ");
let count = 0;
let foundWord = str.indexOf(word);
while(foundWord !== -1){
    count++;
    foundWord = str.indexOf(word, foundWord + 1);
}
console.log(`Number of occurrences of ${word} in ${str}: ${count}`);