const h1 = document.querySelector('h1');
const p = document.querySelector('p');

const parrafito = document.querySelector('.parrafito');
//const parrafito = document.getElementsByClassName('parrafito');

const pid = document.querySelector('#pid');
//const pid = document.getElementById('pid');

const input = document.querySelector('input');

console.log(h1);
console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

//Modificar el HTML
h1.innerHTML='Patito <br> feo';//A codigo html
h1.innerText='Patito <br> Feo';//A codigo text
//console.log(h1.getAttribute('class'));//Lee atributo class
//h1.setAttribute('class', 'rojo');//Cambiamos el atrobuto a rojo

h1.classList.add('rojo');//Agregar clase una clase pero no cambia la clase
h1.classList.remove('verde');//elimina una clase del altributo

input.value='456';

const img= document.createElement('img');//crear un elemento html
img.setAttribute('src','https://images.pexels.com/photos/10550714/pexels-photo-10550714.jpeg?cs=srgb&dl=pexels-ekrulila-10550714.jpg&fm=jpg&_gl=1*x04c0u*_ga*Njg4ODQ1OTQzLjE2Njc1MDUzODU.*_ga_8JE65Q40S6*MTY2NzUwNTM4NC4xLjAuMTY2NzUwNTM4NC4wLjAuMA..');
console.log(img);
pid.append(img);



    