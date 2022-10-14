import { fireEvent, render, screen } from "@testing-library/react"
import Performance from "./Performance"

test("Se renderiza correctamente", () => {
    render(<Performance />)
    screen.getByText("On")
})

test("Pulsamos el botón y el texto cambia correctamente", () => {
    const mockFn = jest.fn(() => console.log("He sido llamado"))
    render(<Performance funcion={mockFn} />)
    const button = screen.getByText("On")
    fireEvent.click(button)
    screen.getByText("Off")
    expect(mockFn).toBeCalledTimes(1)
})