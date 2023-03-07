//um grupo de professores está tendo dificuldade em registrar as notas dos alunos e realizar os cálculos de aprovação. 
//Além disso precisam informar pessoalmente, a cada aluno essas aprovações, resultando em muita desorganização.
//Sendo assim, precisam encontrar uma forma de realizar essa gestão com eficiência
//*condição para aprovação de um aluno a média de todas a notas deve ser 7


function medias(nota1,nota2,nota3,nota4){
    media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
}

function alunoMedia(aluno, media){
    aluno_media = [aluno, media]
    return aluno_media;
}

function inicio(){
    aluno = prompt("Insira o nome do aluno:");
    nota1 = parseInt(prompt("Insira a primeira nota:"));
    nota2 = parseInt(prompt("Insira a segunda nota:"));
    nota3 = parseInt(prompt("Insira a terceira nota:"));
    nota4 = parseInt(prompt("Insira a quarta nota:"));
    media_nota = medias(nota1,nota2,nota3,nota4);
    alune = alunoMedia(aluno, media);
    console.log(alune)
}

inicio();