var todo = ["dogs", "cats", "bats", "mouse"];
var input = document.querySelector("#text")

function renderTodos() {
    let list = document.querySelector("#todos");

    todo.forEach(function(element){
        addListItem(element)
    })
}

window.addEventListener("load", function(){
    document.querySelector("ul").innerHTML = window.localStorage.getItem("listStore")
})

function addListItem(input) {
    
    // document.querySelector('#todos li:nth-child(2)')
    console.log('adding input: ', input.value)
    window.localStorage.setItem('lastInput', input.value)

    if (input.value) {
        let list = document.querySelector("#todos");
        let newItem = document.createElement("li");
        newItem.innerText = input.value
        list.appendChild(newItem)
        todo.push(input.value);
        input.value = "";
    }
}

function saveLclStrg () {
    window.localStorage.setItem("listStore", document.querySelector("ul").innerHTML)
}

var listItems = document.querySelector("#todos");
listItems.addEventListener("click", function (event) {
    let target = event.target
    if (target.tagName.toUpperCase() == 'LI') {
        target.style.textDecoration = target.style.textDecoration !== 'line-through' ? 'line-through' : 'none'
    }
    saveLclStrg();
})


let submit = document.querySelector("#addnew");
submit.addEventListener("click", function (event) {
    event.preventDefault();
//  addListItem();
    renderTodos();
    saveLclStrg();
})

let btnRemDone = document.querySelector("#removedone");
btnRemDone.addEventListener("click", function (event) {
    var listItems = document.querySelectorAll('#todos li')
    console.log(listItems)
    var list = document.querySelector('#todos')

    for (var i = 0; i < listItems.length; i++) {
        if (listItems[i].style.textDecoration === 'line-through') {
            list.removeChild(listItems[i])
        }
    }
    saveLclStrg();
})

// This code is executed When the page loads
var lastInput = window.localStorage.getItem('lastInput')
console.log('last Input: ', lastInput)