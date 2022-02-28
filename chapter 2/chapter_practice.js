// while loop =====================
let result = 1;
let counter = 0;
while (counter < 10) {
    // console.log(result)
    // console.log(counter)
    result = result * 2;
    counter = counter + 1;
}
// console.log(result)
// console.log(counter)
// while loop =====================

// do while loop ==========================
let yourName;
do {
    yourName = prompt("who are you");
} while (!yourName);
console.log(yourName);
// do while loop ==========================

// ======= for loops ===================
for(let number = 0; number < 10; number = number + 2){
    console.log(number)
}
// ======= for loops ===================


// ======= switch =================
switch (prompt("what is weather like: ")) {
    case "rainy":
        console.log("take an umbrella")
        break;
    case "sunny":
        console.log("wear light dress")
        break;
    default:
        break;
}
// ======= switch =================

let hash = "#";
while (hash.length <= 7) {
    console.log(hash)
    hash = hash + "#"
}

let number = 1;
while (number <= 100 ){
    console.log(number)
    number = number + 1;

    if (number % 3 == 0) {
        console.log("Fizz")
        break
    }
}

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i)
}



var size = 8;       //this is the variable setting
var board = "";     //this is the empty string we're going to add either ' ' , '#' or newline
for (var y = 0; y < size; y++) {          /*in the outer loop we add newline to seperate rows*/
  for (var x = 0; x < size; x++) {        /*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);


// ============== using Turnery operator ============= //

let size = 8;
let board = "";
for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
        ((i + j) % 2 == 0) ? board += " " : board += "#";
        board += "\n";
    }
}
console.log(board)