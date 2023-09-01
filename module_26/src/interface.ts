class Conta {
  numeroConta: number;
  saldo: number = 0;

  constructor(numeroDaConta: number) {
    this.numeroConta = numeroDaConta;
  }
}

class ContaSalario extends Conta {
  depositar(valor: number) {
    this.saldo += valor;
  }
}

interface ITransacional {
  transferir: (valor: number, destinatario: Conta) => boolean;
  taxaTransaferencia: number;
}

class ContaCorrente extends Conta implements ITransacional {
  transferir(valor: number, destinatario: Conta) {
    destinatario.saldo += valor - this.taxaTransaferencia;
    return true;
  }
  taxaTransaferencia: number = 0;
}
