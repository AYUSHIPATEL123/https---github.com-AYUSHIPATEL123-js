
async function getUsers(){

    url = "https://jsonplaceholder.typicode.com/users"

    let tbody = document.getElementById('tbody')
    let loader = document.getElementById('loader')

    tbody.innerHTML = ''
    
    loader.style.display = "block";

    try {
        response = await fetch(url)

        data = await response.json()
        
        for (let d of data){
            tr = document.createElement('tr')

            tr.innerHTML = `<td>${d.name}</td> <td>${d.email}</td> <td>${d.phone}</td>`

            tbody.appendChild(tr)
        }
    } catch (error) {
        
        tr = document.createElement('tr')
        tr.innerHTML = `${error}`
        tbody.appendChild(tr)

    }
    loader.style.display = "none";
}

