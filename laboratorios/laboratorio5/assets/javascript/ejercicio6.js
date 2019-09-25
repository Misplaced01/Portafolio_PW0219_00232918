console.log("---------------------------------------Ejercico 6----------------------------------------------")

var ascendente = function(x){
    for(let i=0; i<x.length; i++){
        menor= x[i];
        for(let j=0; j<x.length; j++){
            if(menor < x[j]){
                menor = x[j];
                var aux = x[i];
                x[i] = x[j];
                x[j] = aux;
            }
        }
    }
    console.log(x)
}
var arreglo = [-43, -6, 6, 18, 90, 56, 70, 13, 30, 300, 80, 80];

ascendente(arreglo);