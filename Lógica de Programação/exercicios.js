function complex(numero,minimo,maximo,inclusivo = false){
    if(inclusivo == true){
        return numero >= minimo && numero <= maximo;
    }
    else{
        return numero >= minimo && numero <= maximo;
    }
}

texto = complex(49,50,100);
console.log(texto);
