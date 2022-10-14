import axios from "axios"
import FetchData from "./FetchData";
import { render, screen } from "@testing-library/react";

describe("Testeamos el renderizado correcto", () => {
  test("El componente renderiza correctamente", () => {
    render(<FetchData />);
    const divElement = screen.getByText("Loading...");
    expect(divElement).toBeInTheDocument();
  });

  test("Encuentra el personaje Adjudicator Rick", async () => {
    render(<FetchData />);
    await screen.findByText("Adjudicator Rick");
  });
});
