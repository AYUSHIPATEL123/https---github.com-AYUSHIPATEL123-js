let items = {
    vegetables:['potato','tomato','chili','garlic','sweet-potato','onion'],
    fruits:['banana','apple','grapes','orange','mango'],
    drinks:['water','juice','milk','tea','coffee','black-tea'],
}

list = document.getElementById('list');
 
displayItems(items,list);

function displayItems(items,list){
    for (let category in items){
        let p_li = document.createElement('li')
        p_li.innerText = category
        p_li.setAttribute('class','cat_list')
        list.appendChild(p_li)

        for (let item of items[category]){
            
            let li = document.createElement('li');
            li.innerText = item;
            list.appendChild(li);
            }
        }
}

let select = document.getElementById('filter')

displayCategory(items,select)

function displayCategory(items,select){
    for (let category in items){
        let op = document.createElement('option')
        op.innerText = category
        select.appendChild(op)
    }
}



const btn = document.getElementById('search-button')
const obt_list = document.getElementById('obtained_list')

btn.addEventListener('click', function(e){
    e.preventDefault()
    obt_list.innerText = ''
    
    const search_input = document.getElementById('search').value.toLowerCase().trim()

    let objs = {}
    
    for (let [key,value] of Object.entries(items)){
        let filtered = value.filter((ele) => {
                    ele.toLowerCase().includes(search_input)
            return ele.toLowerCase().includes(search_input);
        });
        
        if(filtered.length>0){
            objs[key] = filtered
        }
    }
    console.log(objs)
    displayItems(objs,obt_list)
})

const cat = document.getElementById('filter')

cat.addEventListener('change',function(e){
    obt_list.innerText = ''
    e.preventDefault()
    console.log(e);
    
    let objs = {}

    objs[this.value] = items[this.value]

    displayItems(objs,obt_list)
})