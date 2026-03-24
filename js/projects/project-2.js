const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const weight = parseInt(document.getElementById('weight').value)
    const height_ft = parseInt(document.getElementById('height').value)
    const height_in = parseInt(document.getElementById('height1').value)

    const height = (height_ft*12) + height_in

    let bmi = (weight / ((height * 0.0254) ** 2)).toFixed(2)

    document.querySelector('#result').innerText = bmi
})