const calculo = document.getElementById("calculo");
let operaciones = [];
let numeros = [];
let contadora = 0;
let resultado = 0;

let agregar = (valor) =>{ 
    if(calculo.innerText === "0"){ 
        calculo.innerText = valor;
        numeros[contadora] = valor;
    }
    else if (valor == 1 || valor==2 || valor==3 || valor == 4 || valor==5 || valor==6 || valor==7 || valor==8 || valor==9 || valor==0) {
        calculo.innerText += valor;

        if (numeros[contadora] == null) numeros[contadora] = valor;
        else numeros[contadora] += valor;
    } 
        
    if (valor == "+" || valor =="-" || valor=="x" || valor=="/") {
        calculo.innerText += ` ${valor} `
        operaciones.push(valor);
        contadora ++;
    
    }

    // para ver si funciona
    console.log(numeros)
    console.log(operaciones)
    console.log("contadora" + contadora)
}

let eliminar = () =>{
    calculo.innerText = "0";
    numeros = [];
    operaciones = [];
    contadora = 0;
    resultado = 0;

    console.log(numeros)
    console.log(operaciones)
}

let Calcular = () =>{

    if (numeros.length <= 1 || operaciones.length < 1) alert("No se puede realizar la operación");
    
    numeros = numeros.map(n => Number(n));

    resultado = numeros[0]; // pones el primer numero como si fuera una base

    for (let i = 0; i < operaciones.length; i++) {
        let op = operaciones[i];
        let num = numeros[i + 1];

        if (op === "x") resultado *= num;
        else if (op === "/") {
           
            if (num === 0) alert("No se puede dividir por cero");
            else resultado /= num;

        } else if (op === "+") resultado += num;
        else if (op === "-") resultado -= num;
    }

    calculo.innerText = resultado;
    console.log("Resultado: " + resultado);

    // te reinicia los array y la variable contadora para poder apilar más operaciones
    numeros = [];
    numeros[0]= resultado;
    contadora--;
    operaciones = [];

    if (resultado >= 0) calculo.style.color = "green";
    else calculo.style.color = "red";
    
}
    


