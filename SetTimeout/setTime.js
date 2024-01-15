console.log('start');

setTimeout(function () {                    //SetTimeout is a webApi and hence moved to web Api and will be
                                           // executed after the execution of global execition context become 
                                           //empty (after whole main function is executed)
    console.log('ABC');
},3000)

console.log('end');