import axios from "axios";
import FetchData from "./FetchData";
import { render, screen } from "@testing-library/react";

jest.mock("axios");

describe("Mockeamos axios", () => {
  test("Testear que el mock se ejecuta correctamente", async () => {
    axios.get.mockResolvedValue({
      data: {
        name: "Evil Morty",
      },
    });
    render(<FetchData />);
    await screen.findByText("Evil Morty");
  });
});
