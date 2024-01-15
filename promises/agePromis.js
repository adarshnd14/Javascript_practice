console.log('Started');

let age =0
function agePromise(){                                            //new keyword make it executable again and again
    return new Promise((resolve,reject)=>{                        //by having promise inside a function we can call 
        console.log(age);                                         //it using variable or func name any time any where
        if (age>=18) {                                            
            resolve('Eligible')
        } else{
            reject('Not eligible')
        }
    })
}

// agePromise().then((success)=>{
//     console.log(success);
// }).catch((err)=>{
//     console.log(err);
// })

function validateAge(){
    age= document.getElementById('age').value
    agePromise().then((success)=>{
        console.log(success);
    }).catch((err)=>{
        console.log(err);
    })
}

console.log('Ended');