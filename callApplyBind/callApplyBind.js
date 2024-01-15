const person={
    firstName:'Ajay',
    lastName:'G',
    getFullName: function (middleName) {
        console.log(this);
        return `${this.firstName} ${middleName} ${this.lastName}`
    }
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.getFullName('Kumar'));

const john={
    firstName:'John',
    lastName:'P'
}

console.log(john.firstName);
console.log(john.lastName);
console.log('------------------------------------------');

//call method

//this will point to the object passed as first parameter to the call method
//keys should always be same
//ex- below this will point to john object instead of person object
const johnFullName =person.getFullName.call(john,'Abraham')
const johnFullName2 =person.getFullName.call(john)

console.log('Full Name -', johnFullName);


console.log('------------------------------------------');


//apply
const johnFullname1= person.getFullName.call(john,'Abraham')
console.log('full Name ', johnFullname1);
const fullName=person.getFullName.apply(john,['Abraham'])
console.log(fullName);

console.log('------------------------------------------');


//bind
const teacher={
    firstName:'Ajit',
    lastName:'k',
    getFullName: function (age, subjects) {
        console.log(this);
        console.log('age',age);
        console.log('subjects',subjects);
        return `${this.firstName} ${this.lastName}`
    }
}
const guru ={
    firstName:'Guru',
    lastName:'L'
}
//creat a copy of getFullName and it returns that function and this will be pointing to the 
//object passed as first parameter
const getFullNameFunc = teacher.getFullName.bind(guru,10)
getFullNameFunc(['English'])
getFullNameFunc(['English','Kannada'])
getFullNameFunc(['English','Science'])





console.log('------------------------------------------');