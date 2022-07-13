import toDo from '../modules/ToDoList';
import './index.css';

const toDoList = document.querySelector('.main');

const TASKS = () => {
  let taskList = '';

  for (let i = 0; i < toDo.length; i += 1) {
    const list = `
        <div class="list-item" > 
        <input type="checkbox" name="task" value="task" ${toDo[i].completed}>  
        <label for="item">${toDo[i].description}</label>
        <span class="material-symbols-outlined">more_vert</span>            
        </div>
            `;
    taskList += list;
  }

  toDoList.innerHTML = taskList;
  console.log(toDoList);
};

TASKS();