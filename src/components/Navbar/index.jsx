import styles from "./navbar.module.scss";

const Navbar = ({ icono }) => {
  return (
    <div className={styles.container}>
      <a href="#">Inicio</a>
      <a href="#">Nosotros</a>
      <a href="#">Contacto</a>

      <p>
        <img src={icono} alt="" width="30" height="30" />0
      </p>
    </div>
  );
};

export default Navbar;
