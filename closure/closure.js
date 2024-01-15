//closure
function outer() {
  let count = 0;
  function inner() {
    console.log("inner func");
    count = count + 1;
    console.log("count", count);
  }
  return inner;
}

const innerFunc = outer();
innerFunc();
innerFunc();
innerFunc();

//What is the use of clouser? why we use it?
//1. to preserve value
//2. for data privacy

function increaseCounter() {
  let counter = 0;
  function counterUpdate() {
    counter = counter + 1;
    console.log(counter);
    return counter;
  }
  return counterUpdate;
}

const counterIncrease = increaseCounter();
counterIncrease();
counterIncrease();
counterIncrease();
counterIncrease();

//there is posiblity that the counter will be 0
//if increseCounter() is called again
const c = increaseCounter();
c();

function increaseCounter() {
  let counter = 0;
  function counterUpdate() {
    counter = counter + 1;
    console.log(counter);
    return counter;
  }
  return counterUpdate;
}

//self invoked function will be executed only once hence counter cannot be reinitialized to 0 again
//only counterUpdate function can be able to change the counter variable value
const counterInc = (function () {
  let counter = 0;
  function counterUpdate() {
    counter = counter + 1;
    console.log(counter);
    return counter;
  }
  return counterUpdate;
})();

counterInc();
counterInc();
