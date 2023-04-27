import React, { useState } from 'react';
import styles from "./checkout.module.scss"
import db from "../../../db/firebase-config.js";
import { collection, addDoc  } from "firebase/firestore";
import Swal from 'sweetalert2'


const CheckoutForm = () => {
  const [formValues, setFormValues] = useState({
    Nombre: "",
    Apellido: "",
    email: "",
    repeatEmail: "",
    Telefono: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Crear un nuevo documento en la colección "compras" 
      const docRef = await addDoc(collection(db,"compras"), {
        nombre: formValues.Nombre,
        apellido: formValues.Apellido,
        email: formValues.email,
        telefono: formValues.Telefono,
        fecha: new Date(),
      });

      // Obtener el ID del documento generado automáticamente
      const idCompra = docRef.id;

      // Indicar que la compra ha finalizado
      Swal.fire({
        icon: 'success',
        title: '¡La compra ha finalizado!',
        text: `La compra con ID ${idCompra} ha finalizado.`
      })

    } catch (error) {
      console.error("Error al guardar la compra:", error);
      alert("Hubo un error al guardar la compra. Intente de nuevo más tarde.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Nombre">Nombre:</label>
      <input type="text" id="Nombre" name="Nombre" value={formValues.Nombre} onChange={handleChange} required />

      <label htmlFor="Apellido">Apellido:</label>
      <input type="text" id="Apellido" name="Apellido" value={formValues.Apellido} onChange={handleChange} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} required />

      <label htmlFor="Telefono">Teléfono:</label>
      <input type="tel" id="Telefono" name="Telefono" value={formValues.Telefono} onChange={handleChange} required />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default CheckoutForm;