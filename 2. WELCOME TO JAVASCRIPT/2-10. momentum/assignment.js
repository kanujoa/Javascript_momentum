// calculator라는 이름의 객체(object)를 만들고 더하기, 빼기, 나누기, 제곱을 구현시켜 보자. 여러 개의 함수를 하나의 객체로 묶이게 만들기! console.log까지 하기!

const calculator = {
    plus: function(a, b){
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    divide: function(a, b){
        console.log(a / b);
    },
    square: function(a, b){
        console.log(a ** b);
    }
}

calculator.plus(4, 2);
calculator.minus(4, 2);
calculator.divide(4, 2);
calculator.square(4, 2);