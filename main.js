var completeLogo = '<svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"/></svg>'
var deleteLogo = '<svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"/></svg>'

//user clicked on the add button
//If there is any inside the item 
document.getElementById('add').addEventListener('click', function(){
    var value = document.getElementById('item').value;
    if(value){
        addItemTodo(value);
        //makes the input clean after adding the item
        document.getElementById('item').value = '';
    }
});

function removeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode; 

    parent.removeChild(item);
}

function completeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode; 
    var id = parent.id;

    // Check if the item is 
    var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo'); 

    parent.removeChild(item);
    target.append(item);
}

//-----------------------------------------//


//*1. TESTAR KNAPP*//
const divTodo = document.getElementById('todo'); 
const divClearTodo = document.getElementById('clearTodo'); 
const clearButton = document.createElement('button');
clearButton.textContent = "Clear All Todos";

//*1. TESTAR KNAPP.*//
add.addEventListener('click', function(){
    const newClearButton = clearButton.cloneNode(true);
    divClearTodo.appendChild(clearButton); 
})

clearButton.addEventListener('click', function(){
    divTodo.parentNode.removeChild(divTodo);
})

//-----------------------------------------//


//Adds a new tem to the todo list
function addItemTodo(text){
    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeLogo;

    // Add click event for completing items
    complete.addEventListener('click', completeItem);

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = deleteLogo;

    // Add click event for removing item
    remove.addEventListener('click', removeItem); 

    buttons.appendChild(complete);  
    buttons.appendChild(remove);
    item.appendChild(buttons);
    //makes the latest added item appear first
    list.insertBefore(item, list.childNodes[0]);
} 