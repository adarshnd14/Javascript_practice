console.log('------------------ Loops --------------------');

//----------- for of - loop for array ------------------------
var num = [10,20,30,40]

for (var number of num){
    console.log(number);
}

var fruits = ['Apple','PineApple','Mango','GreenApple']

for(var fruit of fruits){
    console.log(fruit);
}

//------------- for in - loop for objects -----------------------
var person={
    firstName:'Ajit',
    lastName:'Kumar',
    age:25,
    gender:'Male'
}

for(var pay in person){
    // debugger
    console.log(`${pay}-${person[pay]}`);
    // console.log(pay);
}

//--------------- for in - loop for array ------------------------

for(var index in num){
    console.log(`Value at index ${index} - ${num[index]}`);
}


//------------------ break -------------------------------------
function test(){
    if (3<3) {
        console.log(i);
    } else{
        console.log('break');
        // break

        // Illegal break statement - because it can be used only inside a loop or swicth CSSNamespaceRule
        // It cannot be used in function or if else without loop
    }

}

//----------------------- loops -------------------------------------------

console.log('-------------------------------------------------------------');

var arr=[10,20,30,40,50,,,,100]
console.log(arr);
for(var i=0; i<arr.length; i++){
    console.log(`${i}-${arr[i]}`);
}
console.log('--------------------------------------------------------------');
var arrData =[10,20,30]
arrData[3]=80
arrData['price']=700
console.log(arrData);
//for 
for(var i=0;i<arrData.length;i++){
    console.log(`${i}-${arrData[i]}`);
}

console.log('--------------------------------------------------------------');
//considers the elments which doesnot have index
//for in
for (var i in arrData){
    console.log(`${i}-${arrData[i]}`);
}



//------------------- class work --------------------------------------------------------

console.log('------------=-=--------- class work ----------------------------------------');

var pen=[
    {
        brand:'Parker',
        color:'black',
        price:125,
        type:'ball point pen'
    },{
        brand:'Reynolds',
        color:'blue',
        price:10,
        type:'ball point pen'
    },{
        brand:'Elkos',
        color:'red',
        price:5,
        type:'gel pen'
    },
]

// for loop if price > 5 
for(i=0;i<pen.length;i++){
    if (pen[i].price>5) {
        // debugger
        console.log(pen[i]);
    }
    
}

console.log('--------------------------------------------------');

//for of loop -. if type ===' ball point pen' && price > 5
for(var pe of pen){
    if(pe.type==='ball point pen' && pe.price>5){             //value will be assigned not index 
    console.log(pe);
    }
}

console.log('------------------------------------------------');


//for in loop -> if brand length > 5 && price >10
for (var index in pen){
    if(pen[index].brand.length>5 && pen[index].price>10){
        console.log(pen[index]);
    }
} 