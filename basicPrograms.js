//BMI calc
// let weight = 73
// let height=1.70
// let bmiCalc=weight/(height*height);
// // console.log(bmiCalc);
// (bmiCalc<18.5) ?console.log('Underweight'): (bmiCalc>18.5 && bmiCalc<25)?console.log('Normal'): console.log('Over weight')

//object
// const book={
//     price:120,
//     bookName:'Immortals of Meluha'
// } 
// const books= new Object()
// books.price=120
// books.bookName='And then there were none'
// console.log(book.bookName);
// console.log( books.bookName);

//array
// const arr=[10,20,30,40]
// const arr1= new Array(
//     100,200,300,400
// )
// console.log(arr);
// console.log(arr1);

//date
// const dateObj= new Date()
// console.log(dateObj);
// const dateNow= new Date(2179172981)
// console.log(dateNow); 
// let dateStr= new Date('Nov 29 1996')
// console.log(dateStr);
// const dateTo=dateStr.toLocaleDateString('en-US',{
//     weekday:'long',
//     month:'short',
//     day:'numeric'
// })
// console.log(dateTo);

//for in  for of
// const numArr=[10,20,30,40]
// for (let val in numArr){
//     console.log(numArr[val]);
// } 
// for( let value of numArr){
//     console.log(value);
// }

//math
// let rand=Math.floor(Math.random()*50)
// console.log(rand);

//prime number
// function prime(num){
//     let k=0
// for (let i = 1; i<=num; i++) {
//     if(num%i===0){
//         k++
//     }  
// }
// if(k==2){
//     console.log('is prime');
// } else{
//     console.log('not a prime');
// }
// }
// prime(11)

//booble sort
// let sortIt=[1,4,2,6,8,9]
// function sortId(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[j]>arr[j+1]) {
//                let  temp= arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }

//     }
//     console.log(arr);
// }
// sortId(sortIt)

// factorial
// const fact=(num)=>{
//     if(num<0){
//         return -1
//     }else if(num==0){
//         return 1
//     } else{
//         return num*fact(num-1)
//     } 
// } 
// console.log( fact(4) );

//fibonacci
// let fib=(num)=>{
//     let num1=0
//     let num2=1
//     let sum;
//     for (let i = 0; i < num; i++) {
//         sum=num1+num2
//         num1= num2
//         num2= sum
//     }
//     return console.log(num2)
// }
// fib(4)


//promise
// let 
//-----------------------------------
// let arr=[1,2,3,4,5,6,7,8,9]
// //even
// let even=arr.filter((val)=>{
//    if(val%2===0){
//        return true
//    }else{
//        return false
//    }
// })
// //odd
// let odd=arr.filter((val)=>{
//     if(val%2!==0){
//         return true
//     }else{
//         return false
//     }
//  })
// console.log('Odd',odd);
// console.log('Even',even);
// console.log('Original',arr);


// let arr=[1,2,3,4,5,6]

// arr.forEach((value)=>{
//     value=value+2
//     console.log(value);
// }) 

// arr.unshift(10)
// console.log(arr);
// let arr2=arr.shift()
// console.log(arr2);
// console.log(arr);
// let pushArr=arr.push(100)
// console.log(pushArr);
// console.log(arr);
// let popArr=arr.pop()
// console.log(arr);
// console.log(popArr);

// let sliceArr=arr.slice(1,3)
// console.log(sliceArr);
// let spliceArr=arr.splice(1,2)
// console.log(spliceArr);

// console.log(arr);
// let even=arr.filter((val)=>{
//     if (val%2===0) {
//         return true
//     }
// })
// console.log(even);
// let odd=arr.filter((val)=>{
//     if (val%2!==0) {
//         return true
//     }
// })
// console.log(odd);

// let mapArr=arr.map((value)=>{
//     value=value+10
//     return value
// })
// console.log(mapArr);


// function MyConstructor(fname,lname) {
//     this.fname= fname
//     this.lname=lname
//     console.log(this);
//     this.getMoreDetails= function(){
//         return `my name is ${fname} ${lname}`
//     }    
// }

// const person1=new MyConstructor('Adarsh','N D')
// const person2=new MyConstructor('Anil','Kumar')
// const person3=new MyConstructor('Naveen','S')

// let arr=[1,2,3,4,5,7]
// const [a,s,d,w]=arr
// console.log([a,s,d,w]);

// let obj={
//     firstName:'adarsh',
//     lastName:'N D',
// }
// const {firstName,lastName}=obj
// console.log(firstName);
// console.log(lastName);


// let arr=[1,2,3,4,5,3]
// let arr2=[...arr]
// arr2[2]=10
// arr.push(20)
// console.log(arr);
// console.log(arr2);

// function first() {
//     setTimeout(()=>{console.log('first executed');},3000)

// }
// function second() {
//     console.log('second executed');
// }
// first(second())

// function func() {
//    let count=0
//     function func2() {
//         console.log('inner');
//         count=count+10
//         console.log(count);
//     }
//     return func2
// }

// const outer=func()
// outer()
// outer()

// const url='https://jsonplaceholder.typicode.com/posts'
// async function myfunction() {
//     try{
//     let a=await fetch(url)
//     let b=await a.json()
//     console.log(b);}
//     catch(err){
//         console.log(err);
//     }
//     finally{
//         console.log('Excellent in javaScript');
//     }
// }
// myfunction();


// let arr = [20,3,10,9,11,7,5]
// let filteredArr = arr.filter((num) => {
//     var k = 0
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             k++
//         }
//     }
//     if (k === 2) {
//         return true
//     } else {
//         return false
//     }
// })
// const prime=JSON.stringify(filteredArr)
// localStorage.setItem('key',filteredArr)

// console.log(prime);

// let arr1=[2,4,65,7,3,67]
// let primeNum=arr1.filter((num)=>{
//    let c=0
//     for (let i = 1; i <= num; i++) {
        
        
//     }
// })

// const employeeData = []

// const loginElement = document.getElementById('login')
// loginElement.addEventListener('click', function () {
//     // employee object to add the input fields value
//     const employee = {
//         userName: '',
//         emailId:'',
//         age:'',
//         password: ''
//     }
//     const userName = document.getElementById('userName').value
//     const mailId = document.getElementById('email').value
//     const ageVal = document.getElementById('age').value
//     const passId = document.getElementById('password').value
//     const acceptId = document.getElementById('accept')

//     const userNameValid = validateUserName(userName)
//     const emailValid = validEmail(mailId)
//     const ageValid = validateAge(ageVal)

//     const passwordValid = validatePassword(passId)
//     const isAccepted = validateAccept(acceptId)

//     if (userNameValid === true && emailValid === true && ageValid === true && passwordValid === true && isAccepted === true) {
//         // alert('valid')
//         employee.userName = userName
//         employee.emailId= mailId
//         employee.age=ageVal
//         employee.password = passId

//         employeeData.push(employee)
//         displayEmployeeData(employeeData)
//     } else {
//         // alert('not valid')
//     }
    
// })

// const userSave=JSON.stringify(userName)
// localStorage.setItem('User name',userSave)

// function displayEmployeeData(empData) {
//     const tableDiv = document.getElementById('tableData')
//     let empTable = `<table class="table">
//     <thead>
//         <tr>
//         <th>UserName</th>
//         <th>EmailId</th>
//         <th>Age</th>
//         <th>Password</th>
//         </tr>
//     </thead>`
//     empData.forEach(emp => {
//         empTable += `<tr><td>${emp.userName}</td><td>${emp.emailId}</td><td>${emp.age}</td>
//             <td>${emp.password}</td></tr>`
//     })
//     empTable += `</table>`
//     // display data in table
//     tableDiv.innerHTML = empTable
// }

// //user name validation
// function validateUserName(userName) {
//     if (userName === '') {
//         var userErr = document.getElementById('userNameError')
//         userErr.innerText = '*please enter user name'
//         return false
//     } else if (!isNaN(userName)) {
//         var userErr1 = document.getElementById('userNameError')
//         userErr1.innerText = '*please enter valid name'
//         return false
//     } else {
//         var userRight = document.getElementById('userNameError')
//         userRight.innerText = ''
//         return true
//     }
// }

// //email validation
// function validEmail(mailId) {
//     if (mailId === "") {
//         const mailErr = document.getElementById('emailerr')
//         mailErr.innerText = '*please enter email Id'
//         return false
//     } else if (mailId.indexOf('@') <= 0) {
//         const mailErr1 = document.getElementById('emailerr')
//         mailErr1.innerText = '*please enter valid email Id'
//         return false
//     } else {
//         const mailRight = document.getElementById('emailerr')
//         mailRight.innerText = ''
//         return true
//     }
// }

// //age validation
// function validateAge(ageVal) {
//     if (ageVal === "") {
//         const ageErr0 = document.getElementById('ageerr')
//         ageErr0.innerText = '*Please enter age'
//         return false
//     } else if (ageVal < 0) {
//         const ageErr1 = document.getElementById('ageerr')
//         ageErr1.innerText = '*Please enter valid age'
//         return false
//     } else if (ageVal > 150) {
//         const ageErr2 = document.getElementById('ageerr')
//         ageErr2.innerText = '*Please enter valid age'
//         return false
//     } else {
//         const ageRight = document.getElementById('ageerr')
//         ageRight.innerText = ''
//         return true
//     }
// }


// //password validation
// function validatePassword(passId) {
//     let pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//     if (passId.match(pass)) {
//         const paswordRight = document.getElementById('passError')
//         paswordRight.innerText = ' '
//         return true
//     } else {
//         const paswordErr = document.getElementById('passError')
//         paswordErr.innerText = '*You should have minimun 6 charecters with atleast one lowercase, one uppercase, one number one special charecter'
//         return false
//     }
// }

// //accept validation
// function validateAccept(acceptId) {
//     if (acceptId.checked === true) {
//         const accept = document.getElementById('acceptErr')
//         accept.innerText = ''
//         return true
//     } else {
//         const notAccept = document.getElementById('acceptErr')
//         notAccept.innerText = '* Please accept terms and conditions'
//         return false
//     }
// }

// //clearAll
// const clearElement = document.getElementById('clear')
// clearElement.addEventListener('click', function (){
//      isCleared()
// })
// function isCleared() {
//     const clearName=document.getElementById('userNameError')
//     clearName.innerText=''
//     const clearEmail=document.getElementById('emailerr')
//     clearEmail.innerText=''
//     const clearAge=document.getElementById('ageerr')
//     clearAge.innerText=''
//     const clearPass=document.getElementById('passError')
//     clearPass.innerText=''
//     const clearAccept=document.getElementById('acceptErr')
//     clearAccept.innerText=''     
// }

const loginElement = document.getElementById('login')
loginElement.addEventListener('click', function () {
 const userName = document.getElementById('userName').value
 const isUserName= validateUserName(userName)

 if(isUserName===true){
     addData()
 }else{
     alert('no')
 }
})

function validateUserName(userName) {
        if (userName === '') {
            var userErr = document.getElementById('userNameError')
            userErr.innerText = '*please enter user name'
            return false
        } else if (!isNaN(userName)) {
            var userErr1 = document.getElementById('userNameError')
            userErr1.innerText = '*please enter valid name'
            return false
        } else {
            var userRight = document.getElementById('userNameError')
            userRight.innerText = ''
            return true
        }
    }
let arr = new Array()
function addData() {
    getData()
    arr.push({
        userName: document.getElementById('userName').value,

    })
    localStorage.setItem('localStorage', JSON.stringify(arr))
    showData();
}
function getData() {
    let string = localStorage.getItem('localStorage')
    if (string !== null) {
        arr = JSON.parse(string)
    }
}

function showData() {
    let table = document.getElementById('personalData').getElementsByTagName('tbody')[0]
    getData();
    let newRow = table.insertRow(table.length);
    let x = table.rows.length;
    while (--x) {
        table.deleteRow(x);
    }
    for (let i = 0; i < arr.length; i++) {
        let newRow = table.insertRow(table.length);

        cell1 = newRow.insertCell(0);

        cell1.innerHTML = arr[i].userName
       
    }
}
showData()
