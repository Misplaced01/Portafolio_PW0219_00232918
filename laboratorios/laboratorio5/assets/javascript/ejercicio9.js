console.log("------------------------------------Ejercicio 9--------------------------------------------")

var circunferencia = function(r){
    let pi = Math.PI;//math.PI para dar el valor de pi.
    if(r <=0){ //si el radio es menor o igual a 0, muestra -1
       console.log(-1)
    }else{
        let area= pi* Math.pow(r,2)//Math.pow saca el cuadrado del radio para la formula de el area de la circunferencia
        console.log('El area es: '+area )
    }
}

circunferencia(4);
circunferencia(0);