import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Formulario = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName("");
    setLastName("");
    setDni("");
    setEmail("");
    alert(
      `Un nombre fue enviado: ${name}, un apellido: ${lastName}, un dni: ${dni}, un email: ${email}`
    );
  };

  return (
    <Form onSubmit={handleChange} className="mx-3 mt-3 py-3">
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su nombre"
          value={name}
          name={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="apellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su apellido"
          value={lastName}
          name={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="dni">
        <Form.Label>
          DNI <p className="small p-0 m-0">(dni sin puntos)</p>
        </Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese su dni"
          value={dni}
          name={dni}
          onChange={(e) => setDni(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Correo eletrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={email}
          name={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Button variant="dark" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;
