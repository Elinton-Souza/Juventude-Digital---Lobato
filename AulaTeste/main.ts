import { Conta, ContaCorrente } from "./banco";

const prompt = require("prompt-sync")();
let contaCorrente: Conta | null = null;

function main() {
  while (true) {
    console.log("1. Criar Conta Corrente");
    console.log("2. Depositar");
    console.log("3. Sacar");
    console.log("4. Consultar Saldo");
    let opcao = prompt("Escolha uma opção: ");
    switch (opcao) {
      case "1": {
        const titular = prompt("Titular: ");
        const saldo = +prompt("Saldo Inicial: ");
        const limite = +prompt("Limite Cheque Especial");
        contaCorrente = new ContaCorrente(titular, saldo, limite);
        break;
      }
      case "2": {
        if (!contaCorrente) {
          console.log("Crie uma conta primeiro");
        }
        const valor = +prompt("Valor do Depósito: ");
        const deposito = contaCorrente?.depositar(valor);
        console.log(deposito);
      }
      case "3": {
        return;
      }
    }
  }
}
main();
