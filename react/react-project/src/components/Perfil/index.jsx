import "./perfil.css";

const Perfil = ({ nome, endereco }) => {
  return (
    <div>
      <img className="perfil-avatar" src={endereco} alt="" />
      <h3 className="perfil-title">{nome}</h3>
    </div>
  );
};

export default Perfil;
