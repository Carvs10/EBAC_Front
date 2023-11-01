import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formIsVisible, setFormIsVisible] = useState(true);

  return (
    <>
      <Perfil nomeDoUsuário="Carvs10" />
      <ReposList />

      {/* {{formIsVisible && <Formulario />}

      <button onClick={() => setFormIsVisible(!formIsVisible)} type="button">
        toggle form
      </button>} */}
    </>
  );
}

export default App;
