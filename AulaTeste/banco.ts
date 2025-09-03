import { error } from "console";

interface IcontaBancaria {
  depositar(valor: number): void;
  sacar(valor: number): void;
  consultarSaldo(): void;
}
export abstract class Conta implements IcontaBancaria {
  protected titular: string;
  protected saldo: number;
  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }
  public depositar(valor: number): string {
    if (valor <= 0) {
      return "O valor do depósito deve ser positivo.";
    }
    this.saldo += valor;
    return `Depósito de R$${valor} realizado, Novo Saldo R$${this.saldo}`;
  }
  public consultarSaldo(): number {
    return this.saldo;
  }
  public abstract sacar(valor: number): void;
}

export class ContaCorrente extends Conta {
  private limiteChequeEspecial: number;
  constructor(titular: string, saldoInicial: number, limite: number = 0) {
    super(titular, saldoInicial);
    this.limiteChequeEspecial = limite;
  }
  public sacar(valor: number) {
    const saldoDisponivel = this.saldo + this.limiteChequeEspecial;
    if (valor <= 0) {
      return "O valor do saque deve ser positivo.";
    }
    if (valor > saldoDisponivel) {
      throw new Error(
        `Saldo insuficiente, Disponível para saque (saldo + limite): R$${saldoDisponivel}`
      );
    }
    this.saldo -= valor;
    return `Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`;
  }
}
