import './index.css';
import TodoListItems from './todolist.js';
import * as addRemove from './add-remove.js';
import * as storage from './storage.js';
import { changeStatus, clearAllCompleted } from './interactive.js';

const tasks = storage.getTasksFromStorage();

TodoListItems(tasks);
addRemove.TodoListAdd(tasks);
addRemove.TodoListEdit(tasks);
addRemove.TodoListDelete(tasks);
changeStatus(tasks);
clearAllCompleted(tasks);
