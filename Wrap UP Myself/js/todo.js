const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
// const completed_Key = "toDoCompleted";

let toDos = [];     // array나 object 자료형은 const로 선언해도 내부의 값을 할당하는 것은 할 수 있다. but const 특성상 자료형 자체를 새로 할당하는 것은 불가하다.
// let completion = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// function saveCompletion() {
//     localStorage.setItem(completed_Key, JSON.stringify(completion));
// }

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(todo => todo.id != parseInt(li.id));
    saveToDos();
}

// function completeToDo(event){
//     const li = event.target.parentElement;
//     const checkButton = event.target;
//     span = checkButton.previousSibling;
//     span.style = "text-decoration:line-through";
//     checkButton.remove();
//     completion.push(li.id);
//     saveCompletion();
    
    // const li = event.target.parentElement;
    // const span = toDoList.querySelector("span");
    // span.style = "text-decoration:line-through;"
    // li.removeChild(toDoList.querySelector("button:first-of-type"));
    // 위 4줄처럼 하면 li가 하나일 경우에만 정상적으로 작동함. 여러개일 경우에 아래 것 먼저 check하려고 하면 
    // Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node. 오류가 남. 부모, 자식, 형제 노드 간의 관계를 잘 파악하고 있어야 함.
    // https://hianna.tistory.com/712
// }

function paintToDo(newTodo){     // 화면에 그리기 위한 함수
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    // const completeButton = document.createElement("button");     // element를 여러 개 만들고 싶으면 변수도 그에 맞는 개수로 만들어야 함.
    // completeButton.innerText = "✅";
    // completeButton.addEventListener("click", completeToDo);
    const button = document.createElement("button");
    button.innerText = "🗑️";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);     // <li>는 <span>이라는 자식을 가지게 되었다.
    // li.append(completeButton);
    li.append(button);
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

// const completedToDos = localStorage.getItem("toDoCompleted");

// if (completedToDos !== null) {
//     const parsedCompletion = JSON.parse(completedToDos);
//     completion = parsedCompletion;
//     parsedCompletion.forEach(paintToDo);
// } 