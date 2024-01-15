console.log('started');

// const myPromise1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve([100,200,300,400])
//     },3000)
// })

// const myPromise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve([900,1200,100])
//     },5000)
// })

// //if all promises are reso;lved only then funtion will be executed and it will 
// //combine the resolved data into an array
// //if any one promise is rejected - catch function will be executed

// Promise.all([myPromise1,myPromise2]).then((data)=>
// {console.log('data',data);}).catch(err=>{console.log('err',err);})


// //Promise.race - to get which promise gets first resolved
// Promise.race([myPromise1,myPromise2]).then((data)=>
// {console.log('data',data);}).catch(err=>{console.log('err',err);})



const myPromise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ('promise 2 resoved')
    },1000)
})

const myPromise3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve  ('promise 3 resolved')
    },2000)
})

Promise.all([myPromise2,myPromise3]).then((data2)=>{
    console.log(data2);
}).catch((err)=>{console.log(err);})

Promise.race([myPromise3,myPromise2]).then((data)=>{console.log(data);}).catch((err)=>{console.log(err);})