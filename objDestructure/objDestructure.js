const person={
    firstName:'Ajit',
    lastName:'k',
    age:10,
    hobbies:['cricket','reading'],
    address:{
        state:'Karnataka',
        pincode:577201,
        city:'Bengaluru'
    }
}

// const firstName = person.firstName         // normal way
// const lastName = person.lastName


// object destructuring
const {firstName,lastName} = person
console.log('First name', firstName);
console.log('Last Name', lastName);

//multi level
const {hobbies, address:{state, city}} = person
console.log('hobbies',hobbies);
console.log('state',state);
console.log('city',city);

//alias name
const {firstName:fname, lastName:lname}= person
console.log(fname);
console.log(lname);

function calculateTotalPrice({gst,price}){
    console.log('gst',gst);
    console.log('price',price);
    return console.log( price + (price * (gst/100)));
}

const product={
    price :100,
    gst: 3,
    productName: 'Bag',
    mfdYear:2021,
    moreDetails:{
        brand:'WildCraft',
        color:'red'
    }
}
calculateTotalPrice(product)