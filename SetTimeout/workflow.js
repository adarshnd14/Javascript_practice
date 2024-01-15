console.log('Start');

function add(a,b) {
    setTimeout(()=>{
        console.log('111');
    },2000);

    console.log(a+b);
}

add(10,30)

setTimeout(() => {
    console.log('ABC');
}, 2000);

console.log('end');