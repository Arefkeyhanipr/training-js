const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const alertMessage = document.getElementById("alert-message");
const todosBody = document.querySelector("tbody");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

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

const displayTodos = () => {
  todosBody.innerHTML = "";
  if (!todos.length) {
    todosBody.innerHTML = `<tr><td colspan="4"> No task found!</td></tr>`;
    return;
  }

  todos.forEach((todo) => {
    todosBody.innerHTML += `<tr>
    <td>${todo.task}</td>
    <td>${todo.date || "No Date Set"}</td>
    <td>${todo.completed ? "Completed" : "Pending"}</td>
    <td>
        <button>Edit</button>
        <button>Done</button>
        <button>Delete</button>
    </td>

    </tr>`;
  });
};
displayTodos();
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

//Event listeners

addBtn.addEventListener("click", addHandler);
