const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";

function paintTodo(text) {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";

  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(deleteBtn);
  li.appendChild(span);

  toDoList.appendChild(li);
}

function handleToDoFormSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;

  if (currentValue) {
    paintTodo(currentValue);
    toDoInput.value = "";
  }
}

function loadToDos() {
  const toDos = localStorage.getItem(TODO_LS);

  if (toDos !== null) {
  }
}

(function() {
  loadToDos();
  toDoForm.addEventListener("submit", handleToDoFormSubmit);
})();
