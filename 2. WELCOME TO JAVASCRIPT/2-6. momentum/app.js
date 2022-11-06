// const playerName = "nico";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

// player[0] == name
// player[1] == points
// const player = ["nico", "121212", false, "little bit"];

const player = {
    name: "nico",
    points: 121212,
    handsome : false,
    fat: "little bit"
};
console.log(player);
// console.log(player.name);
// console.log(player["name"]);

player.fat = "so much";
console.log(player);

// player = false
// console.log(player);

player.lastName = "potato";
player.points = 15;
console.log(player);

player.points = player.points + 15;
console.log(player.points);