//------------------- Array methods -----------------------------------

//--------------------- push -----------------------------------------

const hobbies = ["Novel reading", "Playing Guitar", "Photography", "Coding"];
console.log(hobbies);

console.log("--------------- push ---------------------");
const hobbiesLength = hobbies.push("Reading"); // returns the ArrLength (add to last index)
console.log("Hobbies after push", hobbies);
console.log("hobbiesLength - ", hobbiesLength);

console.log("Hobbies - ", hobbies.push("cooking"));

//--------------------- pop -----------------------------------------
console.log(hobbies);
console.log("-------------------------- pop --------------------"); // returns deleted element (last index)
const deletedElement = hobbies.pop();
console.log("Hobbies after pop - ", hobbies);
console.log("Deleted element - ", deletedElement);

//------------------ for each method ----------------------------------
hobbies.forEach(function (value, index, arr) {    // returns undefined
  //takes a callBack func as a paramenter
  console.log(`${index} -> ${value}`);
});

const games = ["kabadi", "chess", "Hockey"];
games.forEach(function (elem, index, arr) {
  console.log(`${elem}, ${index}, ${arr[index]}`);
});

//------------------ unshift ------------------------------------------
console.log("------------------------ unshift --------------------------");

const lengthOfHobbies = hobbies.unshift("Gaming"); //add element at start
console.log("Hobbies after unshit - ", hobbies); // returns the Arr length
console.log("Hobbies length after unshifting -", lengthOfHobbies);

//------------------------------ shift ------------------------------------------
console.log("-------------------------- shift ----------------------------");
const deletedHobbies = hobbies.shift(); // delete last element
console.log("Hobbies after shit - ", hobbies); // returns deleted element
console.log("Deleted hobbies after shifting -", deletedHobbies);
console.log("------------------------------------------------");

// ---------------------- isArray -----------------------------------------
console.log("--------------------------- isArray --------------------------");

console.log("type Of hobbies - ", typeof hobbies); //give as object which is wrong
//isArray returns true if it is an array or return false
const isHobbiesArray = Array.isArray(hobbies);
console.log("isHobbiesArray - ", isHobbiesArray);

//-------------------------------------- indexOf --------------------------------
console.log(
  "--------------------------- indexOf --------------------------------"
);

//check whether element is present inside or not
//if present returns index value or else -1
const indexOfCoding = hobbies.indexOf("Coding");
console.log("index Of Coding -", indexOfCoding);

//------------------------------------- splice ------------------------------------
console.log(
  "------------------------------------- splice ------------------------------------"
);

const numbers = [10, 20, 30, 40, 50];
const deletElements = numbers.splice(2, 2, 60, 70, 80); //from index, how many elements, add elements
//returns edited arr
console.log("deledElements", deletElements); //30,40
console.log("numbers", numbers); //10,20,60,70,80,50   //original array will be altered
console.log("--------------------------------------");

//if we want to only add elements without deleting
//pass deleted cont as 0(second parmeter)
const deletedElement1 = numbers.splice(1, 0, 100, 110);
console.log("deletedElements1", deletElements);
console.log("numbers", numbers);

//------------------------------------- slice ------------------------------------
console.log(
  "------------------------------------- slice ------------------------------------"
);
const nums = [10, 20, 30, 40, 50];
const deletedNums = nums.slice(1, 3); //From-index to To-index
console.log("deletedNums", deletedNums); //20,30    // returns deleted elements
console.log("nums", nums); //10,20,30,40,50  //donot alter the original arr

//Shallow copy of array
const numsCopy = nums.slice(0);
console.log("numsCopy - ", numsCopy); //10,20,30,40,50
console.log("nums -", nums); //10,20,30,40,50
nums[0] = 1000;
console.log(nums[0]); //1000
console.log(numsCopy[0]); //10

//copy (addess/ reference will be copied)
//changing n will also change n1
const n = [10, 20];
const n1 = n;
n[0] = 90;
console.log(n[0]); //90
console.log(n1[0]); //90

//----------------------------------------- Spread -------------------------------------------
console.log(
  "------------------------------------- Spread ------------------------------------"
);

const movies = ["Spiderman", "Batman", "Antman", "ironman"];
//shallow copy using spread operator for array
const moviesCopy = [...movies];
movies[0] = "Shakthiman";
console.log(movies[0]); //Shaktihman
console.log(moviesCopy[0]); //Spiderman

//--------------------------------------- find ---------------------------------------------------
console.log(
  "-------------------------------- find ---------------------------------------------"
);
const check = numbers.find((current) => {
  return current < 30;
});
console.log(check); // gives first element that satisfy the condition

//---------------------------------- flat -----------------------------------------------------
console.log(
  "-------------------------------- falt -------------------------------"
);
const arrFlat = [1, 2, [3, [2, 3], 4], 5]; // [1,2,3,4,5]
const afterFlat = arrFlat.flat(); // default depth = 1 (0 , 1)
console.log(afterFlat);

//--------------------------------------- findIndex ---------------------------------------------------
console.log(
  "-------------------------------- findIndex ---------------------------------------------"
);
const arrFind = [10, 20, 30, 40];
// const arrFindIndex=arrFind.findIndex(element){element > 10}
const arrFindIndex = arrFind.findIndex((element) => {
  //returns index of the first element that satisfy the condition
  return element > 10;
});
console.log(arrFindIndex); //1 = index position of 20

//--------------------------------------- sort ---------------------------------------------------
console.log(
  "-------------------------------- sort ---------------------------------------------"
);
const arrSort = ["raman", "adarsh", "amith"];
const arrSorted = arrSort.sort();
console.log(arrSorted); // Ascending order

const arrSort1 = [20, 10, 2, 4, 5];
const arrSorted1 = arrSort1.sort();
console.log(arrSorted1); // it will take only first digit of the number
const arrSorted2 = arrSort1.sort(function (a, b) {
  return a - b; // a-b ->ascending order || b-a -> descending order
});
console.log(arrSorted2); // it will take 2 digit a and b digit of the number

//--------------------------------------- revers -------------------------------------------------------
console.log(
  "--------------------------------- revers ---------------------------------="
);
const arrRev = [12, 23, 34];
console.log("Original - ", arrRev);
const arrRev1 = arrRev.reverse();
console.log("Reversed - ", arrRev1);

//-------------------------------------- Map ----------------------------------------
console.log(
  "--------------------------------- map ---------------------------------="
);
const numsArr = [100, 200, 300, 400, 500];
const newNumsArr = numsArr.map((value, index, arr) => {
  return value + 10;
});
console.log(numsArr); //100,200,300,400,500
console.log(newNumsArr); //110,210,310,410,510

//we use this to reduce codes like
// const numsArr1=[100,200,300,400,500]
// const newNumsArr1=[]
// for (let i = 0; i < numsArr1.length; i++) {
//     newNumsArr1.push(numsArr1[i]+10)
// }
// console.log(newNumsArr1);
console.log(
  "------------------------------------------------------------------------------"
);

//--------------------------------------- Filter  --------------------------------------------
console.log(
  "------------------------------- Filter --------------------------------------"
);
const ageArr = [45, 56, 9, 89, 10, 5];
console.log("Original Array - ", ageArr);
const filteredAges = ageArr.filter((value) => {
  // returns true or false
  if (value > 18) {
    // form new arr with true elements
    return true;
  } else {
    return false;
  }
});
console.log("Filtered array - ", filteredAges);

//Optimized
const filteredAges1 = ageArr.filter((value) => value >= 18);
console.log("Filtered array - ", filteredAges1);

//----------------------------- join ---------------------------------------------------------
console.log(
  "----------------------------- join --------------------------------------------"
);

const fruits = ["Apple", "Pineapple", "Custard Apple", "Green apple"];
const fruitStr = fruits.join("-");
const fruitStr1 = fruits.join(); // default , is the seperator

console.log(fruitStr);
console.log(fruitStr1);

// let nE=[10,20,30]
//  nE1=nE
// var nE1=[20]
// const bb=nE.slice(0)
// console.log(bb);
// console.log(nE.slice(0));
// console.log(nE1.slice(1));
