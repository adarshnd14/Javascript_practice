const person = {
    firstName:'Ajay',
    lastName:'G',
    getFullName: function (middleName) {
        console.log(this);
        return `${this.firstName} ${middleName} ${this.lastName}`
    }
}

// console.log(person.firstName);
// console.log(person.lastName);
const john={
    firstName:'John',
    lastName:'P'
}
console.log(person.getFullName.apply(john, ["a", "b"]));

