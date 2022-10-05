import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup"

const validationSchema = object({
    name: string().required("Es necesario que introduzcas tu nombre").min(3, "El nombre de usuario tiene que tener un mínimo de 3 caracteres"),
    email: string().required(),
    password: string().required()
})

const FormikForm = () => {
  return (
    <div>
      <h3>Formik Form</h3>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        // validate={(values) => {
        //   const errors = {};

        //   // Toda la lógica
        //   if (values.name === "") {
        //     errors.name = "El usuario no puede estar vacío";
        //   }
        //   if (values.name.length < 4) {
        //     errors.name = "La longitud del nombre de usuario tiene que ser superior a 3 caractere"
        //   }

        //   return errors;
        // }}
        validationSchema={validationSchema}
      >
        {(info) => (
          <Form>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit">{info.isSubmitting ? "Enviando..." : "Enviar"}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
