function calculaArea(base: number, altura: number): number {
  return base * altura;
}

const areaCalc = (base: number, altura: number): number => base * altura;

function sum(...numbers: number[]): void {
  // numbers.reduce()
  console.log(numbers);
}

function teste(): string | number {
  if (10 > 5) {
    return "Dez eh maior que cinco";
  } else {
    return 5;
  }
}
