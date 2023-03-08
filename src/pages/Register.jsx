import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export const Register = () => {
  const [success, setSucces] = useState(false);

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      user: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      user: Yup.string()
        .min(4, "El usuario debe contener al menos 4 caracteres")
        .max(15, "El usuario como maximo debe contener 15 caracteres")
        .required("Debe ingresar un usuario"),
      email: Yup.string()
        .email("Ingrese un email valido")
        .required("Debe ingresar un email"),
      password: Yup.string()
        .min(6, "La contraseña debe contener minimo 6 caracteres")
        .required("Debe ingresar una contraseña"),
    }),
    onSubmit: (data) => {
      console.log(data);
      setSucces(true);
      setTimeout(()=>{setSucces(false)},3000)
    },
  });

  return (
    <div>
      <p>Registrate</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Usuario</label>
        <input
          type="text"
          name="user"
          onChange={handleChange}
          value={values.user}
        />
        {errors.user && <span>{errors.user}</span>}
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && <span>{errors.email}</span>}
        <label htmlFor="passwordr">Contraseña</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        {errors.password && <span>{errors.password}</span>}

        <button type="submit">Registrar</button>
      </form>
      {success && <div>Registro exitoso</div>}
      <Link to="/">Tengo una cuenta</Link>
    </div>
  );
};
