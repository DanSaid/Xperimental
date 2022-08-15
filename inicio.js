const boton = document.querySelector('.boton')
const enlaces = document.querySelector('.enlaces')
const fondo = document.querySelector('.estructura')
const titulo_seccion1 = document.querySelector('.titulo_seccion1')
const boton_explorar = document.querySelector('.explora')
const palitos = document.querySelectorAll('.boton span')

const preguntas = document.querySelectorAll('.contenedor_preguntas .contenedor_pregunta')

    boton.addEventListener('click', () => {
    boton_explorar.classList.toggle('desactivado')
    titulo_seccion1.classList.toggle('desactivado')
    fondo.classList.toggle('estructura_nav')
    enlaces.classList.toggle('enlaces_activado')

    palitos.forEach((child) => {
        child.classList.toggle('animado')
    })
})

enlaces.addEventListener('click', () => {
    boton_explorar.classList.toggle('desactivado')
    titulo_seccion1.classList.toggle('desactivado')
    fondo.classList.toggle('estructura_nav')
    enlaces.classList.toggle('enlaces_activado')
    palitos.forEach((child) => {
        child.classList.toggle('animado')
    })
})




preguntas.forEach((pregunta) => {

    pregunta.addEventListener('click', (e) => {

        e.currentTarget.classList.toggle('activa')

        const respuesta = pregunta.querySelector('.respuesta')
        const alturaRespuesta = respuesta.scrollHeight

        if(!respuesta.style.maxHeight) {
            respuesta.style.maxHeight = alturaRespuesta + 'px';
        } else {
            respuesta.style.maxHeight = null;
        }
        
    })

})
    

