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
        to="/category/men's clothing"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Men cloting
      </NavLink>

      <NavLink
        className={styles.colorNav}
        to="/category/jewelery"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Jewelery
      </NavLink>

      <NavLink
        className={styles.colorNav}
        to="/category/electronics"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Electronics
      </NavLink>

      <NavLink
        className={styles.colorNav}
        to="/category/women's clothing"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Women's clothing
      </NavLink>

      <p>
        <img src={icono} alt="" width="30" height="30" />0
      </p>
    </nav>
  );
};

export default Navbar;
