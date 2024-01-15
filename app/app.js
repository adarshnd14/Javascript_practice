//Object 

var person = {
    firstName:'Allu Arjun',
    lastName:'Arvind',
    age:39,
    gender:'Male',
    isMarried:true,
    getFullName: function () {
        return this.firstName +' '+this.lastName
    }
}
console.log('-----------------------------------------------------------');



//Dot notation to accessing properties of objects
var fName= person.firstName
console.log('First Name -',fName);

console.log('First Name -',person.firstName)

var lName = person.lastName
console.log('Last Name -',lName);

var pAge = person.age
console.log('Age -',pAge);

var pGender = person.gender
console.log('Gender -',pGender);

var pIsMarried = person.isMarried
console.log('Marital Status -',pIsMarried);

var pGetFullName = person.getFullName()                  //use() for function
console.log('Full Name -',pGetFullName);

console.log('-----------------------------------------------------------');


//Bracket notation to accessing properties of objects
var marker ={
    color:'black',
    'pri ce':25,
    height: '10cm'
}
console.log(marker['pri ce']);          //it can take variable name even with spaces
console.log(person['getFullName']());   //for functions


console.log('-------------------------------------------------------------');

var car= new Object()
car.price = 4000000
car.model= 2021
car.brand= 'Toyota'
car.cname= 'Fortuner'
car.color='White'

console.log(car);
console.log(car.price);
console.log(car.model);
console.log(car.brand);
console.log(car.cname);
console.log(car.color);

