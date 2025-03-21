const calculo = document.getElementById("calculo");
let operaciones = [];
let numeros = [];

let agregar = (n) =>{ 
    if(calculo.innerText === "0"){ 
        calculo.innerText = n;
        numeros.push(n);
    }
    else if (n == 1 || n==2 || n==3 || n == 4 || n==5 || n==6 || n==7 || n==8 || n==9 || n==0) {
        calculo.innerText += n;
        numeros.push(n);
    } 
        //cada vez que se ponga una operacion que el numero ingresado se junte y forme un numero
    if (n == "+" || n =="-" || n=="x" || n=="/") {
        calculo.innerText += ` ${n} `
        operaciones.push(n);
        numeros.push("*");
    
    }

    //ver si funciona
    console.log(numeros)
    console.log(operaciones)
}

let eliminar = () =>{
    
}

let Calcular = () =>{
    console.log(numeros.indexOf("*")) //VER COMO HACER PARA QUE CADA VEZ QUE ENCUENTRA UN *, JUNTE TODAS LAS POSICIONES ANTERIORES (LAS CONCATENE) PARA DESPUES PASARLO A NUMERO Y CALCULAR


}
