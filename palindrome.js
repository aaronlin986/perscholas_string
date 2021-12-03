let prompt = require('prompt-sync')();
let str = prompt("Enter a string: ");
let isPalindrome = str + " is a palindrome.";
for(let i = 0; i < str.length / 2; i++){
    if(str[i] !== str[str.length - 1 - i]){
        isPalindrome = str + " is not a palindrome.";
        break;
    }
}
console.log(isPalindrome);