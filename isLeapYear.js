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
