const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";     // 관습적으로 옆의 text처럼 핵심적인 내용이 아닌 것을 변수로 만들 때에는 HIDDEN_CLASSNAME을 사용함.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();     // 브라우저의 기본 동작을 막아줌(submit시 페이지가 새로고침되지 않음.)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);     // localStorage에 username 저장
    paintGreetings(username);     // 화면에 메시지 출력하는 함수 호출
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}    

const savedUsername = localStorage.getItem(USERNAME_KEY);     // 여기에 localStorage.getItem이 또 적혀 있으므로 결국에는 localStorage를 2번 열어보는 것이 됨.

if (savedUsername === null) {     // 이 if else 문은 local storage에 저장된 정보가 있는지 확인 후 있다면 그곳에서 정보를 불러오는 것이기 때문에
    loginForm.classList.remove(HIDDEN_CLASSNAME);     // else의 실행문에서 인자로 localStorage에서 가져온 username인 savedUsername을 적어주어야 한다.
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
