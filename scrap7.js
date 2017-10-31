// Create an array `arr3` using `map` that has all
// elements of `arr` doubled. I.e. `arr3 === [2, 4, 6]`

Array.prototype.map = function(func) {
    var results = [];
    for (var i = 0; i < this.length; i++){
        results.push(func(this[i]));
    }

    return results;
};

var arr = [1, 2, 3]
var arr3 = arr.map(function(num){
    return num + 1
})

console.log(arr2)

