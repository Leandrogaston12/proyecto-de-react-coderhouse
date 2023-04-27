import React, { useState } from 'react';
import styles from "./checkout.module.scss"

const CheckoutForm = () => {
  const [formValues, setFormValues] = useState({
    Nombre: '',
    Apellido: '',
    email: '',
    repeatEmail: '',
    Telefono: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="firstName">Nombre:</label>
      <input type="text" id="firstName" name="Nombre" value={formValues.Nombre} onChange={handleChange} required />

      <label htmlFor="lastName">Apellido:</label>
      <input type="text" id="lastName" name="Apellido" value={formValues.Apellido} onChange={handleChange} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} required />

      <label htmlFor="repeatEmail">Repetir Email:</label>
      <input type="email" id="repeatEmail" name="repeatEmail" value={formValues.repeatEmail} onChange={handleChange} required />

      <label htmlFor="phone">Teléfono:</label>
      <input type="tel" id="phone" name="Telefono" value={formValues.Telefono} onChange={handleChange} required />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default CheckoutForm;



