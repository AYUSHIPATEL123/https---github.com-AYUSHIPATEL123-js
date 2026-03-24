const clock = document.getElementById('clock')

setInterval(function(){
    let time = new Date()
    clock.innerHTML = time.toLocaleTimeString()
},1000)

