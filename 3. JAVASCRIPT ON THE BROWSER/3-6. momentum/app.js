const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const currentColor = h1.style.color;     // currentColor 변수는 getter! 값(현재 색상)을 받아오는 역할, 값을 복사해서 가져오기만 한다고 생각!
    let newColor;     // newColor 변수는 setter! 값(바뀔 색삭)을 설정해 주어야 함! 단, 색상이 상황에 따라 바뀔 수 있으므로 let으로 설정, 값이 빈 변수로 만듦!
    if (currentColor === "blue") {     // javascript에서는 '==='가 같다는 연산자임을 기억!!
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;     // currentColor = newColor;로 적으면 안되는 이유는 currentColor는 
}                                  // 값이 바뀔 수 없는(다시 선언 불가한) h1.style.color를 받아오는(보여주는 X) 변수임.
                                  

h1.addEventListener("click", handleTitleClick);
