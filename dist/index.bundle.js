(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

// On app load, get all tasks from localStorage
window.onload = loadTasks;

// On form submit add task
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  addTask();
});

function loadTasks() {
  // check if localStorage has any tasks
  // if not then return
  if (localStorage.getItem("tasks") == null) return;

  // Get the tasks from localStorage and convert it to an array
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  // Loop through the tasks and add them to the list
  tasks.forEach(task => {
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
          <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
          <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
    list.insertBefore(li, list.children[0]);
  });
}

function addTask() {
  const task = document.querySelector("form input");
  const list = document.querySelector("ul");
  // return if task is empty
  if (task.value === "") {
    alert("Please add some task!");
    return false;
  }
  // check is task already exist
  if (document.querySelector(`input[value="${task.value}"]`)) {
    alert("Task already exist!");
    return false;
  }

  // add task to local storage
  localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value, completed: false }]));

  // create list item, add innerHTML and append to ul
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
      <input type="text" value="${task.value}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
      <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
  list.insertBefore(li, list.children[0]);
  // clear input
  task.value = "";
}

function taskComplete(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach(task => {
    if (task.task === event.nextElementSibling.value) {
      task.completed = !task.completed;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.nextElementSibling.classList.toggle("completed");
}

function removeTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach(task => {
    if (task.task === event.parentNode.children[1].value) {
      // delete task
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.parentElement.remove();
}

// store current task to track changes
var currentTask = null;

// get current task
function getCurrentTask(event) {
  currentTask = event.value;
}

// edit the task and update local storage
function editTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  // check if task is empty
  if (event.value === "") {
    alert("Task is empty!");
    event.value = currentTask;
    return;
  }
  // task already exist
  tasks.forEach(task => {
    if (task.task === event.value) {
      alert("Task already exist!");
      event.value = currentTask;
      return;
    }
  });
  // update task
  tasks.forEach(task => {
    if (task.task === currentTask) {
      task.task = event.value;
    }
  });
  // update local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RixnQ0FBZ0M7QUFDeEgsc0NBQXNDLFVBQVUsZ0JBQWdCLGtDQUFrQztBQUNsRztBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxXQUFXO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdHQUF3RyxvQ0FBb0M7O0FBRTVJO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gT24gYXBwIGxvYWQsIGdldCBhbGwgdGFza3MgZnJvbSBsb2NhbFN0b3JhZ2VcbndpbmRvdy5vbmxvYWQgPSBsb2FkVGFza3M7XG5cbi8vIE9uIGZvcm0gc3VibWl0IGFkZCB0YXNrXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGFkZFRhc2soKTtcbn0pO1xuXG5mdW5jdGlvbiBsb2FkVGFza3MoKSB7XG4gIC8vIGNoZWNrIGlmIGxvY2FsU3RvcmFnZSBoYXMgYW55IHRhc2tzXG4gIC8vIGlmIG5vdCB0aGVuIHJldHVyblxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSA9PSBudWxsKSByZXR1cm47XG5cbiAgLy8gR2V0IHRoZSB0YXNrcyBmcm9tIGxvY2FsU3RvcmFnZSBhbmQgY29udmVydCBpdCB0byBhbiBhcnJheVxuICBsZXQgdGFza3MgPSBBcnJheS5mcm9tKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgdGFza3MgYW5kIGFkZCB0aGVtIHRvIHRoZSBsaXN0XG4gIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uY2xpY2s9XCJ0YXNrQ29tcGxldGUodGhpcylcIiBjbGFzcz1cImNoZWNrXCIgJHt0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7dGFzay50YXNrfVwiIGNsYXNzPVwidGFzayAke3Rhc2suY29tcGxldGVkID8gJ2NvbXBsZXRlZCcgOiAnJ31cIiBvbmZvY3VzPVwiZ2V0Q3VycmVudFRhc2sodGhpcylcIiBvbmJsdXI9XCJlZGl0VGFzayh0aGlzKVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIiBvbmNsaWNrPVwicmVtb3ZlVGFzayh0aGlzKVwiPjwvaT5gO1xuICAgIGxpc3QuaW5zZXJ0QmVmb3JlKGxpLCBsaXN0LmNoaWxkcmVuWzBdKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSBpbnB1dFwiKTtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcbiAgLy8gcmV0dXJuIGlmIHRhc2sgaXMgZW1wdHlcbiAgaWYgKHRhc2sudmFsdWUgPT09IFwiXCIpIHtcbiAgICBhbGVydChcIlBsZWFzZSBhZGQgc29tZSB0YXNrIVwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gY2hlY2sgaXMgdGFzayBhbHJlYWR5IGV4aXN0XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt2YWx1ZT1cIiR7dGFzay52YWx1ZX1cIl1gKSkge1xuICAgIGFsZXJ0KFwiVGFzayBhbHJlYWR5IGV4aXN0IVwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBhZGQgdGFzayB0byBsb2NhbCBzdG9yYWdlXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoWy4uLkpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSB8fCBcIltdXCIpLCB7IHRhc2s6IHRhc2sudmFsdWUsIGNvbXBsZXRlZDogZmFsc2UgfV0pKTtcblxuICAvLyBjcmVhdGUgbGlzdCBpdGVtLCBhZGQgaW5uZXJIVE1MIGFuZCBhcHBlbmQgdG8gdWxcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25jbGljaz1cInRhc2tDb21wbGV0ZSh0aGlzKVwiIGNsYXNzPVwiY2hlY2tcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt0YXNrLnZhbHVlfVwiIGNsYXNzPVwidGFza1wiIG9uZm9jdXM9XCJnZXRDdXJyZW50VGFzayh0aGlzKVwiIG9uYmx1cj1cImVkaXRUYXNrKHRoaXMpXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCIgb25jbGljaz1cInJlbW92ZVRhc2sodGhpcylcIj48L2k+YDtcbiAgbGlzdC5pbnNlcnRCZWZvcmUobGksIGxpc3QuY2hpbGRyZW5bMF0pO1xuICAvLyBjbGVhciBpbnB1dFxuICB0YXNrLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gdGFza0NvbXBsZXRlKGV2ZW50KSB7XG4gIGxldCB0YXNrcyA9IEFycmF5LmZyb20oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSk7XG4gIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgaWYgKHRhc2sudGFzayA9PT0gZXZlbnQubmV4dEVsZW1lbnRTaWJsaW5nLnZhbHVlKSB7XG4gICAgICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcbiAgICB9XG4gIH0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIGV2ZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrKGV2ZW50KSB7XG4gIGxldCB0YXNrcyA9IEFycmF5LmZyb20oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSk7XG4gIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgaWYgKHRhc2sudGFzayA9PT0gZXZlbnQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS52YWx1ZSkge1xuICAgICAgLy8gZGVsZXRlIHRhc2tcbiAgICAgIHRhc2tzLnNwbGljZSh0YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcbiAgICB9XG4gIH0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIGV2ZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG59XG5cbi8vIHN0b3JlIGN1cnJlbnQgdGFzayB0byB0cmFjayBjaGFuZ2VzXG52YXIgY3VycmVudFRhc2sgPSBudWxsO1xuXG4vLyBnZXQgY3VycmVudCB0YXNrXG5mdW5jdGlvbiBnZXRDdXJyZW50VGFzayhldmVudCkge1xuICBjdXJyZW50VGFzayA9IGV2ZW50LnZhbHVlO1xufVxuXG4vLyBlZGl0IHRoZSB0YXNrIGFuZCB1cGRhdGUgbG9jYWwgc3RvcmFnZVxuZnVuY3Rpb24gZWRpdFRhc2soZXZlbnQpIHtcbiAgbGV0IHRhc2tzID0gQXJyYXkuZnJvbShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpKTtcbiAgLy8gY2hlY2sgaWYgdGFzayBpcyBlbXB0eVxuICBpZiAoZXZlbnQudmFsdWUgPT09IFwiXCIpIHtcbiAgICBhbGVydChcIlRhc2sgaXMgZW1wdHkhXCIpO1xuICAgIGV2ZW50LnZhbHVlID0gY3VycmVudFRhc2s7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHRhc2sgYWxyZWFkeSBleGlzdFxuICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgIGlmICh0YXNrLnRhc2sgPT09IGV2ZW50LnZhbHVlKSB7XG4gICAgICBhbGVydChcIlRhc2sgYWxyZWFkeSBleGlzdCFcIik7XG4gICAgICBldmVudC52YWx1ZSA9IGN1cnJlbnRUYXNrO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSk7XG4gIC8vIHVwZGF0ZSB0YXNrXG4gIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgaWYgKHRhc2sudGFzayA9PT0gY3VycmVudFRhc2spIHtcbiAgICAgIHRhc2sudGFzayA9IGV2ZW50LnZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIC8vIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=