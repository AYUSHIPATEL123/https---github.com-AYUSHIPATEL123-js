let current_page = 1
const page_items = 3
let start_index = 0
let end_index = page_items
let tbody = document.getElementById('tbody')
let loader = document.getElementById('loader')
let url = "https://jsonplaceholder.typicode.com/users"

function get_pageIndex(current_page){
    
    start_index = (current_page - 1) * page_items
    end_index = start_index + page_items

}

async function displayItems(t_body){
    
    get_pageIndex(current_page)
    
    tbody.innerHTML = ''
    

    try {
        
        let response = await fetch(url)
        let data = await response.json()
        data = data.slice(start_index,end_index)
        
        if(data.length === 0){

            errorMessage("No more pages available")
            current_page--
            return

        }

        for (let d of data){

            tr = document.createElement('tr')

            tr.innerHTML = `<td>${d.name}</td> <td>${d.email}</td> <td>${d.phone}</td>`

            t_body.appendChild(tr)
        }

    } catch (error) {
        
        errorMessage(error)

    }   
    document.getElementById('pageInfo').innerText = current_page
}

function errorMessage(msg){
    
    tbody.innerHTML = ''
    let tr = document.createElement('tr')

    tr.innerHTML = `
        <td colspan="3">${msg}</td>
    `

    tbody.appendChild(tr)
}

async function previousPage(){
    
    if (current_page<=1){
       errorMessage("page dose not exist.page can't be less than 1")
       return
    }

        current_page--
        loader.style.display = "block";
        await displayItems(tbody)
        loader.style.display = "none";

}

async function nextPage(){

    current_page++
    loader.style.display = "block";
    await displayItems(tbody)
    loader.style.display = "none";

}

async function getUsers(){

    loader.style.display = "block";

    await displayItems(tbody)

    loader.style.display = "none";
}

