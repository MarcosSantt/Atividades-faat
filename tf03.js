const aluno = {
  nome: "Marcos",
  idade: 25,
  curso: "ADS",
  notas: [8, 7, 9]
};

console.log("OBJETO:");
console.log(aluno);

// for...in
console.log("\nPROPRIEDADES:");
for (let chave in aluno) {
  console.log(chave, aluno[chave]);
}

// for...of
console.log("\nNOTAS:");
for (let nota of aluno.notas) {
  console.log(nota);
}

// comparação
const aluno2 = aluno;
console.log("\nComparação:");
console.log(aluno === aluno2);

// cópia por referência
const copia = aluno;
copia.nome = "João";
console.log("\nCópia por referência:");
console.log(aluno.nome);

// cópia com spread
const copia2 = { ...aluno };
copia2.nome = "Maria";
console.log("\nSpread:");
console.log(aluno.nome);
console.log(copia2.nome);

// JSON
console.log("\nJSON:");
console.log(JSON.stringify(aluno, null, 2));