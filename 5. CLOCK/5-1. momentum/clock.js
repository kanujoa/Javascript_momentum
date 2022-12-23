const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;     // '' 가 아닌 ``(백틱)을 사용해야 한다! (string을 console.log 하기 위해)
}

getClock();
setInterval(getClock, 1000);     // 1초마다 초의 숫자가 바뀌므로 초의 숫자가 바뀔 때마다 그것을 console창에 띄우려면(위 함수를 실행시키려면) 
                                 // Interval 함수와 1000ms를 적어주어야 한다.