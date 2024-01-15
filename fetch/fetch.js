const url= 'https://jsonplaceholder.typicode.com/posts'
const fetchPosts=()=>{
    fetch(url).then((response)=>{
        console.log(response);
        return response.json()
    }).then((data)=>{
        console.log(data);
        let postsData ='<ul>'
        data.map((post)=>{
            postsData += `<li>${post.title}</li>`
        })
        postsData += `</ul>`
        const divElement= document.getElementById('users')
        divElement.innerHTML=postsData
        console.log('Posts Data',postsData);
    }).catch(err=>{
        console.log(err);
        console.log(err.message);
    })
}
fetchPosts()

function savePost() {
    const post ={
        userId:1000,
        title:'Javascript end game',
        body:'Javascript'
    }
    fetch(url,{
        method:'POST',
        body: JSON.stringify(post),
        header:{
            'Content-type':'application/json'
        }
    }).then((response)=>{
        console.log(response);
        return response.json()
    }).then((data)=>{
        console.log('Add post -', data);
    })
}