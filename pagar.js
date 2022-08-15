const boton = document.querySelector('.boton')
const enlaces = document.querySelector('.enlaces')
const fondo = document.querySelector('.estructura')
const palitos = document.querySelectorAll('.boton span')
const boton_lista_pagar = document.querySelector('.boton_lista_cursos')
const border = document.querySelector('.encerrado')
const lista_pagar = document.querySelector('.lista_cursos')

const preguntas = document.querySelectorAll('.contenedor_preguntas .contenedor_pregunta')

// LOS PAGOS:

const rhino = document.querySelector('#rhinoceros')
const revit = document.querySelector('#revit')
const sk = document.querySelector('#sketchup')
const autocad = document.querySelector('#autocad')
const vray = document.querySelector('#vray')
const photoshop = document.querySelector('#photoshop')
const adobe = document.querySelector('#adobe')

const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const p4 = document.querySelector('#p4')
const p5 = document.querySelector('#p5')
const p6 = document.querySelector('#p6')
const p7 = document.querySelector('#p7')
const p8 = document.querySelector('#p8')
const p9 = document.querySelector('#p9')


rhino.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "Rhinoceros + Grsshopper + Twinmotion 300.000 COP"
})

revit.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "Revit + Twinmotion 300.000 COP"
})

sk.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "Sketchup + Twinmotion 200.000 COP"
})

autocad.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "AutoCAD 200.000 COP"
})

vray.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "Vray 150.000 COP"
})

photoshop.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "Photoshop + Illustrator 150.000 COP"
})

adobe.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "Animación con Adobe After Effects 150.000 COP"
})

p1.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "PAQUETE 1 (Rhinoceros+Grasshopper+Twinmotion) + (Adobe After Effects) 400.000 COP"
})

p2.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "PAQUETE 2 (Rhinoceros+Grasshopper+Twinmotion) + (Photoshop+Illustrator) 400.000 COP"
})

p3.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "PAQUETE 3 (Revit+Twinmotion) + (Adobe After Effects) 400.000 COP"
})

p4.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "PAQUETE 4 (Revit+Twinmotion) + (Photoshop+Illustrator) 400.000 COP"
})

p5.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "PAQUETE 5 (Sketchup+Twinmotion) + (Vray) 300.000 COP"
})

p6.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "PAQUETE 6 (Sketchup+Twinmotion) + (Adobe After Effects) 300.000 COP"
})

p7.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "PAQUETE 7 (Sketchup+Twinmotion) + (Photoshop+Illustrator) 300.000 COP"
})

p8.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "PAQUETE 8 (AutoCAD) + (Photoshop+Illustrator) 300.000 COP"
})

p9.addEventListener('click', () => {
    document.getElementById("a_buy").href="inicio.html"; 
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = "PAQUETE 9 (AutoCAD) + (Adobe After Effects) 300.000 COP"
})

boton_lista_pagar.addEventListener('click', () => {
    border.classList.toggle('encerrado_activa')
    lista_pagar.classList.toggle('lista_cursos_activa')
    boton_lista_pagar.innerText = 'Elige el curso / paquete:'

})

// EVENTOS:

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

