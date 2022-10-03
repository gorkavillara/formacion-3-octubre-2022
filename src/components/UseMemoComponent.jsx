import React, { useEffect, useMemo } from 'react'

const getValor = () => {
    // llamada a base de datos
    // cálculo bastante grande
    let suma = 0
    for (let i = 0; i<100000000; i++) {
        suma++
    }
    return suma
}
const getFuncion = (val) => {
    // llamada a base de datos
    // cálculo bastante grande
    let suma = 0
    for (let i = 0; i<100000000; i++) {
        suma++
    }
    return val => suma + val
}

const UseMemoComponent = () => {
    useEffect(() => {
        // llamada a base de datos
        // Almacenar esa información en el estado
    }, [])
    const valor = useMemo(() => getValor(), [])
  return (
    <div>UseMemoComponent</div>
  )
}

export default UseMemoComponent