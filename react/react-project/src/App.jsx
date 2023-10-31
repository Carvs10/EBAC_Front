import { useState } from "react";

import Perfil from "./components/Perfil";

import ReposList from "./components/ReposList";

function App() {
  const [userName, setUserName] = useState("");
  return (
    <>
      <input type="text" onBlur={(e) => setUserName(e.target.value)} />

      {userName.length > 4 && (
        <>
          <Perfil username={userName} />
          <ReposList username={userName} />
        </>
      )}
    </>
  );
}

export default App;
