const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

const toDos = [];

function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    li.remove();
}

function CreateTodo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function ToDoSubmit(e) {
    e.preventDefault();
    const toDo = toDoInput.value;
    toDoInput.value = ""
    toDos.push(toDo);
    CreateTodo(toDo);
    saveTodo();
}

toDoForm.addEventListener("submit", ToDoSubmit);