 //------------------ Math Object ------------------------
console.log('Math Object');

//to find Minimum
var minVal= Math.min(10,26,17,36,4)
console.log('Minimum Value -', minVal);

//to find Maximum 
var maxVal= Math.max(256,62,18,39,73)
console.log('Maximum value -', maxVal);

//for Power
var power= Math.pow(2,3)
console.log('Power of 2,3 is ', power);

var power1 = Math.pow(4,13)
console.log('Power of 4,13 is ', power1);

//----------------- Random Number -----------------------------
console.log('------------------------- Ramdom number -----------------------------------');
var rand = Math.ceil(Math.random()*100)
console.log(rand);

var names = ['Ajit','Amit','Adarsh','Raman','Prasanna','Pavan']
var guess = Math.floor(Math.random()*names.length)     //name.length gives 6 = 0-5
console.log(names[guess]);