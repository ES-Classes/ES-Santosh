// Arjun wants to build a very simple tip calculator for whenever he goes eating in a restaurant.
// In his country, it's usual to tip 10% if the bill value is between 50 and 300. If the value is different, the tip is 15%.

// Your tasks:
// Calculate the tip, depending on the bill value.
// Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example:
// “The bill was Rs. 200, the tip was Rs. 20, and the total is Rs. 220”

// Test data:
// Test for bill values 275, 40 and 430

function simpCal (num) {
    let billValue = num;
    if (billValue >= 50 && billValue <= 300) {
        let perCent = (billValue * 10)/100;
        let totalBillValue = billValue + perCent;
        return `The bill was Rs. ${billValue}, the tip was Rs. ${perCent}, and the total is Rs. ${totalBillValue}`;
    } else {
        let perCent = (billValue * 15)/100;
        let totalBillValue = billValue + perCent;
        return `The bill was Rs. ${billValue}, the tip was Rs. ${perCent}, and the total is Rs. ${totalBillValue}`;
    }
}

// let simpleCalculator = simpCal(275);
// let simpleCalculator = simpCal(40);
let simpleCalculator = simpCal(430);
console.log(simpleCalculator);