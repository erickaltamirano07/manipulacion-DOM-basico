const h1=document.querySelector('h1');
const form=document.querySelector('#form');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');

//btn.addEventListener('click', btnOnClick);
form.addEventListener('submit',sumarInputsValues);

function btnOnClick()
{
    console.log('Concatenacion: '+input1.value + input2.value);
    console.log(parseFloat(input1.value)+parseFloat(input2.value));
    const sumaInputs=parseFloat(input1.value)+parseFloat(input2.value);
    pResult.innerText="El resultado es: "+sumaInputs;
}
/*function sumarInputsValues(event)
{
    //console.log({event})
    event.preventDefault();
    console.log('Concatenacion: '+input1.value + input2.value);
    console.log(parseFloat(input1.value)+parseFloat(input2.value));
    const sumaInputs=parseFloat(input1.value)+parseFloat(input2.value);
    pResult.innerText="El resultado es: "+sumaInputs;
}*/

function sumarInputsValues(event)
{
    //console.log({event})
    //event.preventDefault();
    console.log('Concatenacion: '+input1.value + input2.value);
    console.log(parseFloat(input1.value)+parseFloat(input2.value));
    const sumaInputs=parseFloat(input1.value)+parseFloat(input2.value);
    pResult.innerText="El resultado es: "+sumaInputs;
}

