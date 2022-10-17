import React from 'react'
import ReactDOM from 'react-dom'
import { suma } from './controllers'
import App from './App'

// console.log("Hola mundo");
// console.log(`La suma de 2 y 3 es ${suma(2, 3)}`);

/**
 * Obtener el elemento raíz
 * @returns Obtiene el div con id root del index.html
 */
const getRoot = () => document.getElementById('root')

const root = getRoot()

// const element = /*#__PURE__*/ React.createElement(
//   "h1",
//   null,
//   "Hola mundo desde React"
// );

// const element = <h1>Hola mundo con JSX</h1>

ReactDOM.render(<App />, root)
