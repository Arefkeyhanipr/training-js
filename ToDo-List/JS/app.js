const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const editBtn = document.getElementById("edit-btn");
const alertMessage = document.getElementById("alert-message");
const todosBody = document.querySelector("tbody");
const deleteAllBtn = document.getElementById("delete-all-btn");
const filterBtns = document.querySelectorAll(".filter-todos");
let todos = JSON.parse(localStorage.getItem("todos")) || [];

//Functions

const generateId = () => {
  return Math.round(
    Math.random() * Math.random() * Math.pow(10, 15).toString()
  );
};

const showAlert = (message, type) => {
  alertMessage.innerHTML = "";
  const alert = document.createElement("p");
  alert.innerText = message;
  alert.classList.add("alert");
  alert.classList.add(`alert-${type}`);
  alertMessage.append(alert);

  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
};

const displayTodos = (data) => {
  const todoList = data || todos;
  todosBody.innerHTML = "";

  if (!todoList.length) {
    todosBody.innerHTML = `<tr><td colspan="4"> No task found!</td></tr>`;
    return;
  }

  todoList.forEach((todo) => {
    todosBody.innerHTML += `<tr>
    <td>${todo.task}</td>
    <td>${todo.date || "No Date Set"}</td>
    <td>${todo.completed ? "Completed" : "Pending"}</td>
    <td>
        <button onclick="editHandler('${todo.id}')">Edit</button>
        <button onclick="toggleHandler(${todo.id})">${
      todo.completed ? "Undo" : "Done"
    }</button>
        <button onclick="deleteHandler('${todo.id}')">Delete</button>
    </td>

    </tr>`;
  });
};

const saveToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addHandler = () => {
  const task = taskInput.value;
  const date = dateInput.value;
  const todo = {
    id: generateId(),
    completed: false,
    task: task,
    date: date,
  };
  if (task) {
    todos.push(todo);
    saveToLocalStorage();
    displayTodos();
    taskInput.value = "";
    dateInput.value = "";
    showAlert("Todo added successfully! :)", "success");
  } else {
    showAlert("Please enter a todo !", "error");
  }
};

const deleteAllHandler = () => {
  if (todos.length) {
    todos = [];
    saveToLocalStorage();
    displayTodos();
    showAlert(`All Todos have been deleted successfully`, "success");
  } else {
    showAlert(`You dont have any Todos to clear at the momment!`, "error");
  }
};

const deleteHandler = (id) => {
  const newTodos = todos.filter((todo) => todo.id !== +id);
  console.log(newTodos);
  todos = newTodos;
  saveToLocalStorage();
  displayTodos();
  showAlert(`Todo got deleted successfully`, `success`);
};

const toggleHandler = (id) => {
  const todo = todos.find((todo) => todo.id === +id);
  todo.completed = !todo.completed;
  saveToLocalStorage();
  displayTodos();
  showAlert(`Todo status changed successfully! :)`, `success`);
};

const editHandler = (id) => {
  const todo = todos.find((todo) => todo.id === +id);
  taskInput.value = todo.task;
  dateInput.value = todo.date;
  addBtn.style.display = "none";
  editBtn.style.display = "inline-block";
  editBtn.dataset.id = id;
};

const applyEditHandler = (event) => {
  const id = event.target.dataset.id;
  const todo = todos.find((todo) => todo.id === +id);
  todo.task = taskInput.value;
  todo.date = dateInput.value;
  taskInput.value = "";
  dateInput.value = "";
  addBtn.style.display = "inline-block";
  editBtn.style.display = "none";
  saveToLocalStorage();
  displayTodos();
  showAlert(`Todo edited successfully`, `success`);
};

const filterHandler = (event) => {
  let filteredTodos = null;
  const filter = event.target.dataset.filter;
  switch (filter) {
    case "Pending":
      filteredTodos = todos.filter((todo) => todo.completed === false);
      break;

    case "Completed":
      filteredTodos = todos.filter((todo) => todo.completed === true);
      break;
    default:
      filteredTodos = todos;
      break;
  }
  displayTodos(filteredTodos);
};

//Event listeners

window.addEventListener("load", () => displayTodos());

addBtn.addEventListener("click", addHandler);

deleteAllBtn.addEventListener("click", deleteAllHandler);

editBtn.addEventListener("click", applyEditHandler);

filterBtns.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
