/*
//1.INTRODUCCIÓN A JAVASCRIPT
//Ejercicio 2
let a=10;
let b=5;
let c=a+b;

console.log("La suma de a y b es: "+c);

//Ejercicio 3
let nombre=prompt("¿Como es tu nombre?");
console.log("Hola "+nombre);


//------------------------------------------------------
//2.OPERADORES LOGICOS Y CONDICIONALES
//Ejercicio 1
let a=7;
let b=5; 
let c=a;

if(c<b){    
    c=b
}

console.log("El mayor de los dos numeros es: "+c);

//Ejercicio 2

let numero=prompt("Ingresa un numero y te dire si es par o impar");
if(numero%2===0){
    console.log("El número "+numero+", es par");
}else{
    console.log("El número "+numero+", es impar");
}

//------------------------------------------------------
//3.OPERADORES DE ASIGNACION Y BUCLES
//Ejercicio 1

let num=10;
while (num>0) {
    console.log(num);
    num-=1;
}

//Ejercicio 2

let num=0;

do {
    num=prompt("Ingresa un numero mayor a 100: ");
} while (num<100);

console.log("Ingresaste un numero mayor a 100: "+num);

//------------------------------------------------------
//4.FUNCIONES DE JAVASCRIPT
//Ejercicio 1

let num1=8;
let num2=7;

function esPar(num){
    return num%2===0;
}

console.log("El numero "+ num1+" es par: "+esPar(num1));
console.log("El numero "+ num2+" es par: "+esPar(num2));

//Ejercicio 2

function convertirCelsiusFahrenheit(celsius){
    return celsius*1.8+32
}

let celsius=prompt("Ingresar grados Celsius:");
console.log(celsius+ "° son equivalentes a "+ convertirCelsiusFahrenheit(celsius)+ "°F");


//5.OBJETOS EN JAVASCRIPT
""Ejercicio 1



let persona={
    nombre:"Paula",
    edad:21,
    ciudad:"Buenos Aires"
}

console.log(persona);

persona.ciudad="Mendoza"

console.log(persona);

//Ejercicio 2

let libro={
    titulo:"Los Cuatro Acuerdos",
    autor:"Miguel Ángel Ruiz",
    año:1997,
    antiguo:function(){
        if(2024-this.año>10){
            return true;
        }else{
            return false;
        }
    }
}
console.log("El libro "+ libro.titulo+ " es antiguo: "+libro.antiguo());

//6.Arrays
//Ejercicio 1
let numeros=[1,2,3,4,5,6,7,8,9,10];
console.log("Numeros originales:"+ numeros.join(','));

for(let i=0;i<numeros.length;i++){
    numeros[i]=numeros[i]*2
}
console.log("Numeros mulptiplicados por 2:"+ numeros.join(','));


//Ejercicio 2


let pares=[];
for(let i=0;i<=20;i++){
    if(i%2==0){
        pares.push(i);
    }
}
console.log("Primeros 10 numeros pares: "+pares.join(','));


//7.INTRODUCCION AL DOM
//Ejercicio 1
const button=document.getElementById("button");
const parrafo=document.getElementById("parrafo");

const cambiarColorLetras=()=> {
    parrafo.classList.add("parrafoAzul")

};
button.addEventListener("click",() => {
    console.log("El usuario hizo click");
    cambiarColorLetras();
}
)

//Ejercicio 2
const button=document.getElementById("button");

const getDataInput=()=>{
    const text=document.getElementById("inputText").value;
    alert("Has ingresado: "+text)
    
}
button.addEventListener("click",()=>{
    getDataInput();
}
)
//8.EVENTOS EN DOM 

const element1=document.getElementById("element1");
element1.addEventListener("click",()=>{
    console.log(element1.textContent);
    
})

const element2=document.getElementById("element2");
element2.addEventListener("click",()=>{
    console.log(element2.textContent);
    
})

const element3=document.getElementById("element3");
element3.addEventListener("click",()=>{
    console.log(element3.textContent);
    
})

const element4=document.getElementById("element4");
element4.addEventListener("click",()=>{
    console.log(element4.textContent);
    
})
//Ejercicio 2


const input= document.getElementById("input");
const buttonDeshabilitar=document.getElementById("buttonDeshabilitar");
const buttonHaabilitar=document.getElementById("buttonHabilitar");

buttonDeshabilitar.addEventListener("click",()=>{
    input.disabled=true;
})

buttonHabilitar.addEventListener("click",()=>{
    input.disabled=false;
})
*/
//9.LocalStorage
//Ejercicio 1
const buttonSave=document.getElementById("buttonSave");
const buttonDelete=document.getElementById("buttonDelete");



buttonSave.addEventListener("click",()=>{
    const inputMail=document.getElementById("inputMail").value;
    localStorage.setItem(
        "mail",
        inputMail
    )
})

buttonDelete.addEventListener("click",()=>{
    localStorage.removeItem("mail");
})


 
const saveMail= document.getElementById("saveMail");
const value=localStorage.getItem("mail");
if(value){
    let newMail ="Correo guardado:"+value;
    saveMail.textContent=newMail;
}

