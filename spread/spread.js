//Spread operator

const person={
    firstName:'adarsh',
    lastName:'N D'
}
//1. we can take shallow or deep copy
//2. copy property of one object/array to another
//3.combine or merge two or more obj/arr
//4. add new properties and take copy
//5. change any property and take copy
const personcopy={...person}
const address ={
    pincode:577201,
    state:'karnataka',
    city:'Bengaluru',
}

const personDetails={...person, ...address}
console.log(personDetails);
const personC = {...person, age:14}   // add 
console.log(personC);
const personD ={...person, lastName:'J'}   // change
console.log(personD);