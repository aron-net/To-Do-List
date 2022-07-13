import './index.css';
import * as todoList from './todolist.js';
import * as addRemove from './add-remove.js';
import * as storage from './storage.js';

const tasks = storage.getTasksFromStorage();

todoList.TodoListItems(tasks);
addRemove.TodoListAdd(tasks);
addRemove.TodoListEdit(tasks);
addRemove.TodoListDelete(tasks);
