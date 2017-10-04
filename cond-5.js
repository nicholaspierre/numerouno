// given a day of the month (as a number),
// print out the day of the week (as a text, example: Monday)
// September 2017

var day_of_month =21

var WhatDay = new Date(`September ${day_of_month}, 2017`);

var weekday = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];


console.log(weekday[WhatDay.getDay()]);