function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");

  if (todoInput.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
        <span>${todoInput.value}</span>
        <button onclick="editTodo(this)">Edit</button>
        <button onclick="completeTodo(this)">Complete</button>
        <button onclick="removeTodo(this)">Remove</button>
    `;

  todoList.appendChild(li);
  todoInput.value = "";
}

function editTodo(button) {
  const li = button.parentElement;
  const taskText = li.querySelector("span").textContent;
  const newTaskText = prompt("Edit task:", taskText);
  if (newTaskText) {
    li.querySelector("span").textContent = newTaskText;
  }
}

function completeTodo(button) {
  const li = button.parentElement;
  li.classList.toggle("completed");
  const message = document.getElementById("message");
  if (li.classList.contains("completed")) {
    message.textContent = "Task Successfully Completed!";
    message.classList.add("show");
  } else {
    message.textContent = "";
    message.classList.remove("show");
  }
  setTimeout(() => {
    message.textContent = "";
    message.classList.remove("show");
  }, 2000);
}

function removeTodo(button) {
  const li = button.parentElement;
  li.remove();
}
