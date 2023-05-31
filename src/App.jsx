import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Container className="main">
        <section className="border mt-5 shadow rounded">
          <div className="bg-dark text-light rounded-top">
            <h1 className="text-center">Formulario</h1>
          </div>
          <Formulario></Formulario>
        </section>
      </Container>
      <footer className="bg-dark py-5 text-light text-center">
        <p>&copy; Todos los derechos reservaods.</p>
      </footer>
    </>
  );
}

export default App;
