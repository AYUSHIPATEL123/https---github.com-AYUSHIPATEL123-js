let isDarkMode = localStorage.getItem('DarkTheme') === "true"

applyMode()
let modes = document.getElementsByClassName('mode');

for (let mode of modes) {

    mode.addEventListener('click',function(e){
    e.preventDefault()
    isDarkMode = document.getElementById('t-1').checked
        
    localStorage.setItem('DarkTheme',isDarkMode)

    applyMode()
   
})
}
console.log(localStorage)
function applyMode(){

    let body = document.querySelector('body')
    let h1 = document.querySelector('h1')

    body.style.backgroundColor = isDarkMode ? '#1c1b1b' : "white"
    h1.style.color = isDarkMode ? "white" : "#1c1b1b"
    
    h1.innerHTML=`Current Theme: ${isDarkMode ? "Dark":"Light"}`
    
}
