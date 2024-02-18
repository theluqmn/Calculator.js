const prompt = require('prompt-sync')();



{
    var num1 = Number.parseInt(prompt("Enter first number: "));
    var num2 = Number.parseInt(prompt("Enter second number: "));
    var operation = prompt("Enter an operation [+-/*]: ");

    if (operation === "+") {
        ans = num1 + num2;
        console.log("Addition");

    } else if (operation === "-") {
        ans = num1 - num2;
        console.log("Subtraction");


    } else if (operation === "/") {
        ans = num1 / num2;
        console.log("Division");

    } else if (operation === "*") {
        ans = num1 * num2;
        console.log("Multiplication");

    } else {
        console.log(`No operation "${operation}"!`);
        operation = "error"
    }

    if (operation !== "error") {
        console.log(`${num1} ${operation} ${num2} = ${ans}`)
    };
}