//-----------------------Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//---------------------Event Listener
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//----------------------------Functions

function addTodo(e) {
  e.preventDefault();

  //Create Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Add Todo Local
  savaLocalTodos(todoInput.value);

  //Check Mark Button
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = `<i class="fas fa-check"></i>`;
  completedBtn.classList.add("complete-btn");
  todoDiv.appendChild(completedBtn);

  //Trash Mark Button
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  trashBtn.classList.add("trash-btn");
  todoDiv.appendChild(trashBtn);

  //append the div to the todoList
  todoList.appendChild(todoDiv);

  //clear the input after adding the todo
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  itemParent = item.parentElement;

  //Delete todo
  if (item.classList[0] === "trash-btn") {
    //Animation
    itemParent.classList.add("fall");
    itemParent.addEventListener("transitionend", function () {
      //Remove todo
      itemParent.remove();
    });
  }
  //Check Mark
  if (item.classList[0] === "complete-btn") {
    itemParent.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
