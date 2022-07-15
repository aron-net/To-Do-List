import * as addRemove from './add-remove.js';
import * as storage from './storage.js';
import TodoListItems from './todolist.js';

const changeStatus = (tasks) => {
  let checkbox = document.querySelectorAll('.completed');

  checkbox.forEach((e, index) => {
    e.addEventListener('change', () => {
      tasks[index].completed = e.checked;
      storage.setTasksToStorage(tasks);
      addRemove.indexTasks(tasks);
      addRemove.TodoListDelete(tasks);
      if (tasks[index].completed) {
        e.checked = true;
        e.parentNode.children[1].classList.add('middleline');
      } else {
        e.parentNode.children[1].classList.remove('middleline');
      }
    });
  });

  checkbox = document.querySelectorAll('.completed');
  checkbox.forEach((ee, index) => {
    if (tasks[index].completed) {
      ee.checked = true;
      ee.parentNode.children[1].classList.add('middleline');
    }
  });
};

const clearAllCompleted = (tasks) => {
  const clearButton = document.querySelector('.clear');
  clearButton.addEventListener('click', () => {
    tasks = tasks.filter((e) => !e.completed);
    storage.setTasksToStorage(tasks);
    TodoListItems(tasks);
    addRemove.indexTasks(tasks);
    addRemove.TodoListDelete(tasks);
    TodoListItems(tasks);
    changeStatus(tasks);
  });
};

export { changeStatus, clearAllCompleted };