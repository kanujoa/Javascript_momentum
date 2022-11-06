// prompt는 사용자에게 창을 띄울 수 있게 해 주고 2개의 argument를 받는다. 
//즉, 사용자에게 message를 보여주고 값을 input하라는 명령을 한다.
//page는 로딩중으로 보이고(javascript를 일시정지시키고 있음) 창이 뜨면서 How old are you? 라고 물어본다. console창에는 아무것도 뜨지 않는다.
// const age = prompt("How old are you?");
// console.log(typeof age);     // console.log는 아직 작동하지 않았다.

// console.log(typeof "15", typeof parseInt("15"));
// console.log(typeof age, parseInt(age));

const age = parseInt(prompt("How old are you?"));
console.log(age);