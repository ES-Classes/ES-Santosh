// Functions

// function printHello (name) {
//     console.log(`Your college name : ${name}`);
// }


// ananimous Function
// let printHello = function(name) {
//     console.log(`Your college name : ${name}`);
// }

// function formateName(firstName, lastName) {
//     return `${lastName}, ${firstName}`;
// }


//Arrow functions
// let x = (name) => `Your college name : ${name}`;
// let formateName = (firsName, lastName) => `Your college name : ${firsName}, ${lastName}`;


// printHello("Vedas College");
// let fullName = formateName('Sandip', 'Laxman');
// console.log(fullName);



// print the factorial number
// function facNumber(num) {
//     let fact = 1;
//     for (i = 1; i <= num; i++) {
//         fact = fact * i;
//     }

//     return fact;
// }

// let ans = facNumber(3);
// console.log(ans);




// factorial using recursion
// function factorial (n) {
//     if (n < 2)
//         return 1;

//         return n * factorial(n - 1);
// }
// let ans = factorial(5);
// console.log(ans);


// factorial using arrow function
let fact = (n) => n < 2 ? 1 : n * fact(n-1);
let ans = fact(3);
console.log(ans);