import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formIsVisible, setFormIsVisible] = useState(true);

  return (
    <>
      <Perfil nome="Joao Victtor" endereco="https://github.com/Carvs10.png" />
      <ReposList />

      {/* {{formIsVisible && <Formulario />}

      <button onClick={() => setFormIsVisible(!formIsVisible)} type="button">
        toggle form
      </button>} */}
    </>
  );
}

export default App;
