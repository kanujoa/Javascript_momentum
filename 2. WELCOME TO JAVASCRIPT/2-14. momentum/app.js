const age = parseInt(prompt("How old are you?"));

// console.log(isNaN(age));     

// if(condition) {
//     condition == true
// } else {
//     condition == false
// };

if (isNaN(age)) {
    console.log("Please write a number.");
} else {
    console.log("Thank you for writing your age.");
}