const url='https://jsonplaceholder.typicode.com/posts'
async function fetchPosts() {
    try{
        const response= await fetch(url)
        const data = await response.json()
        console.log(data);
    } catch(err){
        console.log(err);
    } finally
        {
        //line of code to be executed if there is error or no error
        console.log('hello');
        console.log('Finally Block');
    }
    
}
fetchPosts()

//async await
// async function funcName(){
// try{
//     const response = await fetch(url)
//     const data= await response.json()
//     console.log(data);
// } catch (error){
//     console.log(error);
// } finally{
//     console.log('i am');
//     console.log('not a computer');
// }
// }
// funcName()

//geolocation
// const x = document.getElementById('demo')
// function getGeo() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(myPosition)
//     }else{
//         x.innerHTML='not bsupported'
//     }
// }

// function myPosition(position){
//     x.innerHTML=`latitude ${position.coords.latitude} longitude - ${position.coords.longitude}`
// }
// getGeo()