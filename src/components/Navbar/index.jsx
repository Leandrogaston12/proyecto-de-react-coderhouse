import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import logo from "/public/logo.png";

const Navbar = ({ icono }) => {
  const activeStyle = {
    color: "red",
  };

  return (
    <nav className={styles.container}>
      <NavLink to="/">
        <img
          className={styles.logo}
          src={logo}
          alt="esta es el logo de mi sitio"
        />
      </NavLink>

      <NavLink
        className={styles.colorNav}
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Inicio
      </NavLink>

      <NavLink
        className={styles.colorNav}
        to="/category/ventilador de pie"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Ventilador de pie
      </NavLink>

      <NavLink
        className={styles.colorNav}
        to="/category/ventilador pared"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        ventilador de pared
      </NavLink>

      <NavLink
        className={styles.colorNav}
        to="/category/ventilador techo"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Ventilador techo
      </NavLink>

      <NavLink
      className={styles.colorNav}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      ><img src={icono} alt="" width="30" height="30" /></NavLink>
        
    </nav>
  );
};

export default Navbar;
