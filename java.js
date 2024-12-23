// User se input lena
let a = parseFloat(prompt("Enter first number:"));
let b = parseFloat(prompt("Enter second number:"));
let c = parseFloat(prompt("Entet third number:"));

// Sabse bara number check karna
if (a > b && a > c) {
    console.log(" a is bigger:", a);
} else if (b > a && b > c) {
    console.log(" b is bigger:", b);
} else {
    console.log(" c is bigger :", c);
}
 