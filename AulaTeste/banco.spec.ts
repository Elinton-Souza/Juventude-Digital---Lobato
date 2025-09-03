import { ContaCorrente } from "./banco";

describe("Conta Corrente", () => {
  it("Deve depositar e atualizar o saldo", () => {
    const conta = new ContaCorrente("Maria", 100, 200);
    conta.depositar(50);
    expect(conta.consultarSaldo()).toBe(150);
  });
  it("Deve sacar usando Cheque Especial", () => {
    const conta = new ContaCorrente("Maria", 100, 200);
    conta.sacar(250);
    expect(conta.consultarSaldo()).toBe(-150);
  });
  it("Deve lançar erro ao sacar acima do limite", () => {
    const conta = new ContaCorrente("Maria", 100, 200);
    expect(() => conta.sacar(500)).toThrow();
  });
  it("Deve recusar depósito negativo na conta corrente", () => {
    const conta = new ContaCorrente("Maria", 100, 200);
    const deposito = conta.depositar(-50);
    expect(deposito).toBe("O valor do depósito deve ser positivo.");
  });
});
