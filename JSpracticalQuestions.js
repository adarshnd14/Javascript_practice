// //1. sort words according to its length
// console.log('------------- sort words according to its length ------------------');
// let name = 'my name is adarsh'
// let a = name.split(' ')                    //string to array
// let b = a.sort((a, b) => {
//     return a.length - b.length
// })
// let c = b.join(' ')
// console.log(c);


// //2. at @gmail.com should change to @testyantra.com
// console.log('----- at @gmail.com should change to @testyantra.com -----');
// const arr2 = [{
//     email: 'adarsh@gmail.com',                         //*3
//     id: '',
//     name: ''
// }, {
//     email: 'navi@gmail.com',                           //*3
//     id: '',
//     name: ''
// }, {
//     email: 'Harsh@gmail.com',                          //*3
//     id: '',
//     name: ''
// }]

// for (let i = 0; i < arr2.length; i++) {
//     const arrObj = arr2[i].email
//     const arr2Find = arrObj.indexOf('@')
//     const arr2Split = arrObj.split('')
//     arr2Split.splice(arr2Find + 1, 10, 'testyantra.com')
//     const arr2Join = arr2Split.join('')
//     console.log(arr2Join);
// }

// const arr3 = arr2.map((val,ind)=>{
//     const a = val.email.split('@')[1].replace('gmail.com', '@testyantra.com')
//     // console.log(a);
//     const b =val.email.split('@')[0]+a
//     // console.log(b);
//     return {...arr2[ind], email:b}
// })
// console.log(arr3);





// //3. construct an array of 1-100
// console.log('------------ construct an array of 1-100 ----------------------');
// const arr1 = []
// for (let i = 1; i <= 100; i++) {
//     arr1.push(i)
// }
// console.log(arr1);



// //4. add all nums in {}s which is in an arr
// console.log('------------- add all nums in {}s which is in an arr ------------');
// const arr4 = [{ num: 4 }, { num: 2 }, { num: 2 }]
// const arrSum = []
// for (let i = 0; i < arr4.length; i++) {
//     arrSum.push(arr4[i].num)                   //loop arr[i].val to get the val in [{val:''}] and
// }                                              //push it to new arr
// const arrRed = arrSum.reduce((a, b) => {       // using reduce method
//     return a + b
// })
// console.log(arrRed);


// //5. seperate even and odd and print in diff arr
// console.log('----- seperate even and odd and print in diff arr ------');
// const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const arr1 = []
// function sortPrime(arr) {
//     const a = arr.filter(val => val % 2 === 0)
//     const b = arr.filter(val => val % 2 !== 0)
//     console.log('Even',a);
//     console.log('Odd',b);
// }
// sortPrime(arr5)

//or

// const arr5Eve1 = []
// const arr5Odd1 = []
// const arr5Map = arr5.map((val) => {                  //using map method
//     if (val % 2 === 0) {
//         arr5Eve1.push(val)
//         return arr5Eve1;
//     } else {
//         arr5Odd1.push(val)
//         return arr5Odd1;
//     }
// })
// console.log('eve', arr5Eve1);
// console.log('odd', arr5Odd1);

//or

// const arr5Eve = arr5.filter(val => val % 2 === 0)         //using filter method
// console.log('eve', arr5Eve);
// const arr5Odd = arr5.filter(val => val % 2 !== 0)
// console.log('odd', arr5Odd);




// //6. how many times an element is repeted
// console.log('------ how many times an element is repeted ------');
// const arr6 = [{ num: 1 }, { num: 1 }, { num: 1 }, { num: 3 }]
// let a6 = 0
// for (let i = 0; i < arr6.length; i++) {
//     // console.log(arr6[i].num);
//     for (let j = i + 1; j < arr6.length; j++) {
//         // console.log('j->',arr6[j].num);
//         if (arr6[i].num === arr6[j].num) {
//             a6++
//         }
//     }
// }
// console.log('element is repeated', a6, 'times');


// //7. sum and product of arr elements
// const arr7 = [1, 2, 3, 4]
// //sum
// let sum = 0
// for (let i = 0; i < arr7.length; i++) {
//     sum += arr7[i]
// }
// console.log(sum);
// //product
// let prod = 1
// for (let i = 0; i < arr7.length; i++) {
//     prod *= arr7[i]
// }
// console.log(prod);


// //8. reverse each word in the string -> 'good morning' => 'gninrom doog'
// console.log('------ -----  reverse each word in the string  ----- ------- ');
// const str8 = 'good morning'

// //each word reversed
// const str8split = str8.split('')
// const str8Rev = str8split.reverse()
// const str8Join = str8Rev.join('')
// console.log(str8Join);                             //'gninrom doog'

// //sentence reversal
// const str8split1 = str8.split(' ')
// const str8Rev1 = str8split1.reverse()
// console.log(str8Rev1.join(' '));                    //'morning good'


// //9.Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// console.log("--------------  remove. 'null', '0', '', 'false', 'undefined' and 'NaN' values from an array ----------------");
// const arr9 = [NaN, 0, 15, , , , false, -22, '', [], {}, undefined, 47, null, 'abc',]
// const arr9new = []
// arr9.forEach(val => {
//     if (val) {
//         arr9new.push(val)                       //forEach method -> ignores the falsy value
//     }                                           // falsy values = false, 0, '', undefined, null, NaN
// });
// console.log(arr9new);

// 

// //10. find method
// console.log('-------- find method ---------- ');
// const arr10 = [1, 2, 3, 4, 5, 6, 7]
// const arr10Find = arr10.find((val, ind, arr) => {     //find() returns 1st element that satisfy the condition
//     return val > 4
// })
// console.log(arr10Find);



// //11. Merge 2 arrays and remove duplicates
// console.log('-------- Merge 2 arrays and remove duplicates ---------');
// const arr11a = [1, 2, 3, 4, 5, 6]
// const arr11b = [4, 5, 6, 7, 8, 9]
// const arr11new = [...arr11a, ...arr11b]         //spread operator - merge
// // const arrCat = arr11a.concat(arr11b)
// console.log(arr11new);
// const arr11Set = [...new Set(arr11new)]        //to remove duplicate from the arr use Set method
// console.log(arr11Set);


// //12. each word 1St letter upper case
// const str12 = 'my name is adarsh'              //My Name Is Adarsh
// const str12Split = str12.split(' ')
// for (let i = 0; i < str12Split.length; i++) {
//     str12Split[i] = str12Split[i].charAt(0).toUpperCase() + str12Split[i].slice(1)
// }
// const str12Join =str12Split.join(' ')
// console.log(str12Join);

// // //or

// let data="my name is mohan shv assic";
// let a=data.trim().split(" ");
// let y=" ";
// for(i=0;i<a.length;i++)
// {
//     let x=a[i].split("")
//      x[0]= x[0].toUpperCase();
//    z=x.join("")
//    y=y+" "+z
// }
// console.log(y);

// // or
// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }


// //13. Take out the largest number
// const arr13 = [232, 453, 123, 562, 761]
// const great = arr13.sort((a, b) => a - b)
// console.log(great);
// console.log(great.pop());



//14. take unique elements of 2nd array out
// const arr = [1,4,2,8,3]
// const arr1 = [4,8,3,5,6,7]
// const result =  arr1.filter(item=>!arr.includes(item))
// console.log(result);

//15. Find prime numbers in an array
// const arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const isPrime = (num) => {
//     let k = 0
//     for (let i = 0; i <= num; i++) {
//         if (num % i === 0) {
//             k++
//         }
//     }
//     if (k === 2) {
//         return true
//     } else {
//         return false
//     }
// }

// const primeArr = (arr) => {
//     const filterPrime = arr.filter(val => isPrime(val))   //if we use {} we have to return manualy
//     return filterPrime
// }

// console.log(primeArr(arr15));


//16. brand and car model sort
// const arr16 = [{ brand: 'Toyato', model: 'Etios' },     //[{brand: Toyato,models=[Etios,Innova]}, ...]
// { brand: 'Toyato', model: 'Innova' },
// { brand: 'Tata', model: 'Safari' },
// { brand: 'Tata', model: 'Nexon' },
// { brand: 'Maruti', model: 'Breeza' },
// { brand: 'Maruti', model: 'Alto-800' }]
// const arr16Sort =[...new Set(arr16.map((val)=>{
//     const arr = val.brand
//     return arr
// }))]
// console.log('Set',arr16Sort);


// const arrCar16 = arr16.filter((car) => {
//     const arrCarFilter = car.brand.includes('Toyato')
//     return arrCarFilter
// })
// const arrCar116 = arr16.filter((car) => {
//     const arrCarFilter = car.brand.includes('Tata')
//     return arrCarFilter
// })
// const arrCar216 = arr16.filter((car) => {
//     const arrCarFilter = car.brand.includes('Maruti')
//     return arrCarFilter
// })

// let arrCars16 ={}
// let arrCars116 = {}
// let arrCars216 = {}

// for (let i = 0; i < arrCar16.length; i++) {
//     arrCars16 = {
//         brand: arrCar16[0].brand,
//         model: [arrCar16[i].model, arrCar16[i+1].model]
//     }
//     arrCars116 = {
//         brand: arrCar116[0].brand,
//         model: [arrCar116[i].model, arrCar116[i+1].model]
//     }
//     arrCars216 = {
//         brand: arrCar216[0].brand,
//         model: [arrCar216[i].model, arrCar216[i+1].model]
//     }
//     // console.log(arrCars16, arrCars116, arrCars216);
//     if (10>2) {
//         const arr =[]
//         arr.push(arrCars16,arrCars116, arrCars216 )
//         console.log(arr);
//     }
// }


//17. Convert array elemts to array of object with key value pairs
// const arr17 = [10, 20, 30, 40, 50, 60]        //o/p =>  [{1:10,20},{2:30,40},{3:50,60}]



// //18. let V/S var
// const arr18 = [10,20,30,40,50]
// for (var i = 0; i < 5 ; i++) {
//     // debugger
//    setTimeout(()=>{
//        console.log('var',i);             //5 will print 5 times
//    },2000)
// }

// for (let i = 0; i < 5 ; i++) {
//     // debugger
//    setTimeout(()=>{
//        console.log('let',i);              //0 1 2 3 4
//    },2000)
// }


//18.Check whether the given string is palindrome.
// const str18 = 'adada'
// const str18split = str18.split('').reverse().join('')
// if (str18 === str18split) {
//     console.log('Given string is palindrom');
// }else{
//     console.log('Given string is not a palindrom');
// }

// 19. Convert string to number with and without using ParseInt
// const str19 = '123'
// const str19con = Number(str19)
// console.log(typeof(str19con));
// const str19pars = parseInt(str19)
// console.log(typeof(str19pars));

//20. Print first non repeated character in a string
// const str20 = 'naveen'
// function firstNotRepeatingCharacter(s) {
//     for (let i = 0; i < s.length; i++) {
//         // debugger
//         if(s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
//             return s.charAt(i)
//         }
//     }
//     return '_'
// }
// console.log(firstNotRepeatingCharacter(str20))


//21. Check if the string contains only digits
// const str21 = '123a'
// const str20num = Number(str21)
// console.log(str20num);
// if (isNaN(str20num)) {
//     console.log('the string not contains only digits');
// }else{
//     console.log('the string contains only digits');
// }

//22. Remove duplicate letters from string.
// const str22 = 'aaabbbccc'
// const str22arr = str22.split('')
// const str22rep = [...new Set(str22arr)]
// const str22join = str22rep.join('')
// console.log(str22join);

//23. Find maximum occurrence character in the given string.
// var getMax = function (str) {
//     var max = 0,
//         maxChar = '';
//     str.split('').forEach(function (char) {
//         // console.log(str.split(char));
//         if (str.split(char).length > max) {
//             max = str.split(char).length;
//             maxChar = char;
//         }
//     });
//     return maxChar;
// };
// console.log(getMax('aabbbccd'))


//24. O/p  [{mail:'mail1},{mail:'mail2'},{mail:'mail3'}]
// let a = ['mail1', 'mail2', 'mail3']
// const b = a.map(val=> {
//     return {
//         mail: val
//     }
// })
// console.log(b)


//25. if both array have same length and same elements retuen true else false
// arr25a = [1, 1, 1, 1]
// arr25b = [1, 1, 1, 1]

// function arrComp(a, b) {
//     let c = 0
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === b[i]) {
//             c++
//         }
//     }
//     if (c === a.length) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(arrComp(arr25a, arr25b));

//or

// function arrComp2(a,b){
//     console.log(a);
//     console.log(JSON.stringify(a));
//     if (JSON.stringify(a)===JSON.stringify(b)) {
//         return true
//     }else{
//         return false
//     }
// }
// console.log(arrComp2(arr25a, arr25b));


//26. Take out most repeated number
// const arr26 = [1, 1, 1, 2, 2, 2, 3, 3]
// function mode(arr) {
//     const a = arr.sort((a, b) =>{
//        return arr.filter(val => val === a).length
//         - arr.filter(val => val === b).length}
//     )
//     console.log(a);
//     return a.pop()
// }
// console.log(mode(arr26));


//27. Set method for taking unique elements
// const game = new Set ('Free fire')
// console.log(game);


//28. Find missing number
// const arr28 = [1,2,3,5,7,9]
// const missing = []

// for (var i = 1; i <= 9; i++) {
//   if (arr28.indexOf(i) == -1) {
//     missing.push(i);
//   }
// }
// console.log(missing);   //[4,6,8]

//29. flating an array without using flat method
// let array = [[1, 2], [3, 4], [8, 9, [13, 14, 15]], 10, 11, 12]
// let array1=array.reduce((val,i)=>val.concat(i))
// let array2=[...array1]

// let arra=array2.reduce((vals,i)=>vals.concat(i),[])

// console.log(array1);
// console.log(array2);
// console.log(arra);


// const a ={
//     arr:{a:[1,3,4,6]}
// }
// // for (let i = 0; i < a.arr.a.length; i++) {
// // console.log(a.arr.a[i]);
// // }

// for (const i in a) {
//    console.log(a[i].a.forEach(val=>console.log(val)))
// }


//30. seperate 'l' 
// const arr30 = ['hello']
// const a30 = arr30[0].split('')
// const ab30 = []
// const abc30 = []
// // console.log(a30.splice(2,2));
// for (let i = 0; i < a30.length; i++) {
//     if (a30[i] === 'l') {
//         ab30.push(a30[i])
//     } else {
//         abc30.push(a30[i])
//     }
// }
// console.log(ab30, abc30);


// 31. program to count the number of vowels in a string
// const vowels = ["a", "e", "i", "o", "u"]
// function countVowel(str) {
//     let countOvl = 0;
//     let countCon = 0;
//     for (let letter of str.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             countOvl++;
//         }else{
//             countCon++
//         }
//     }
//    console.log(countOvl);
//    console.log(countCon);
// }
// const string = 'Megha'
// const result = countVowel(string);


//32. last occurrence of a charecter
// function lastOccurrence(str, char) {
//     var i = str.length;
//     let a = 0
//     if (str.includes(char)) {
//         const b = str.split('')
//         const c = b.lastIndexOf(char)
//         console.log(`Index number ${c} is the last occurrence of ${char} `);
//     } else {
//         console.log('no occurrence');
//     }
// }
// lastOccurrence('Megha kalaznal', 'a')


// 33. fibonacci or not
// const fibonacci = (query, count = 1, last = 0) => {
//     if(count < query){
//        return fibonacci(query, count+last, count);
//     };
//     if(count === query){
//        return true;
//     }
//     return false;
//  };
//  console.log(fibonacci(9));


//34. program to print prime numbers 
// const higherNumber = 100
// console.log(`The prime numbers till ${higherNumber} are:`);
// // looping from lowerNumber to higherNumber
// for (let i = 0; i <= higherNumber; i++) {
//     let prime = 0;
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             prime = 1;
//             break;
//         }
//     }
//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && prime == 0) {
//         console.log(i);
//     }
// }


// 35. input 'asd 123 sda', output 123
// const numFilter = (str) => {
//     console.log(str.match(/[1-9]/g).join(''));
// }
// numFilter('abc 124 wew 672361 savdsgh')


//36. get 3 sets of arr qith each containing one v 

// const arr36 = ['a', 'b', 'c', '!', '@', '#', 1, 2, 3]
// const set1 = []
// const set2 = []
// const set3 = []
// for (let i = 0; i < arr36.length; i++) {
//     if (i + 3 < arr36.length - 1) {
//         if (i === 0) {
//             set1.splice(0, 0, arr36[i], arr36[i + 3], arr36[i + 6])
//         }
//         else if (i === 1) {
//             set2.splice(0, 0, arr36[i], arr36[i + 3], arr36[i + 6])
//         }
//         else if (i === 2) {
//             set3.splice(0, 0, arr36[i], arr36[i + 3], arr36[i + 6])
//         }
//     }
// }
// console.log(set1, set2, set3);


//37. Flatening the arr

// const arr37 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
// const res37 = []
// const flat37 = (arr) => {
//     // if (typeof(arr)==='object') {
//         // console.log(typeof(arr)==='object');

//         // for (let i = 0; i < arr.length; i++) {
//             // console.log(arr[i],Array.isArray(arr[i]));

//         arr.forEach(i => {
//             if (Array.isArray(arr[i])) {
//                 // console.log(arr[i]);
//                 // const newArr = flat37(arr[i])
//                 // console.log(arr[i]);
//                 res37.push(...flat37(i))
//             }else{
//                 // console.log(arr[i]);
//                 res37.push(i)
//             }
//         });   
//         //  }

// }
// flat37(arr37)
// console.log(res37); wrong


//38. find even number till the parameter and consider some of more than 1 digit number for it

const findEven = (a) => {
    for (let i = 0; i <= a; i++) {
        if (i % 2 === 0 && i.toString().split('').length === 1) {
            console.log(i);
        }
        else if (i.toString().split('').length > 1) {
            const splitStr = i.toString().split('')
                if (((Number(splitStr[0]) + (Number(splitStr[1])))) % 2 === 0) {
                    console.log(Number(splitStr.join('')));
                }
        }
    }
}
findEven(50)

