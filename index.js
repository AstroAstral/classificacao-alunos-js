function somarNotas(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
  }
  return soma;
}

function calcularMedia(notas) {
  let soma = somarNotas(notas);
  let media = soma / notas.length;
  return media;
}

function classificarAluno(aluno) {
  if (aluno.notas.length === 0) {
    return { status: "SEM_NOTAS", media: null };
  }

  let media = calcularMedia(aluno.notas);

  if (media >= 7) {
    return { status: "APROVADO", media: media };
  } else if (media >= 5) {
    return { status: "RECUPERACAO", media: media };
  } else {
    return { status: "REPROVADO", media: media };
  }
}

function classificarTodos(alunos) {
  let resultados = [];

  for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    let avaliacao = classificarAluno(aluno);

    resultados.push({
      nome: aluno.nome,
      status: avaliacao.status,
      media: avaliacao.media
    });
  }

  return resultados;
}
