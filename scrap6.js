var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

// clears the screen
function clear () {
    process.stdout.write('\u001B[2J\u001B[0;0f')
}

rl.on('line', function(input) {
// clears screen
clear ();
// attempting to convert the input to a number
var num = Number(input)
// checking if input was not a number
if (isNaN(num)) {
    console.log('that is not a valid number')
} else {
    console.log('your input was the number: ' + num)
}
})