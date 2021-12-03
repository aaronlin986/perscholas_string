let prompt = require('prompt-sync')();
let str = prompt("Enter a string: ");
console.log(str[0].toUpperCase() + str.substring(1));