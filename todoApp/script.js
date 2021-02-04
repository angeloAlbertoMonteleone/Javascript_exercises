const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}
const ul = document.querySelector('ul');
const li = `<li>Count</li>`;

function newTodo() {
  const itemCountSpan = document.getElementById('item-count');
  itemCountSpan.innerHTML++;
  
  ul.innerHTML += li;
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  uncheckedCountSpan.innerHTML--;
}



function removeTodo() {
  const itemCountSpan = document.getElementById('item-count');
  itemCountSpan.innerHTML--;
  
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  uncheckedCountSpan.innerHTML++;  
}

