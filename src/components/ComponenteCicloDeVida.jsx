import React, { Component } from "react";

export default class ComponenteCicloDeVida extends Component {
  state = {
    toggle: false,
  };
  componentDidMount() {
    // Ejecutamos lógica una vez el componente esté montado por primera vez
    console.log("Componente recién montado");
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidUpdate() {
    console.log("Componente actualizado")
  }
  componentWillUnmount() {
    console.log("Componente va a desmontar")
  }
  render() {
    return (
      <>
        <div>ComponenteCicloDeVida</div>
        <button
          onClick={() => this.setState((prev) => ({ ...prev, toggle: !prev.toggle }))}
        >
          {this.state.toggle ? "On" : "Off"}
        </button>
      </>
    );
  }
}
