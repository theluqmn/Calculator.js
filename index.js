const prompt = require('prompt-sync')();

/*
Number.parseFloat() is required since JavaScript treats inputs as strings, hence needs to be converted to
float first for the arithmetic to be done correctly.

Note that JavaScript is a dynamically-typed programming language.
*/

{
    var num1 = Number.parseFloat(prompt("Enter first number: "));
    var num2 = Number.parseFloat(prompt("Enter second number: "));
    var operation = prompt("Enter an operation (+-/*%): ");

    // === means strict equal
    if (operation === "+") { //Addition
        ans = num1 + num2;
        console.log("   Addition");

    } else if (operation === "-") { //Subtraction
        ans = num1 - num2;
        console.log("   Subtraction");

    } else if (operation === "/") { //Division
        ans = num1 / num2;
        console.log("   Division");

    } else if (operation === "*") { //Multiplication
        ans = num1 * num2;
        console.log("   Multiplication");

    } else if (operation === "%") {
        ans = num1 % num2;
        console.log("   Modulus");

    } else { //Input for operation is none of the above
        console.log(`No operation "${operation}"!`);
        operation = "error"
    }

    if (operation !== "error") { //Outputs the answer
        console.log(`Answer: ${num1} ${operation} ${num2} = ${ans}`)
    };
}