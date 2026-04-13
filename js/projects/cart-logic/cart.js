let clothes = {
        T_SHirt:400,
        Jeans:800,
        Shorts:500,
        Tops:450
}

let  con_2 = document.querySelector('.con_2')

for ([key,value] of Object.entries(clothes)){

        let div = document.createElement('div')
        div.setAttribute('class','con_3')
        let h2 = document.createElement('h2')
        h2.innerText = key
        
        let p = document.createElement('p')
        p.innerHTML = `Prize : $ ${value}`

        let button = document.createElement('button')
        button.setAttribute('class','add_to_cart')
        button.innerHTML = `Add to Cart`

        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(button)

        con_2.appendChild(div)

        button.addEventListener('click',function(e){
            console.log(this.closest('h2'))
})
}


