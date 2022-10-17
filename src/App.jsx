// @flow
import React from 'react'
import './App.css'
import Dashboard from './views/Dashboard'

/**
 * Función para obtener la suma de a + b
 * @param {number} a
 * @param {number} b
 * @returns La suma de a + b
 */
function suma (a, b) {
  return a + b
}

const App = () => {
  console.log(suma(2, 3))
  return (
    <>
      <div>Header App Principal</div>
      <Dashboard />
    </>
  )
}

export default App
