const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");

const todos = [];

const addHandler = () => {
  const task = taskInput.value;
  const date = dateInput.value;
  const todo = {
    task: task,
    date: date,
    completed: false,
  };
  if (task) {
    todos.push(todo);
    taskInput.value = "";
    dateInput.value = "";
  } else {
    alert(`* Warning * you didnt add anything to your Todo List!
  please add something you want to do.`);
  }
};

addBtn.addEventListener("click", addHandler);

console.log(taskInput);
console.log(dateInput);
console.log(addBtn);
console.log(todos);
