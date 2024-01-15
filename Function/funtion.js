//-------------------------- Functions ---------------------------------

//Named Functions
console.log('----------------------------------- Functions -------------------------------------');

function add(num1,num2) {
    var sum=num1+num2
    console.log('The sum is ',sum);               //Declaring function
}

add(10,20)
add(20,19)                                         //Calling function    
add(287,18)

//-------------------------------------------------------------------------------------------------
console.log('----------------------- Check eligiblity for voting ---------------------');

function findEligibleFor(age) {
    if(age>=18){
        return true
    } else {
        return false
    }
}

function printEligibleOrNot(result) {
    if(result === true){
        console.log('Eligible for voting');
    } else{                                                                //funtion calling another function
        console.log('Not Eligible');
    }
}
var result = findEligibleFor(15)
printEligibleOrNot(result)

var result1 = findEligibleFor(89)
printEligibleOrNot(result1)

//---------------------------------------------------------------------------------------------------------

console.log('-------------------------- Anonymous function --------------------------');
var findProduct = function (a,b) {
    return a*b
}
// console.log(findProduct);
var productVal = findProduct(12,3)                          
console.log('Product - ', productVal);

var person = {
    testFunc : function(){
        console.log('Test function executed');
    }
}
person.testFunc()                                       // Calling Funtion which is in an Object


//----------------------------------------------------------------------------------------------------------------
console.log('----------------------------- Self invoked function ----------------------------');

(function(a,b){
    var diff=b-a
    console.log('Difference -',diff);
}) (10,20)


//--------------------------------------------------------------------------------------------------------------
console.log('----------------------------- Arrow Function ----------------------------------');

var greet = () => {
    console.log('greeet function');
    console.log('welcome');
}
greet()
//----------
var squareOfNumber =num=>num*num
var result = squareOfNumber(2)
console.log('Result - ', result);
console.log(squareOfNumber(3));5
//--------- tital = price * gst percent / 100 -------
var calcTotalPrice= (price,gstPer)=>{
    var totalPrice=(price*gstPer/100)+price
    return totalPrice
}
var priceValue = calcTotalPrice(1000,18)
console.log(priceValue);

