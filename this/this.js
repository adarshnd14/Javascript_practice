//global level 'this' is equal to 'window object'
//this will always point to the current object
console.log(this);
console.log(window);
console.log(this===window);
console.log('---------------------------------');

const person={
    firstName:'Ajit',
    lastName:'k',
    getFullName: function () {
        //this is person object
        console.log('this inside getFullName -', this);
        return this.firstName+ ' '+this.lastName
    }
}
person.getFullName()
console.log('--------------------------------------');

function greet (){
    //this is equal to window object
    //all the global properties and functions
    //belong to window object
    //(greet will be invoked using window reference)
    console.log('this inside greet ', this);
    console.log('greet func');
}
window.greet()
greet()

console.log('----------------------------------------');
const myObj={
    getData: function(){
        function test(){
            //this is equal to window object
            //because test() is not invoked by
            //any object reference
            console.log('this inside test function', this);
            console.log('test func');
        }
        test()
        return 100
    }
}
myObj.getData()
console.log('-----------------------------------------------------');

const myObj1={
    firstName:'vijay',
    lastName:'k',
    getName: function(){
        const test=()=>{
            //arrow function will not have its own this.
            //here this will refer to its parent execution context
            //gives myObj1
            console.log('this inside test ', this);
            console.log('test1 func');
        }
        test()
        return `${this.firstName} ${this.lastName}`
    }
}
myObj1.getName()
console.log('----------------------------------------------------------');

const myObj2={
    firstName:'vijay',
    lastName:'k',
    getResult:()=>{                                     //arraow function
        //this inside getResult - window
            //refer to its parent execcution contex
            console.log('getResult',this);
    },
    getName: function(){                                //anonymous function
        const test=()=>{                                //arrow's parent- anonymous func - anonymous func's execution context is myObj2 
            //this inside getName -> myObj2 object
            //refer to its parent execcution contex
            console.log('this inside test ', this);
            console.log('test1 func');
        }
        test()
        return `${this.firstName} ${this.lastName}`
    }
}
myObj2.getName()
myObj2.getResult()
console.log('--------------------------------------------------------');


/*
1. this in global - window
2. this in named function which is declared in global level - window
3. this in named function which is invoked using object reference - current object
4. this in arrow function which is invoked using object reference - parent context object
5. A named function declared inside a function which is invoked using object reference - window
6. An arrow function declared inside a function which is invoked using object reference - parent context object
*/
