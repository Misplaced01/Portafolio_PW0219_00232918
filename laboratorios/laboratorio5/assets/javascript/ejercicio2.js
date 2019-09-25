console.log("------------------------------------Ejercicio 2--------------------------------------")
var r=0
var promedio = function(x){
    for(let i=0; i< x.length; i++){
        r = r +  x[i];
        if(i == x.length-1){
            console.log('Suma: '+r)
            let promedio= r/x.length;
            console.log('Promedio: '+promedio)
        }
    }
    r=0;
}
var num = [10, 20, 48, 2, 100, 78, 30, 9, 4, 7];
promedio(num);