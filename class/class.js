class Car {
    constructor(cname,year){              //parameters passed here
        this.cname=cname
        this.year=year
    }
    getCarDetails(){            //here this is a method not a function so donot use function keyword
        return `${this.cname} is manufatured in ${this.year}`
    }
}

const car1= new Car('BMW',2021)
console.log(car1.getCarDetails());

const car2= new Car('Jaguar',2030)
console.log(car2.getCarDetails());