import styles from "./Perfil.module.css";

// eslint-disable-next-line react/prop-types
const Perfil = ({ username }) => {
  return (
    <header className={styles.header}>
      <img
        className={styles.avatar}
        src={`https://github.com./${username}.png`}
        alt=""
      />
      <h1 className={styles.name}>{username}</h1>
    </header>
  );
};

export default Perfil;
