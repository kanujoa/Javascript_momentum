const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hours}:${minutes}:${seconds}`;     
}

// 코드를 줄이는 방법
// function getClock() {
//     clock.innerText = new Date().toLocaleTimeString();
// }

getClock();
setInterval(getClock, 1000);     // 1초마다 초의 숫자가 바뀌므로 초의 숫자가 바뀔 때마다 그것을 console창에 띄우려면(위 함수를 실행시키려면) 
                                 // Interval 함수와 1000ms를 적어주어야 한다.