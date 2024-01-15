//Arrays

var names =['Puneeth','Dharshan','Sudeep', 'Ajith','Hrithik']

console.log(names);
console.log(names.length);

//we can use index to get each element
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

console.log('-----------------------------------------------------------------');

// for loop
for(var i=0; i<5;i++){
    console.log('Hello');
}

for (var i=0; i<names.length; i++){
    // debugger
    console.log(names[i]);
}

console.log('--------------------------------------------------------------------');

//array using diff datatypes

var myArray=['Ajay', 34,true,undefined,null,
{color:'black'},                                 //object inside an array
['black','blue','red']]                          //nested array

console.log(myArray[2]);                //true
console.log(myArray[4]);                //null
console.log(typeof(myArray[3]));        //undefined
console.log(myArray.length);            //7
console.log(myArray[5].length);         //undefined
console.log(myArray[5].color);          //black
console.log(myArray[5]['color']);       //black
console.log(myArray[5]['co lor']);      //unefined
console.log(myArray[6].length);         //3
console.log(myArray[6][0]);             //black
console.log(myArray[6][2-1]);           //blue


 console.log('----------------------------------------------------------------');

 var books=[
     {
         author:'Chethan Bhagat',
         title:'Two States',
         price:80,
         noOfPages:265,
         publisher:'jaico'
     },
     {
        author:'Paulo Cohelo',
        title:'Alchemist',
        price:180,
        noOfPages:180,
        publisher:'Harper Torch'
    },
    {
        author:'Amish Tripati',
        title:'Shiva Triology',
        price:500,
        noOfPages:700,
        publisher:'Westland press'
    }
 ]

//======= Console.log(books);

 for(i=0;i<books.length;i++){
     console.log(books[i]);
 }


 console.log('----------------------------------------------------------------------------');


//======== NEW method of declaring object and array
var arr= new Array(10)
console.log(arr.length);
console.log(arr[0]);

console.log('----------------------------------------------------------------------------');

var numbers= new Array(20,30)
console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers[1]);

numbers[2]=90
console.log(numbers[2]);

console.log('----------------------------------------------------------------------------');


