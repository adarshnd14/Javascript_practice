function add(n1,n2) {
    return n1 + n2
}
function addt(n1,n2,n3) {
    return n1 + n2 +n3
}
console.log(add(10,20));
console.log(addt(10,20,30));

//using rest operator
//1. rest operator should always be the last parameter
//2. or rest operator should be the one and only parameter
//3. (a,b,...rest)  //valid
//4. (...rest)      //valid
//5. (...rest,a,b)  //invalid (a and b variables will never get any values)
//6. (a,...rest,b)  //invaild
 
function addAll(...nums) {
    console.log(nums);
    let total=0
    for (let i = 0; i < nums.length; i++) {
        total +=nums[i]        
    }
    console.log('total', total);
}

addAll(10,20)
addAll(10,20,30,40)
addAll(10,20,30,40,50,60)

//invalid
//function addAllvalues(...rest,a){
//     console.log('a');
// }

function addAllValues(a,b,...rest) {
    console.log(a,b,...rest);
    console.log(...rest);
}
addAllValues(10,20,30,40,50,60)