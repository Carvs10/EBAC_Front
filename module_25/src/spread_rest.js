function somar() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(somar(10, 20, 30, 40, 50));

// rest operator
function sumWithRest(...numbers) {
  const sum = numbers.reduce((total, currentItem) => {
    total += currentItem;
    return total;
  }, 0);
  return sum;
}

console.log(sumWithRest(10, 20, 30, 40, 50));

// spread

const numeros = [10, 20, 30, 40, 50];

console.log(...numeros);

const timesDeSP = ["sao paulo", "palmeiras", "bragantino", "santos"];
const timesDoRJ = ["vasco", "flamengo", "fluminense", "botafogo"];

// times = timesDeSP.concat(timesDoRJ)
const times = [...timesDeSP, ...timesDoRJ];

const carroDaJulia = {
  modelo: "gol",
  marca: "vw",
  motor: 1.6,
};

const carroDaAna = {
  ...carroDaJulia,
  motor: 1.8,
};

// desestruturação
//alias
const { motor: motorAna } = carroDaAna;
const { motor: motorJulia } = carroDaJulia;

const [item1, item2, item3, ...outrosTimes] = times;
