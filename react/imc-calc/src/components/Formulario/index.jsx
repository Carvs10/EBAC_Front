import { useState } from "react";
import styles from "./Formulario.module.css";
const Formulario = () => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  const renderIMC = () => {
    const imc = peso / altura ** 2;
    console.log(imc);

    if (peso === 0 && altura === 0) {
      return <p>Por favor, insira seus dados para realizar o calculo</p>;
    }
    if (imc < 18.5) {
      return (
        <>
          <p>Seu IMC é de {imc.toFixed(2)}</p>
          <p>Você esta abaixo do peso</p>
        </>
      );
    } else if (18.6 <= imc && imc <= 24.9) {
      return (
        <>
          <p>Seu IMC é de {imc.toFixed(2)}</p>
          <p>Parabéns! Você esta no peso ideal!</p>
        </>
      );
    } else if (25 <= imc && imc <= 29.9) {
      return (
        <>
          <p>Seu IMC é de {imc.toFixed(2)}</p>
          <p>Atenção! Você esta levemente acima do peso</p>
        </>
      );
    } else if (30 <= imc && imc <= 34.9) {
      return (
        <>
          <p>Seu IMC é de {imc.toFixed(2)}</p>
          <p>Cuidado! Você esta com Obesidade de grau I</p>
        </>
      );
    } else if (35 <= imc && imc <= 39.9) {
      return (
        <>
          <p>Seu IMC é de {imc.toFixed(2)}</p>
          <p>Cuidado! Você esta com Obesidade de grau II!</p>
        </>
      );
    } else {
      return (
        <>
          <p>Seu IMC é de {imc.toFixed(2)}</p>
          <p>Cuidado! Você esta com Obesidade de grau III!</p>
        </>
      );
    }
  };

  return (
    <form className={styles.container}>
      <h2>IMC Calculator</h2>
      <input
        className={styles.data}
        type="number"
        placeholder="Sua altura: (m)"
        onChange={(e) => setAltura(parseFloat(e.target.value))}
      />
      <input
        className={styles.data}
        type="number"
        placeholder="Seu peso: (Kg)"
        onChange={(e) => setPeso(parseFloat(e.target.value))}
      />

      {renderIMC()}
    </form>
  );
};

export default Formulario;
