// ###### Quick Note ######

// =================================
// Since Chrome Browser loads alert, promt, confirm functions first before loading the HTML page, this is a problem since HTML page has instruction for users.

// So wrap up your JS code inside setTimeout Function
window.setTimeout(function(){
    // put all your JS code here
}, 500);
// this will load alert, promt after half second

// in real world alert, pormpt are hardly used even if they are used they aren't used in the begining
// In jQuery $('document').ready() fuction that could use in place of window.setTimeout
// =================================
// ###### Basic ToDo List ######

var todos = [];

var input = prompt("What would you like to do ?");

while(input !== 'quit'){
    if (input === 'list') {
        listTodo();
    } else if(input === 'new') {
        addTodo();
    }
    else if(input === 'delete'){
        deleteTodo();
    }
    
    input = prompt("What would you like to do ?");
}
console.log("OK, YOU QUIT THE APP");

function listTodo(){
    console.log("**************");
    todos.forEach(function(todo, i){
        console.log(i + ': ' +todo);
    });
    console.log("**************");
}

function addTodo(){
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo(){
    var index = prompt("Enter the index todo to delete");
    todos.slice(index, 1);
    console.log("Deleted Todo");
}
