const player = {
    name: "Nico",
    age: 98,
};

console.log(player, console);

player.name = "nicolas";
console.log(player);

player.sexy = "soon";
console.log(player);


// function plus() {
//     console.log(2 + 2);
// }

// plus();      --> 아래에 plus 함수를 다시 만들면서 결측치가 되어버림.

// alert("lalalalal");

function plus(potato, salad) {
    console.log(potato + salad);
}
plus(5, 10);
plus(1.33453, 9898);
plus(9898, 1.33453);

function minusFive(potato) {
    console.log(potato - 5);
}
minusFive(5, 10, 12, 34, 4, 5, 6, 7);
