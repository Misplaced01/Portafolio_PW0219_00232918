console.log("----------------------------------Ejercicio 10----------------------------------------")

var absol = function(x){
    if(x<0){//si el numero que ingresamos es menor que 0, muestra -x es decir que -(-x) = x
        console.log('El valor absoluto de '+ x + ' es: '+ (-x))
    }else if(x>=0){//si el numero que ingresamos es mayor que 0, muestra x tal como es
        console.log('El valor absoluto de ' + x + ' es: '+ x)
    }
}

absol(39);
absol(-57);
absol(-37.9);