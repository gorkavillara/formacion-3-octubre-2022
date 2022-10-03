import PropTypes from "prop-types";
import React, { Component } from "react";

export default class ComponenteClase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 10,
    };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    alert("Click en Clases")
  }
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
        <button onClick={this.handleClick}>
          Haz click
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
