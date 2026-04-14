let clothes = {
        T_Shirt:400,
        Jeans:800,
        Shorts:500,
        Tops:450
}

let count = {
        T_Shirt:0,
        Jeans:0,
        Shorts:0,
        Tops:0
}


let  con_2 = document.querySelector('.con_2')


for (let [key,value] of Object.entries(clothes)){

        let div = document.createElement('div')
        div.setAttribute('class','con_3')
        
        let h2 = document.createElement('h2')
        h2.innerText = key
        
        let p = document.createElement('p')
        p.textContent = `Price : $ ${value}`

        let button = document.createElement('button')
        button.setAttribute('class','add_to_cart')
        button.innerText = `Add to Cart`

        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(button)

        con_2.appendChild(div)

}


document.addEventListener('click',function(e){
        
        if(e.target.classList.contains('add_to_cart')){
                
                let btn = e.target
                
                let h2 = btn.parentElement.querySelector('h2').innerText
                
                count[h2]++ 
                
        }

})

let tbody = document.getElementById('cartItems')

document.getElementById('calculateTotal').addEventListener('click',function(e){
        e.preventDefault()
        tbody.innerHTML = ''
        for (let [key,value] of Object.entries(count)){
                if (value>0){
                        let tr = document.createElement('tr')
                        tr.setAttribute('class','trow')
                        tr.innerHTML = `<td>${key}</td><td>${clothes[key]}</td><td>${value}</td>`
                        tbody.appendChild(tr)
                }
                continue;
        
        }
        
        let total = Object.entries(count).reduce(function(accu ,  [key,value]){
                return accu + (clothes[key]*value)
        },0)

        document.getElementById('totalPrice').innerHTML = `Total Price: $${total}`
})