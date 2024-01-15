// console.log('start')
// (10===10? console.log('equal'): console.log('NotEqual'))                 // showes error saying console.log() is not a function

//semicolon is mandatory before () if you are writing () in next line after execution of any function
//or after ()
console.log('start');
(10===10? console.log('equal'): console.log('NotEqual'))
console.log('end');
console.log('-------------------------------------------------');

function test(){
    function inner(){
        console.log('inner fuction');
    }
    return inner
}

// var holdTest= test()
// holdTest()

test()()  ;              //function currying

(function(){
    console.log('Hello world');
})()