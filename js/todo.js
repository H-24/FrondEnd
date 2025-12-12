const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

function ToDoSubmit(e) {
    e.preventDefault();
    const toDo = toDoInput.value;
    console.log(toDo);
    toDoInput.value = ""
}

toDoForm.addEventListener("submit", ToDoSubmit);