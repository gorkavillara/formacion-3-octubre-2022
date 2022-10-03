import PropTypes from "prop-types";
import React, { Component } from "react";

export default class ComponenteClase extends Component {
  state = {
    contador: 10,
  };
  render() {
    const { nombre, edad } = this.props;
    // let contador = 0
    return (
      <>
        <span>
          Hola {nombre}, tu edad es {edad}
        </span>
        <br />
        <span>El valor del contador es {this.state.contador}</span>
        <br />
        <button
          onClick={() =>
            this.setState({ ...this.state, contador: this.state.contador - 1 })
          }
        >
          Decrementar
        </button>
        <button
          onClick={() =>
            this.setState({ ...this.state, contador: this.state.contador + 1 })
          }
        >Incrementar</button>
        <button onClick={() => console.log(this.state.contador)}>
          Ver contador
        </button>
        {/* {children} */}
      </>
    );
  }
}

ComponenteClase.propTypes = {
  nombre: PropTypes.string.isRequired,
  edad: PropTypes.number,
};
