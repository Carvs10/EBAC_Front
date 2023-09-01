"use strict";
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransaferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += valor - this.taxaTransaferencia;
        return true;
    }
}
