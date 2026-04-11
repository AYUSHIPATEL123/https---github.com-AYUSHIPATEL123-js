const form = document.querySelector('form')

form.addEventListener('submit',async function(e){
    e.preventDefault();
   
    let url = "https://jsonplaceholder.typicode.com/posts"
    let user_id = document.getElementById('userId')
    let title = document.getElementById('title')
    let body = document.getElementById('body')
    let p = document.getElementById('result')
    let loader = document.getElementById('loader')

    
    
    loader.style.display = "block";
    p.innerHTML = ''
    try {
        response = await fetch(url,{
        method:"POST",
        headers:{
            "content-type":"application/json; charset=UTF-8"
        },
        body:JSON.stringify({
            userId: user_id.value,
            title: title.value,
            body: body.alue
        })
    })

    data = await response.json()

    p.innerHTML = JSON.stringify(`title : ${data.title} <br> userId : ${data.userId} <br> body : ${data.body}`)
    title.value=''
    user_id.value=''
    body.value=''
        
    } catch (error) {
        return error
    }
    
    

    loader.style.display = "none";
})


