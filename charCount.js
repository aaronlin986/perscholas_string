let prompt = require('prompt-sync')();
let str = prompt("Enter a string: ");
let upperCase = str.toUpperCase();
let letterCount = 0;
let numCount = 0;
let charCount = 0;
for(let i = 0; i < str.length; i++){
    let charCode = upperCase.charCodeAt(i);
    if(charCode > 64 && charCode < 91 ){
        letterCount++;
    }
    else if(charCode < 58 && charCode > 47){
        numCount++;
    }
    else{
        charCount++;
    }
}
console.log(str.length);
console.log("Number of letters: " + letterCount);
console.log("Number of numbers: " + numCount);
console.log("Number of special characters: " + charCount);