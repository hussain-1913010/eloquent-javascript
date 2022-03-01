
// bindings and scopes
let x= 10;
if(true){
    let y = 20;
    var z = 30;
    console.log(x + y +z);
}
console.log(x+z)
// -----------------
const halve = function(n) {
    return n / 2;
};
let n = 10;
console.log(halve(100))
console.log(n)
// function type one (function expression type)
const power = function(base, exponent){
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}
console.log(power(2, 10))
// function type two (Declaration notation)
function square(x){
    return x * x;
}
console.log(square(5))
// or it can be ------called before defining. . both works
console.log("the future says:", future());
function future(){
    return "you will miss me"
}
// function type three (arrow functions)
const power = (base, exponent) => {
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result
}
console.log(power(2, 10))
// --- when it have only one parameter, or no parameter , then parentheses can be omit
const square1 = (x) => { return x * x }; //or
const square2 = x =>  x * x ; //or
const horn = () => {
    console.log('first')
}


// Nested scope = === = = 
const hummus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if(ingredientAmount > 1){
            unit += "S"
        };
        console.log(`${ingredientAmount} ${unit} ${name}`)
    };
    ingredient(2, "can", "chickpeas");
}
hummus(2)

// Lexical scoping . . . 

// Lexical scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. This means that the child's functions are lexically bound to the execution context of their parents. Lexical scope is sometimes also referred to as static scope. . such as: 
function grandfather() {
    var name = 'Hammad';
    // 'likes' is not accessible here
    function parent() {
        // 'name' is accessible here
        // 'likes' is not accessible here
        function child() {
            // Innermost level of the scope chain
            // 'name' is also accessible here
            var likes = 'Coding';
        }
    }
}
// The thing you will notice about lexical scope is that it works forward, meaning the name can be accessed by its children's execution contexts.
// But it doesn't work backward to its parents, meaning that the variable likes cannot be accessed by its parents.
// This also tells us that variables having the same name in different execution contexts gain precedence from top to bottom of the execution stack.
// A variable, having a name similar to another variable, in the innermost function (topmost context of the execution stack) will have higher precedence.
// 
// 
// ############################################################################################### //
// 
// 
// Another example of lexical scoping . . . 
var scope = "I am global";
function whatismyscope(){
   var scope = "I am just a local";
   function func() {return scope;}
   return func;
}
whatismyscope()()
// The above code will return "I am just a local". It will not return "I am a global". Because the function func() counts where is was originally defined which is under the scope of function whatismyscope.
// It will not bother from whatever it is being called(the global scope/from within another function even), that's why global scope value I am global will not be printed.
// This is called lexical scoping where "functions are executed using the scope chain that was in effect when they were defined" - according to JavaScript Definition Guide.
// Lexical scope is a very very powerful concept.




