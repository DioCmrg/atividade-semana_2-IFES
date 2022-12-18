const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
if ((idade >= 65) || (tempo >= 30) || (idade = 60 && tempo >= 25)) {
  console.log("Você pode se aposentar!");
  // Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)
  
  if (tempo <= 20) {
    var novo_salario = salario * 0.6;

  } else {
    var novo_salario = salario * 0.8;
  }
  // console.log(novo_salario);

  // Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)
  if (novo_salario < 1212.00) {
    novo_salario = 1212.00
  } if (novo_salario > 7087.22) {
    novo_salario = 7087.22

  }
  console.log("Seu novo salário será: " + novo_salario);

} else {
  console.log("Você não pode se aposentar");
  console.log(novo_salario);
};