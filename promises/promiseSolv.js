console.log('Started');

const myPromise = new Promise((resolve,reject)=>{
    if (10>2) {
        const fetchedData =[100,200,300,400,500]
        resolve (fetchedData)
    } else{
        reject ('Data fetch failed')
    }
})

//Solution to call back hell
myPromise.then((data)=>{
    console.log('first then', data);
    const updatedData= data.map(val=>val+100)
    return updatedData
}).then((result)=>{
    console.log('Second then', result);
    const filteredData = result.filter(val=>val>300)
    return filteredData
}).then((dataWithFilter)=>{
    console.log('Third then',dataWithFilter);
}).catch((err)=>{
    console.log(err);
})

console.log('Ended');