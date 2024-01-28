const keyboard = document.querySelector("body")
const contanier = document.querySelector(".huruf")
const angka = document.querySelector(".counter")

let counter = 1
let currKey = ''

keyboard.addEventListener('keydown', e => {
    if ( e.key === currKey ) counter++
    else counter = 1
    
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    keyboard.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

    angka.innerHTML = counter
})

keyboard.addEventListener('keyup', e => {
    currKey = e.key

    const text = `${e.key}`
    contanier.innerHTML = text
})