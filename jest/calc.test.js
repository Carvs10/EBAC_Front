const calc = require("./calc");

describe("Teste para a calculadora", () => {
  test("somar 2 e 2 deve resultar em 4", () => {
    const sum = calc.add(2, 2);

    expect(sum).toBe(4);
  });

  test("multiplicar 3 com 3 deve resultar em 9", () => {
    const times = calc.times(3, 3);

    expect(times).toBe(9);
  });
});
