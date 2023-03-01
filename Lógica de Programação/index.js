function myfunction(nome){
    alert("Olá, " + nome + "!");
    console.log("Olá, " + nome + "!");
}

function myage(idade){
    var dias = idade * 365;
    return dias;
}

function trabalho(horas,salario_horas){
    horas_trabalhadas = horas * salario_horas;
    return horas_trabalhadas;
}

function ano(mes){
    switch (mes){   
        
        case '12':
            alert("Dezembro");
            break;

        case '11':
            alert("Novembro");
            break;

        case '10':
            alert("Outubro");
            break;

        case '9':
            alert("Setembro");
            break;

        case '8':
            alert("Agosto");
             break;
    
        case '7':
            alert("Julho");
            break;

        case '6':
            alert("Junho");
            break;
        
        case '5':
            alert("Maio");
            break;

        case '4':
            alert("Abril");
            break;

        case '3':
            alert("Março");
            break;

        case '2':
            alert("Fevereiro");
            break;

        case '1':
            alert("Janeiro");
            break;

        default:
            alert("Não Permitido.")

    }
}

function inicio(){
    var nome = prompt("Insira o seu nome: ");
    myfunction(nome);


    var idade = prompt("Insira sua idade: ")
    idade = myage(idade);
    alert(`Sua idade em dias é ${idade} dias`);
    console.log(`Sua idade em dias é ${idade} dias`);


    horas = prompt("Quantas horas o funcionario trabalhou nesse mes? ");
    salario_horas = prompt("Quanto o funcionario recebe por hora? ");
    horas_trabalhadas = trabalho(horas,salario_horas);
    alert("Salario igual a R$ " + horas_trabalhadas)
    console.log("Salario igual a R$ " + horas_trabalhadas);

    mes = prompt("Mes?");
    ano(mes);
}

inicio();