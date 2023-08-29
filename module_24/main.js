class Pessoa {
  constructor(nome) {
    this.nome = nome;
    this.dizOi = function () {
      console.log(this.nome + " says Herou!!");
    };
  }
}

class Funcionario extends Pessoa {
  constructor(nome, cargo, salario) {
    super(nome);

    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;
    this.getSalario = function () {
      return _salario;
    };

    this.setSalario = function (valor) {
      if (typeof valor === "number") _salario = valor;
    };

    this.dizCargo = function () {
      console.log(this.cargo);
    };

    this.aumento = function () {
      const novoSalario = _salario * 1.1;
      _salario = novoSalario;
    };
  }
}

class Estagiario extends Funcionario {
  constructor(nome) {
    super(nome, "Estagiario", 2000);
    // Funcionario.call(this, nome, "Estagiario", 2000);

    this.aumento = function () {
      const novoSalario = this.getSalario() * 1.07;
      this.setSalario(novoSalario);
    };
  }
}

class Administrador extends Funcionario {
  constructor(nome) {
    super(nome, "Administrador", 7000);
    // Funcionario.call(this, nome, "Administrador", 7000);

    this.aumento = function () {
      const novoSalario = this.getSalario() * 1.2;
    };
  }
}

class Gerente extends Funcionario {
  constructor(nome) {
    super(nome, "Gerente", 10000);
    // Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function () {
      const novoSalario = this.getSalario() * 1.15;
      this.setSalario(novoSalario);
    };
  }
}

const funcionaria1 = new Funcionario("Maria", "dev front-end", 5000);
const funcionario2 = new Estagiario("Pedro");
const funcionario3 = new Gerente("Paula");
const funcionario4 = new Administrador("Marcos");

funcionaria1.aumento();
console.log(funcionaria1.getSalario());
console.log(funcionaria1.nome);

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());

funcionario4.aumento();
console.log(funcionario4.getSalario());
