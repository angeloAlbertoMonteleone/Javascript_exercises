const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


function newTodo() {
  const itemCountSpan = document.getElementById('item-count');
  itemCountSpan.innerHTML++;

  const uncheckedCountSpan = document.getElementById('unchecked-count')
  uncheckedCountSpan.innerHTML--;
  
  document.getElementsById('element').innerHTML = 'Count';
  
}

function removeTodo() {
  const itemCountSpan = document.getElementById('item-count');
  itemCountSpan.innerHTML--;

  const uncheckedCountSpan = document.getElementById('unchecked-count')
  uncheckedCountSpan.innerHTML++;

  
}
