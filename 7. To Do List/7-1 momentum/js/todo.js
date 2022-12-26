const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);     // <li>는 <span>이라는 자식을 가지게 되었다.
    span.innerText = newTodo;     // <span> 안에 적힐 텍스트는 handleToDoSubmit에서 온 newTodo 텍스트가 된다.(toDoInput.value 값이 된다.)
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);