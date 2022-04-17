//if , if else statement

// let x = 50;
// if (x < 50) {
//     console.log("less than 50")
// } else if (x < 70) {
//     console.log("Greater than 50 but smaller than 70")
// } else {
//     console.log("Greater than 70");
// }



// switch statements

// let currentTime = new Date("4/20/2022");
let currentTime = new Date();
let day = currentTime.getDay();

switch (day) {
    case 0: 
    console.log("Sunday");
    break;
    
    case 1: 
    console.log("Monday");
    break;
    
    case 2: 
    console.log("Tuesday");
    break;
    
    case 3: 
    console.log("Wednesday");
    break;
    
    case 4: 
    console.log("Thursday");
    break;
    
    case 5: 
    console.log("Friday");
    break;
    
    case 6: 
    console.log("Saturday");
    break;

    default:
        console.log("Invalid Day")
}
// console.log(day);
