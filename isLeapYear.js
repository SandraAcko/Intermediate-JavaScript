function isLeapYear(year) {
    if (year % 4 !== 0) {
        return "Not leap year."
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        return "Leap year."
    }
    if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
        return "Not leap year."
    }
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return "Leap year."
    } 

}

var leapCalc = isLeapYear(prompt("Enter a year and I will tell you if it is a leap year!"));
alert(leapCalc);

// Solution from following lesson: (must nest if statements better)

// function isLeap(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year & 400 === 0) {
//                 return "Leap year."
//             } else {
//                 return "Not a leap year."
//             }
//         } else {
//             return "Leap year."
//         }
//     } else {
//         return "Not a leap year."
//     }
// }
