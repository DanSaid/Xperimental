const boton = document.querySelector('.boton')
const enlaces = document.querySelector('.enlaces')
const fondo = document.querySelector('.estructura')
const palitos = document.querySelectorAll('.boton span')

const preguntas = document.querySelectorAll('.contenedor_preguntas .contenedor_pregunta')

    boton.addEventListener('click', () => {
    fondo.classList.toggle('estructura_nav')
    enlaces.classList.toggle('enlaces_activado')

    palitos.forEach((child) => {
        child.classList.toggle('animado')
    })
})

enlaces.addEventListener('click', () => {
    
    fondo.classList.toggle('estructura_nav')
    enlaces.classList.toggle('enlaces_activado')
    palitos.forEach((child) => {
        child.classList.toggle('animado')
    })
})




