//document.write('welcome to DOM session')
//if if=d is present it returns element else null
//so add js file at last line

//to get an element with an id - return single element
//---------------------------------- document.getElementById ---------------------------------
const element= document.getElementById('demo')
console.log(element);
element.innerText='DOM'
console.log('----------------------------------------------------------------------------');

//it access id, class or tag directly - it retu rn single element
//--------------------------------- document.querySelector ------------------------------------
const pElement= document.querySelector('.test')     //class
console.log(pElement);

const tagElement= document.querySelector('h1')      //tag
console.log(tagElement);

const idElement = document.querySelector('#demo')   //id
console.log(idElement);
console.log('----------------------------------------------------------------------------');


//to get multiple elements with same class name
//--------------------------------- document.getElementsByClassName ---------------------------------
const personElements= document.getElementsByClassName('person')
console.log(personElements);                         //will return an array
personElements[2].innerText='Mumbai'                 //make changes like how we change array element
                                                     //to change many elements of array at once we can loop through it
for (let i = 0; i < personElements.length; i++) {
    if (i===0) {
        personElements[i].innerText='Vijay'
    } else if (i===1) {
        personElements[i].innerText='K'
    } else{
        personElements[i].innerText='Chennai'
    }   
}
console.log('----------------------------------------------------------------------------');


//it returns array of elements
//to get all elements of a perticular tag 
//getElementByTagName
const pElements=document.getElementsByTagName('p')
console.log(pElements);
for (let i = 0; i < pElements.length; i++) {
    console.log(pElements[i]);
    pElements[i].style.color='blue'
}
console.log('----------------------------------------------------------------------------');


//it returns array of elements
//to get all elements of a perticular tag or class name
//--------------------------------------- querySelectorAll ----------------------------------
const personElements1=document.querySelectorAll('.person')    
console.log(personElements1);
for (let i = 0; i < personElements1.length; i++) {
    console.log(personElements1[i]);
    personElements1[i].style.color='red'
    personElements1[i].style.fontFamily='monospace'
    personElements1[i].style.padding='10px'


}
const pTags=document.querySelectorAll('p')    
console.log(pTags);
for (let i = 0; i < pTags.length; i++) {
    console.log(pTags[i]);
    pTags[i].style.background='lightblue'
    pTags[i].style.border='2px solid blue'
    pTags[i].style.borderRadius='8px'
    pTags[i].style.padding='10px'
}
console.log('----------------------------------------------------------------------------');


//---------------------------------- createElement ------------------------------------------------
//to create new html element
const h2Element = document.createElement('h2')    // creates new h2 elemenet
h2Element.innerText='This is h2 elemenet'         // but do not add it to DOM
console.log(h2Element);
h2Element.style.color='green'
document.body.appendChild(h2Element)              //body.appendChild - adds it to DOM as a child of body at bottom
console.log('----------------------------------------------------------------------------');


//to add style to css classes using DOM/JS
const labelElements= document.getElementsByTagName('label')
//add style based on css file classes
//adding single class
labelElements[0].className='labelTag'
//adding multiple classes
labelElements[1].classList='labelTag labelBg'


//----------------------------------------- innerText and inerHTML ---------------------------------------
const userElement = document.getElementById('use')
//inner HTML will parse the string as HTML code
userElement.innerHTML='<h1> My name is Adarsh </h1>'

const userElement1 = document.getElementById('user1')
//inner text will parse the string as plain text or string itself
userElement1.innerText ='<h1> My name is Adarsh </h1>'

//----------------------------- to hide elements -------------------------------------------------
const hobbieListElement= document.getElementById('hobbiesList')
hobbieListElement.style.display='none'

//----------------------------- to display elements -------------------------------------------------
// const hobbieListElement= document.getElementById('hobbiesList')
// hobbieListElement.style.display='block'