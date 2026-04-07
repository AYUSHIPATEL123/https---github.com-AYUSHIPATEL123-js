// let task = document.querySelector('#taskInput')
// const addTaskBtn = document.getElementById("addTask")
// const tbody = document.getElementById('taskTableBody')
// let delBtn;
// let tr; 
// addTaskBtn.addEventListener('click',function(e){

//     e.preventDefault()
//     console.log("add task pressed")
//     tr = document.createElement('tr')
//     tr.setAttribute('class',"tr")

//     let td1 = document.createElement('td')
//     td1.innerText = task.value

//     let td2 = document.createElement('td')
//     let checkbox = document.createElement('input')
//     checkbox.setAttribute('type',"checkbox")
//     checkbox.setAttribute('name',"taskCheckBox")
//     checkbox.setAttribute('value',"completed")
//     td2.appendChild(checkbox)
//     td2.append(" completed")

//     let td3 = document.createElement('td')
//     delBtn = document.createElement('button')
//     delBtn.setAttribute('id',"del-btn")
//     delBtn.innerText = "Delete"
//     td3.appendChild(delBtn)

//     delBtn.addEventListener('click', function(){
//         this.closest("tr").remove()
//     })

//     tr.appendChild(td1)
//     tr.appendChild(td2)
//     tr.appendChild(td3)
    
//     tbody.appendChild(tr)

//     task.value = ''
// })


let task = document.querySelector("#taskInput")
const add_btn = document.getElementById('addTask')
const t_body = document.getElementById("taskTableBody")
let task_list = []


add_btn.addEventListener('click',function(e){
    e.preventDefault()
    task_list.push({
        name:task.value,
        completed:false
    })
    renderTask()
    task.value = ""
})

function renderTask(){
    t_body.innerHTML = ""

    task_list.forEach((t,index) => {
        let tr = document.createElement('tr')
        tr.innerHTML=`
        <td> ${t.name} </td>
        <td>
            <input type="checkbox" ${t.completed ? "checked" : ""}> Completed
        </td>
        <td>
        <button id="del-btn" data-index="${index}" type="button">Delete</button>
        </td> 
        `
        t_body.appendChild(tr)
    })
}

t_body.addEventListener('click',function(e){
    if (e.target.tagName === 'BUTTON'){
        let index = e.target.dataset.index
        task_list.splice(index,1)
        renderTask()
    }
})