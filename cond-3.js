// 1. depending on age, it should say alcohol sales is permitted, or not
// 2. but no sales on sunday

var age = 30
var day_of_week = 'SUNDAY'
day_of_week = day_of_week.toLowerCase();

console.assert(day_of_week === 'monday' 
               || day_of_week === 'tuesday' 
               || day_of_week === 'wednesday' 
               || day_of_week === 'thursday' 
               || day_of_week === 'friday' 
               || day_of_week === 'saturday' 
               || day_of_week === 'sunday', 
               "should be a day of week");

if (age < 21 || day_of_week === 'sunday') {
    console.log('sales not permitted')
} else {
    console.log('sales are permitted')
}