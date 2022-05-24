import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { useFormik } from "formik";
import "../App.css";

export const Contact = () => {
  const form = useRef();
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      emailjs
        .sendForm(
          "service_3clstcg",
          "template_c5aq1ef",
          form.current,
          "ApFdozXHRIVg-XmXU"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Debe tener 15 caracteres o menos.")
        .required("Éste campo es requerido."),
      email: Yup.string()
        .email("El correo no tiene un formato válido.")
        .required("Éste campo es requerido."),
      subject: Yup.string()
        .max(20, "Debe tener 20 caracteres o menos.")
        .required("Éste campo es requerido."),
      message: Yup.string()
        .max(140, "Debe tener 140 caracteres o menos.")
        .required("Éste campo es requerido."),
    }),
  });

  return (
    <div>
      <div className="callToAction">
        <h1>¡Pongámonos en contacto!</h1>
      </div>

      <div className="animate__animated animate__backInDown">
        <div className="form">
          <div className="form-control">
            <form ref={form} onSubmit={handleSubmit}>
              <label htmlFor="name">Nombre</label>
              <input type="text" {...getFieldProps("name")} />
              {touched.name && errors.name && <span>{errors.name}</span>}

              <label htmlFor="email">Email</label>
              <input type="email" {...getFieldProps("email")} />
              {touched.email && errors.email && <span>{errors.email}</span>}

              <label htmlFor="subject">Asunto</label>
              <input type="text" {...getFieldProps("subject")} />
              {touched.subject && errors.subject && (
                <span>{errors.subject}</span>
              )}

              <label>Mensaje</label>
              <textarea {...getFieldProps("message")} />
              {touched.message && errors.message && (
                <span>{errors.message}</span>
              )}
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
