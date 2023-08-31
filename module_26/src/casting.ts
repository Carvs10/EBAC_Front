namespace casting {
  let age: any = 35;
  (age as number).toFixed();
  (age as string).length;
  age as string[];
  let nome: string = 35 as unknown as string;
}
