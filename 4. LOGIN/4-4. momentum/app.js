const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";     // 관습적으로 옆의 text처럼 핵심적인 내용이 아닌 것을 변수로 만들 때에는 HIDDEN_CLASSNAME을 사용함.

function onLoginSubmit(event) {
    event.preventDefault();     // 브라우저의 기본 동작을 막아줌(submit시 페이지가 새로고침되지 않음.)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);    // submit 동작이 일어날 때만 onLoginSubmit 함수 실행!!
// ()을 적어주는 것은 함수를 '바로' 실행시키는 것을 의미! but addEventListener를 사용할 때는 바로 실행시키려고 하는 게 아니므로 ()를 적어주지 않는다.
// submit event 가 발생하면 브라우저가 알아서 적혀 있는 function을 실행시켜 줄 것임!
// 즉, addEventListener와 함수 이름만을 적는 것은 특정 event가 발생했을 때만 브라우저가 함수를 호출하고 실행될 수 있게 하기 위해서임.
