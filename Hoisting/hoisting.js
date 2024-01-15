console.log('a - ',a);                   //undefined
var a=10                                //global variable
var b=30                
console.log('b oustside function - ', b);

function test() {
    //variable hoisting inside the function
    //local variables will be given first preference
    //if variable is not declared localy JS engine
    //will search the variable in global scope
    //if variable is declared localy JS engine
    //will not search the variable in global scope
    console.log('b inside function - ',b);
    var b=20                //local variable
    console.log('a inside function - ',a);
}
test()


//------------------------------------------------------

//Function Hoisting

add(10,20)
function add(a,b) {
    console.log(a+b);
}

//--------------------------------------------------\
//greet() calling anonymous function before assigning the function will return error
//i.e, greet is not a function because the greet variable will be hoisted to the top as a variable

//great()
var greet= function () {
    console.log('welcome');
}
greet()


// var greet
// greet()
// greet = function () {
//     console.log('welcome');
// }

console.log('---------------------------------------------------------------------');

//product ()
//calling the arrow function before assigning the function to the variable will result in error
//i.e, greet is not a function because the product variable will be hoisted to the top as a product

var product = (a,b)=>{
    console.log(a*b);
}
product(10,2)