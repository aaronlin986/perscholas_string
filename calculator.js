let prompt = require('prompt-sync')();
let option = Number(prompt("Enter '1' for Addition, '2' for Subtraction, '3' for Multiplication, '4' for Division, or '5' to Exit: "));
while(option != 5){
    let operand1;
    let operand2;
    if(option < 5 && option > 0){
        operand1 = Number(prompt("Enter the first operand: "));
        operand2 = Number(prompt("Enter the second operand: "));
    }
    switch(option){
        case 1:
            console.log(`${operand1} + ${operand2} = ${operand1 + operand2}`);
            break;
        case 2: 
            console.log(`${operand1} - ${operand2} = ${operand1 - operand2}`);
            break;
        case 3:
            console.log(`${operand1} * ${operand2} = ${operand1 * operand2}`);
            break;
        case 4:
            if(operand2 == 0){
                console.log("Cannot divide by 0.");
            }
            else{
                console.log(`${operand1} / ${operand2} = ${operand1 / operand2}`);
            }
            break;
        default:
            console.log("Invalid Option. Please select options 1 - 5.");
    }
    option = Number(prompt("Enter '1' for Addition, '2' for Subtraction, '3' for Multiplication, '4' for Division, or '5' to Exit: "));
}