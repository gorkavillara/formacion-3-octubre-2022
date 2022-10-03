import React, { useState } from "react";
import "./App.css";
import {
  ElementoTitulo,
  ComponenteTitulo,
} from "./components/ComponenteElemento";
import ComponenteClase from "./components/ComponenteClase";
import ComponenteFuncional from "./components/ComponenteFuncional";
import ComponenteCicloDeVida from "./components/ComponenteCicloDeVida";
import ComponenteFuncionalCicloDeVida from "./components/ComponenteFuncionalCicloDeVida";
import ComponenteForm from "./components/ComponenteForm";

function App() {
  const [renderiza, setRenderiza] = useState(true)
  return (
    <>
      {/* <div>Hola Mundo</div> */}
      <div>
        <button onClick={() => setRenderiza(prev => !prev)}>Cambia Renderizado</button>
        {/* {ElementoTitulo}
        <ComponenteTitulo nombre="Gorka">
          <p>Esto es un párrafo</p>
        </ComponenteTitulo> */}
        {/* <ComponenteClase nombre="Benjami" edad={3}>
          <div>
            <h3>Este es el children</h3>
          </div>
        </ComponenteClase> */}
        {/* <ComponenteFuncional nombre="Gil" edad={32}>
          <div>
            <h3>Este es el children</h3>
          </div>
        </ComponenteFuncional> */}
        {/* {renderiza ? <ComponenteCicloDeVida /> : null} */}
        <ComponenteFuncionalCicloDeVida titulo="Componente Funcional" toggleInicial />
        <ComponenteForm />
      </div>
    </>
  );
}

export default App;
