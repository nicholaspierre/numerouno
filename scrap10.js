//Print out who selected which character.  Two players can select the same character.
// function quadraticTime(characterNames) {
//     var arr = []
//     for (var i = 0; i < characterNames.length; i++) {
//         for (var j = 0; j < characterNames.length; j++ ) {
//             arr.push(("Player One: " + characterNames[i] + "; Player Two: " + characterNames[j]))
//         }
//     }
//     return arr
// }


// var arr = quadraticTime(["Agnes", "Bart", "Carl"])
// console.log(arr.length)

var arr = [ ["x", "o", "o"]
            ["o", "x", "o"]
            ["x", "o", "x"]
          ] 
function tickTac (arrInput) {
   for (var i = 0; i < arrInput.length; i++) {
       console.log(arrInput[i])
   }
}

console.log(tickTac());