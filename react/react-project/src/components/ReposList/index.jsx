import { useEffect, useState } from "react";
import styles from "./ReposList.module.css";
// eslint-disable-next-line react/prop-types
const ReposList = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((resJson) => {
        setTimeout(() => {
          setIsLoading(false);
          setRepos(resJson);
        }, 3000);
      });
  }, [username]);

  return (
    <div className="container">
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <ul className={styles.list}>
          {repos.map((repository) => (
            <li key={repository.id} className={styles.listItem}>
              <div className={styles.itemName}>
                <b>Nome: </b>
                {repository.name}
              </div>
              <div className={styles.itemLanguage}>
                <b>Linguagem: </b>
                {repository.language}
              </div>

              <a
                className={styles.itemLink}
                target="_blank"
                rel="noreferrer"
                href={repository.html_url}
              >
                Visitar no GitHub
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReposList;
