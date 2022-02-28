for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");  //it wont work , if we set this line after two lines . because 15 is divisible by both 3 and 5
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i)
}
