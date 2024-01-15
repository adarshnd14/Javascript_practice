//button
function testClick() {
    console.log('Test click executed');
}

//change name
function changeName(name){
   const element = document.getElementById('username')
    element.innerText=name
}

//hover color change

// function applyBgColor(){
//    const element1 = document.getElementById('changeColor')
//    element1.style.background='red'
// }
// function removeBgColor(){
//     const element1 = document.getElementById('changeColor')
//     element1.style.background='white'
//  }

function removeApplyBgColor(color) {                                    // insted of writing two function for two color we can have 
    const element1 = document.getElementById('changeColor')             // common function and call it in html or js
    element1.style.background=color
    // element1.style.fontSize='50px'
}


//onkeyup and onkeydown
function getData() {
    // console.log('onkeyup');
    const element2=document.getElementById('randomData')
    console.log('onkeyup', element2.value);
    document.getElementById('show').innerText= element2.value.toUpperCase()
}
function showData() {
    console.log('onkeydown');
}

//check box
function chechBoxClick() {
const element = document.getElementById('hobbies')
    console.log(element.checked);
}