// Prabin and Ram comparing their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height)

// (mass in kg and height in meter).

// Your tasks:
// 1) Store Prabin's and Ram's mass and height in variables
// 2) Calculate both their BMIs using the formula
// 3) Create a Boolean variable 'prabinHigherBMI' containing information about whether Prabin has a higher BMI than Ram.

// #You need to calculate BIM
// Test data:
// 2022 Data: Prabin weights 78 kg and is 1.70 m tall. Ram weights 92 kg and is 1.92 m tall.
// 2020 Data: Prabin weights 95 kg and is 1.69 m tall. Ram weights 85 kg and is 1.95 m tall.


// 1) Store Prabin's and Ram's mass and height in variables

let prabinMass = 78;
let prabinHeight = 1.70;
prabinIBM = prabinMass / (prabinHeight * prabinHeight);
console.log(prabinIBM + "\n");

let ramMass = 92; 
let ramHeight = 1.92;
ramIBM = ramMass / (ramHeight * ramHeight);
console.log(ramIBM + "\n");

let prabinHigherBMI = prabinIBM > ramIBM;
console.log(prabinHigherBMI)
