import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import validarDni from "./validarDni";

const Formulario = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [formularios, setFormularios] = useState([{}]);

  const onSubmit = (data) => {
    console.log(data);
    alert('Datos Enviados');
    setFormularios([...formularios, data]);
    console.log(formularios)
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mx-3 mt-3 py-3">
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          {...register("nombre", {
            required: true,
            maxLength: 20,
            minLength: 3,
          })}
          placeholder="Ingrese su nombre"
        />
        {errors.nombre?.type === "required" && (
          <p className="text-danger small">* El campo es requerido.</p>
        )}
        {errors.nombre?.type === "minLength" && (
          <p className="text-danger small">
            * Debe tener más de 3 caracteres.{" "}
          </p>
        )}
        {errors.nombre?.type === "maxLength" && (
          <p className="text-danger small">
            * Debe tener hasta 20 caracteres.{" "}
          </p>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="apellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          {...register("apellido", {
            required: true,
            maxLength: 25,
            minLength: 3,
          })}
          placeholder="Ingrese su apellido"
        />
        {errors.apellido?.type === "required" && (
          <p className="text-danger small">* El campo es requerido.</p>
        )}
        {errors.apellido?.type === "minLength" && (
          <p className="text-danger small">* Debe tener más de 3 caracteres.</p>
        )}
        {errors.apellido?.type === "maxLength" && (
          <p className="text-danger small">* Debe tener hasta 25 caracteres.</p>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="dni">
        <Form.Label>
          DNI <p className="small p-0 m-0">(dni sin puntos)</p>
        </Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese su dni"
          {...register("dni",{
            validate: validarDni
          })}
        />
        {errors.dni && <p className="text-danger small">* El dni debe estar entre 20.000 y 80.000.000</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Correo eletrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          {...register("email", {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            required: true
          })}
        />
        {errors.email?.type === "pattern" && <p className="text-danger small">* Ingrese un mail valido.</p>}
        {errors.email?.type === "required" && <p className="text-danger small">* El campo es requerido.</p>}
      </Form.Group>
      <Button variant="dark" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;
