const TodoListItems = (taskss) => {
  const todolist = document.querySelector('.list-container');
  todolist.innerHTML = '';
  taskss.forEach((e) => {
    const divElement = document.createElement('div');
    const divElement2 = document.createElement('div');
    const htmlitem = `
            <div>
                <input type="checkbox" name="item" id="item" />
                <textarea rows="1" for="item" class="item" required"">${e.description}</textarea>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        `;
    divElement2.classList.add('line');
    divElement.classList.add('list');
    divElement.innerHTML = htmlitem;
    todolist.appendChild(divElement);
    todolist.appendChild(divElement2);
  });
};

export default TodoListItems;
export { TodoListItems };