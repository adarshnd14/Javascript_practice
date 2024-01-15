// constructor function

function Car(cname, year) {
    this.cname = cname,
        this.year = year
    console.log((this));
    this.getCarDetails = function () {
        return `${this.cname} manufactured in  ${this.year}`
    }
}

const car1 = new Car('BMW', 2021)
console.log(car1.getCarDetails());              //reusing the structure of constructor function 

const car2 = new Car('Jaguar', 2019)
console.log(car1.getCarDetails());

const car3 = new Car('BMW', 2020)
console.log(car1.getCarDetails());