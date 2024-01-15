//String methods
const str='Hello'

//toUpperCase
const result =str.toUpperCase()
//because primitive types are immutable
console.log(str);       //Hello
console.log(result);    //HELLO

//toLowerCase
let greet ='Good Afternoon'
greet = greet.toLocaleLowerCase()
console.log(greet);    //good afternoon

//charAt
console.log(greet.charAt(13));           //n

//indexOf
console.log(greet.indexOf('o',3));       //11

//concat
const res = str.concat(' ,',greet,' all')
console.log(res);                         //Hello ,good afternoon all

//include
const hasNoon= greet.includes('noon')
console.log('has noon ',hasNoon );         //true

//replace
const value = greet.replace('afternoon','night')
console.log(value);                              //good night


//substr
const data ='Hello all, welcome to Javascript seccion'
const extractedStr = data.substr(11,10)          // from 11th index, 10 char
console.log(extractedStr);                      //welcome to

//substring (2nd index not inclusive)
const substrVal = data.substring(1,4)
console.log(substrVal);                        //ell

//trim
const email='           chandan.k@testyantra.com   '
console.log(email);
const emailAftTrim = email.trim()
console.log('email after trim - ',emailAftTrim);
const gmail='           chandan.k@testyantra.com   '
console.log('start - ',gmail.trimStart());
console.log('end - ', gmail.trimEnd());

