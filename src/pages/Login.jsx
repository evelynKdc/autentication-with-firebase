import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export const Login = () => {
  const [success, setSucces] = useState(false);

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: Yup.object({
      user: Yup.string()
        .min(4, "El usuario debe contener al menos 4 caracteres")
        .max(15, "El usuario como maximo debe contener 15 caracteres")
        .required("Debe ingresar un usuario"),
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
      <p>Inicio de sesion</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Usuario</label>
        <input
          type="text"
          name="user"
          onChange={handleChange}
          value={values.user}
        />
        {errors.user && <span>{errors.user}</span>}
    
        <label htmlFor="passwordr">Contraseña</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        {errors.password && <span>{errors.password}</span>}

        <button type="submit">Iniciar sesion</button>
      </form>
      {success && <div>Inicio de sesion exitoso</div>}

      <Link to="/registro">Aun no tengo una cuenta</Link>
    </div>
  );
};
