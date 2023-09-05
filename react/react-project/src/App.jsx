function App() {
  const nome = "joao";

  function retornaNome() {
    return nome;
  }

  return (
    <>
      <h1>Teste</h1>
      <h2>Subtitulo</h2>
      <h3>Ola, {retornaNome()}</h3>
    </>
  );
}

export default App;
