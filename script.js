
// Remove and complete icons in SVG format 
let removeSVG = '<i class="fa fa-trash fa-2x"></i>'
let completeSVG = '<i class="fa fa-check fa-lg"></i>'

// User clicked on the add button
// If there is any text inside the item feild, add that text to the todo list
document.getElementById('add').addEventListener('click', function(){
let value = document.getElementById('item').value;
if(value) {
    
    addItemTodo(value);
    document.getElementById('item').value = '';

   }

});

function removeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
   
   
    parent.removeChild(item);

}
 
function completeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    let value = item.innerText;

   
    // Check if the item should be added to the completed list or re-added to the todo list
    let target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
    
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
 
}

// Adds a new item to the todo list
function addItemTodo(text) {
    let list = document.getElementById('todo')

    let item = document.createElement('li');
    item.innerText = text;

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;

    let complete = document.createElement('button');
    remove.classList.add('complete');
    complete.innerHTML = completeSVG;

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);

    // Add click event for removing the item
    remove.addEventListener('click', removeItem);

    //Add click event for completing the item
    complete.addEventListener('click', completeItem);
}