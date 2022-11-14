const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }                                  
                                  
// 위의 코드를 아래와 같은 toggle을 사용하여 더 간단하게 구현 가능함!
function handleTitleClick() {
    h1.classList.toggle("clicked");     // class 이름을 여기서는 한번만 적어주면 되므로 굳이 변수를 만들어 주지는 않았음. 만약 class name을 반복하여 사용해야 한다면 그때는 변수를 생성해 주는 것이 좋음.
}

h1.addEventListener("click", handleTitleClick);