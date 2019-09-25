console.log("-------------------------------------Ejercicio 4-----------------------------------------")

function getRandomInt(max) {//Funcion de get random que lo aproxima para que sea int, sacado de MDN.
    return Math.floor(Math.random() * Math.floor(max));
  }

var adivinar = function(){
    var arr= [];
    for(let i=0; i<20;i++){
        let num= getRandomInt(20);//consigue 20 numeros (del 0 al 20) random, aproximados
        arr.push(num);
    }
    var adivine = 5;

    for(var i=0; i<20; i++){
        if(arr[i] == adivine){
            console.log('Ganaste!, lo adivinaste!')
            break;}
            else if(i==19){
                console.log("Perdiste, no lo adivinaste, intenta de nuevo")
            }
            
    }
console.log(adivine);
console.log(arr);
adivine=0;
arr = [];
}
adivinar();