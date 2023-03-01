function ler(text){
    tipo = typeof text
    if(tipo == "number"){
        return -text;
    }
    else if(tipo === "boolean"){
        return !text;
    }
    else{
        alert("Booleano ou número esperados, mas o parâmetro é do tipo String");
        return text;
    }
}
text = prompt("Insira o que você quiser! ");
text = ler(text);
alert(text);
