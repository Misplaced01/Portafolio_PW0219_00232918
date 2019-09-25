console.log("--------------------------------Ejercicio 3-----------------------------------------")

var arreglo = [3, 1, 12, 1, 5, 6, 8];

var comparar = function(x,y){
    for(let i=0; i< x.length; i++){
    if(y==x[i]){
        r++;
    }
    if(i==x.length-1){
        console.log('se encontraron '+r + ' ocurrencias del numero '+y)
    }
    }
    r=0;
}

comparar(arreglo, 3);
comparar(arreglo, 2)