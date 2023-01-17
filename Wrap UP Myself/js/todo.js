const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];     // array나 object 자료형은 const로 선언해도 내부의 값을 할당하는 것은 할 수 있다. but const 특성상 자료형 자체를 새로 할당하는 것은 불가하다.

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(todo => todo.id != parseInt(li.id));
    saveToDos();
}

function completeToDo(event){
    const li = event.target.parentElement;    // li의 button이 아닌 span(todoInput.value 즉, newTodo)에만 접근할 수 있게 하기 위해서
    const span = toDoList.querySelector("span")
    span.style = "text-decoration:line-through;"
    li.removeChild(toDoList.querySelector("button:first-of-type"));
} 

function paintToDo(newTodo){     // 화면에 그리기 위한 함수
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const completeButton = document.createElement("button");     // element를 여러 개 만들고 싶으면 변수도 그에 맞는 개수로 만들어야 함.
    completeButton.innerText = "✅";
    completeButton.addEventListener("click", completeToDo);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❎";
    deleteButton.addEventListener("click", deleteToDo);
    li.appendChild(span);     // <li>는 <span>이라는 자식을 가지게 되었다.
    li.append(completeButton);
    li.append(deleteButton);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){     // 이벤트가 일어났을때 행할 동작에 관한 함수
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
