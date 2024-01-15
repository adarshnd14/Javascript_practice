console.log('Started');

// new Promise(function(resolve,reject){
//     if (10>2) {                              // as promises are Web API it will be asynchronus
//         resolve('success')                   // so normal js code will be executed first then promis will be executed
//     } else {                                 //so we get - started and ended first then output of promise
//         reject('Error')
//     }                                        // will execute only once
// }).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

// let age=10
// const validAgePromise= new Promise((resolve,reject)=>{
//     console.log(age);                                      // if we store promise in a variable
//     if (age>=18) {                                         //we can use it whenever and howmuch ever time  
//         resolve ('Eligible for voting')
//     } else{
//         reject ('Not elegible for voting')
//     }
// })

// validAgePromise.then((success)=>{
//     console.log(success);
// }).catch((error)=>{
//     console.log(error);
// })


console.log('Ended');

const num=10
const myPromise= new Promise((resloved,rejected)=>{
    if (num>2) {
        resloved ('it is resolved')
    }else{
        rejected ('not resolved')
    }
}).then((right)=>{
    console.log(right);
}).catch((err)=>{
    console.log(err);
})
