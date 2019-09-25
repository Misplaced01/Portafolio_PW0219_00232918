console.log("-------------------------------------Ejercicio 7--------------------------------------------")

var fibona = function(n){
    let n1=0;
    let n2=1;
    let aux=0;
    let arrFibona= [];
    arrFibona.push(n1);
    arrFibona.push(n2);
    for(let i=0; i<n-2; i++){
        aux= n1+n2;
        n1=n2;
        n2= aux;
        arrFibona.push(n2);
    }
    console.log(arrFibona);
}

fibona(10);