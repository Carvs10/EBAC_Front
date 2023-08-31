// Promises

const promiseFunction = new Promise((resolve, reject) => {
  try {
    let executions = 0;
    for (let i = 0; i < 1000000000; i++) {
      executions++;
    }
    resolve(executions);
  } catch (e) {
    reject("Erro na iteração dos numeros");
  }
});

console.log("inicio");
promiseFunction
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("fim");
const paramsPromise = (login, senha) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Logado com usuário ${login}`);
    }, 3000);
  });
};

async function mainExecution() {
  console.log("inicio");
  // await promiseFunction
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  paramsPromise("gian@gmail.com", 123456).then((result) => {
    console.log(result);
  });
  try {
    const resp = await promiseFunction;
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
  console.log("fim");
}
