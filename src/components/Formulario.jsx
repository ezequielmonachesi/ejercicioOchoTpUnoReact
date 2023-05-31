import { Button, Form } from "react-bootstrap";

const Formulario = () => {
  return (
    <Form className="mx-3 mt-3 py-3">
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="apellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su apellido" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="dni">
        <Form.Label>DNI <p className="small p-0 m-0">(dni sin puntos)</p></Form.Label>
        <Form.Control type="number" placeholder="Ingrese su dni" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Correo eletrónico</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Button variant='dark' type="submit">Enviar</Button>
    </Form>
  );
};

export default Formulario;
