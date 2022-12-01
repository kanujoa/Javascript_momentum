const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";     // 관습적으로 옆의 text처럼 핵심적인 내용이 아닌 것을 변수로 만들 때에는 HIDDEN_CLASSNAME을 사용함.

function onLoginSubmit(event) {
    event.preventDefault();     // 브라우저의 기본 동작을 막아줌(submit시 페이지가 새로고침되지 않음.)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);    