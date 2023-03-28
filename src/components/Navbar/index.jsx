import {  NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import logo from "/public/logo.png"

const Navbar = ({ icono }) => {
  const activeStyle = {
    color: "red",
  };

  return (
    <nav className={styles.container}>
      <NavLink to="/">
        <img className={styles.logo} src={logo} alt="esta es el logo de mi sitio" />
      </NavLink>

      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Inicio
      </NavLink>
      <NavLink
        to="/category/all"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Productos
      </NavLink>

      <NavLink
      to="/category/men's clothing"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Men cloting
      </NavLink>

      <NavLink
      to="/category/jewelery"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Jewelery
      </NavLink>

      <NavLink
      to="/category/electronics"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Electronics
      </NavLink>

      <NavLink
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
