import axios from "axios"
import { getRandomCharacter } from "./fetch";

// test("Recibimos un personaje random", async () => {
//     const personaje = await getRandomCharacter()
//     console.log(personaje)
// })

jest.mock("axios")
test("Recibimos a Morty con su nombre adecuado", async() => {
    axios.get.mockResolvedValue({
        data: {
            name: "Morty Smith"
        }
    })

    const personaje = await getRandomCharacter()
    expect(personaje.data.name).toBe("Morty Smith")
})
