const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  deleteBtn.innerText = "❌";
  span.innerText = text;
  li.appendChild(deleteBtn);
  li.appendChild(span);
  li.id = newId;

  toDoList.appendChild(li);

  const toDoObj = {
    id: newId,
    text: text,
  };

  toDos.push(toDoObj);

  saveToDos();
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
  const loadedToDos = localStorage.getItem(TODO_LS);

  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintTodo(toDo.text);
    });
  }
}

(function() {
  loadToDos();
  toDoForm.addEventListener("submit", handleToDoFormSubmit);
})();
