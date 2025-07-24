// Declare a variable named code1.
let code1;

// In a separate statement, assign code1 to an expression that evaluates to 10. Use the numbers 7 and 3 and an arithmetic operator.
code1 = 7 + 3;

//In one statement, initialize another variable named code2 to have a value of 40. The 40 must be calculated using three numbers and the subtraction and division operators.
let code2 = (100 - 20) / 2;

//Create another variable named code3 with a value of 39. The 39 should be calculated using at least one modulo operator.
let code3 = 100 % 61;

//Initialize a variable named message to have the value "The vault has been secured. The combination is:
let message = "The vault has been secured. The combination is:";

//Initialize a variable named codeA to have the value "10-40-39". This value must be calculated by concatenating the variables code1, code2, and code3.
let codeA = code1 + "-" + code2 + "-" + code3;

//Initialize a variable named codeB to have the value "10-40-39". The value must be a single template literal that uses the variables code1, code2, and code3.
let codeB = `${code1}-${code2}-${code3}`;

//Use console.log to print message, codeA, and codeB to the browser console.
console.log(message + codeA + codeB);
console.log(`${message},${codeA},${codeB}`);
