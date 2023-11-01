import styles from "./Perfil.module.css";

const Perfil = ({ nomeDoUsuário }) => {
  return (
    <header className={styles.header}>
      <img
        className={styles.avatar}
        src={`https://github.com/${nomeDoUsuário}.png`}
        alt=""
      />
      <h1 className={styles.name}>{nomeDoUsuário}</h1>
    </header>
  );
};

export default Perfil;
