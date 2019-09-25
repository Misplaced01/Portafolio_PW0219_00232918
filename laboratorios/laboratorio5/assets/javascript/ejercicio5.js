function palindroma(palabra){
    var isPalindroma = true;
    var original = palabra.split("");
    //console.log(original);
    var invertido = palabra.split("").reverse();
    //console.log(invertido);
    for(var i=0; i<original.length; i++){
        if(invertido[i] != original[i]){
            console.log("no es palindroma");
            isPalindroma = false;
            break;
        }

    }
    if(isPalindroma == true){
        console.log("Es palindroma")
    }
}

palindroma("ana");