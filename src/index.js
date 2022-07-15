import './index.css';
import TodoListItems from './modules/todolist.js';
import * as addRemove from './modules/add-remove.js';
import * as storage from './modules/storage.js';
import { changeStatus, clearAllCompleted } from './modules/interactive.js';

const tasks = storage.getTasksFromStorage();

TodoListItems(tasks);
addRemove.TodoListAdd(tasks);
addRemove.TodoListEdit(tasks);
addRemove.TodoListDelete(tasks);
changeStatus(tasks);
clearAllCompleted(tasks);
