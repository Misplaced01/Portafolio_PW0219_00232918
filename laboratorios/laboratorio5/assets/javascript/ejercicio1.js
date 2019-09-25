var tipo = function(x){

    var tiposArr = []//creando un arreglo dentro de la funcion
    tiposArr.push(typeof x[0])//pusheando al arreglo
    tiposArr.push(1)//pusheando 1 al arreglo
    for(let i=1; i< x.length; i++){
        if(!tiposArr.includes(typeof x[i])){
            tiposArr.push(typeof x[i])
            tiposArr.push(1)
        }else{
            tiposArr[tiposArr.indexOf(typeof x[i])+1] = tiposArr[tiposArr.indexOf(typeof x[i])+1] +1; 
            //toma cada index del arreglo y saca el tipo, luego hace la suma al contador.
        }
    }
    console.log(tiposArr)
}

var x = [1, 'correr', true, false, x, ['eduardo', 100, 'tenemos'], tipo];

tipo(x);