// Question # 1

// Create a Date object for the date: March 14, 2016 3:12am.

// var now = new Date(2016, 2, 14, 3, 12);


// To log the date in a presentable way in node, we use the toString method.

// console.log(now.toString())

// ------------------------------------

// Question # 2

// Write a function getWeekDay that takes a date object as argument and returns a string with the weekday: 'Mon' 'Tue' 'Wed' 'Thu' 'Fri' 'Sat' 'Sun'.

/**

function getWeekDay (objDate, dayStr) {

    if (objDate.getDay() === 0) {
        return "Sun"
    } else if (objDate.getDay() === 1) {
        return "Mon"
    } else if (objDate.getDay() === 2) {
        return "Tue"
    } else if (objDate.getDay() === 3) {
        return "Wed"
    } else if (objDate.getDay() === 4) {
        return "Thu"
    } else if (objDate.getDay() === 5) {
        return "Fri"
    } else if (objDate.getDay() === 6) {
        return "Sat"
    }

} 


var date = new Date(2012, 0, 3);  // January 3rd 2012
console.log(getWeekDay(date));        // should return 'Tue'

*/

// ------------------------------------

// Question # 3

Create a function getDateBefore that takes as arguments

1. date - a date object.

2.days - a number.

function getDateBefore(objDate, numDays) {

}

It return the day of month days days before the date. The function should not modify the date given as argument.

For example, if today is 20th, then.

var now = new Date();
getDateBefore(now, 1) //  19 
getDateBefore(now, 2) // 18