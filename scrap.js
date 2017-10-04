// Write a function that takes an array as an argument,
// and returns a copy of the array with the last element at the front. 

function lastToFront (arr) {
    arr.splice(0, 0, arr.pop());
    return arr
}

var arr = [1, 2, 3, 4]
console.log(lastToFront(arr)); 
// returns [4, 1, 2, 3]