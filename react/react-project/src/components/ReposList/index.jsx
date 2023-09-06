import { useEffect, useState } from "react";

const ReposList = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/carvs10/repos")
      .then((response) => response.json())
      .then((resJson) => {
        setTimeout(() => {
          setIsLoading(false);
          setRepos(resJson);
        }, 3000);
      });
  }, []);

  return (
    <>
      {isLoading && <h1>Carregando...</h1>}
      <ul>
        {repos.map((repository) => (
          <li key={repository.id}>
            <b>Nome: </b> {repository.name} <br />
            <b>Linguagem: </b> {repository.language} <br />
            <a target="_blank" rel="noreferrer" href={repository.html_url}>
              Visitar no GitHub
            </a>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReposList;
