// fetch('https://jsonplaceholder.typicode.com/comments')
//.then((res)=>(res.json()))
// .then((msg)=>console.log(msg[0].name,msg[0].body,msg[0].id,msg[0].email))
fetch('https://jsonplaceholder.typicode.com/comments')
.then((res)=>{
    return res.json();
})
.then((item)=>{
    console.log(item);
    let data='';
    item.slice(400,410).map((values) => {
        data+=`
            <div class="card p-3 mt-2">
                <p id="name">Name: ${values.name}</p>
                <p id="email">Email: ${values.email}</p>
                <p id="body">Body: ${values.body}</p>
                <p id="postid1">Post Id: ${values.postId}</p>
                <p id="id"><b>Id: ${values.id}</b></p>
            </div>`
    });
    document.getElementById("card").innerHTML=data;
})
.catch((error)=>{
    console.log(error);
});
function signUp(){
    alert('Success!')
}
function login(){
    alert('Success!')
}