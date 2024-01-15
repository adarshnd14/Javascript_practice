const jsObject ={
    firstName:'Ajay',
    lastName:'k',
    age:17,
    isAdult:false,
    hobbies:['cricket','Singing'],
    address:{
        pincode: 560058,
        state:'Karnataka',
        city:'Bengalore'
    }
}

console.log('JavaScript to JSON');
const stringifiedJSON=JSON.stringify(jsObject)

console.log(stringifiedJSON);
console.log( typeof stringifiedJSON);

console.log('-------------------------------------------');

console.log('JSON to JavaScript');
const javaScriptObject=JSON.parse(stringifiedJSON)
console.log(javaScriptObject);


