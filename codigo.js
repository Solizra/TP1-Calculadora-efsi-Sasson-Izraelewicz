const calculo = document.getElementById("calculo");
let operaciones = [];
let numeros = [];

let agregar = (n) =>{ 
    if(calculo.innerText === "0"){ //hayq ue poner que esto se cumpmpla si es un numero
        calculo.innerText = n;
    }
    else if (n == 1 || n==2 || n==3 || n == 4 || n==5 || n==6 || n==7 || n==8 || n==9 || n==0) {
        calculo.innerText += n;
    } 
        
    if (n == "+" || n =="-" || n=="x" || n=="/") {
        calculo.innerText += ` ${n} `
        operaciones.pop(n);
    }
}

let eliminar = () =>{
    
}

let Calcular = () =>{

}