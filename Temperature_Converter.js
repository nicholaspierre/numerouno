// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius_temp = 21
var fahrenheit_temp = 90

var celsius_to_fahrenheit = (celsius_temp * 1.8) + 32
var fahrenheit_to_celsius = (fahrenheit_temp - 32) * .5556

console.log(fahrenheit_temp + " is " + fahrenheit_to_celsius)