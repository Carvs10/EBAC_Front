class Pokemon {
  #hp = 100;

  constructor(pokemonName, pokemonType) {
    this.nome = pokemonName;
    this.type = pokemonType;
  }

  attack(attackName) {
    console.log(`${this.nome} atacou com ${attackName}`);
  }

  wasHit() {
    this.#hp -= 10;
  }
}

const pikachu = new Pokemon("pikachu", "eletrico");

class Pikachu extends Pokemon {
  constructor() {
    super("Pikachu", "elétrico");
  }
  attack() {
    console.log(`${this.nome} atacou com choque do trovao`);
  }
}
