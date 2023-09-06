import { useState, useEffect } from "react";

const Formulario = () => {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState("");

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("component finished");
    };
  }, []);

  useEffect(() => {
    console.log("name has been changed");
  }, [nome]);

  useEffect(() => {
    console.log("grade has been changed to ", +materiaA);
  }, [materiaA]);

  const changeName = (event) => {
    setNome((estadoAnterior) => {
      return event.target.value;
    });
  };

  const renderResult = () => {
    const sum = materiaA + materiaB + materiaC;
    const med = sum / 3;

    if (med >= 7) {
      return <p>Ola {nome}, voce foi aprovado!</p>;
    } else {
      return <p>{nome}, infelizmente voce nao foi aprovado</p>;
    }
  };

  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <input type="text" placeholder="Seu nome" onChange={changeName} />
      <input
        type="number"
        placeholder="Nota matéria A"
        onChange={(event) => setMateriaA(parseInt(event.target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria B"
        onChange={(event) => setMateriaB(parseInt(event.target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria C"
        onChange={(event) => setMateriaC(parseInt(event.target.value))}
      />
      {renderResult()}
    </form>
  );
};

export default Formulario;
