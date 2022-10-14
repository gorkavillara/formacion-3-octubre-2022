import axios from "axios"

const url = "https://rickandmortyapi.com/api/character"

const getRandomNumber = (from, to) => {
    return Math.floor(Math.random() * (to - from) + from)
}

export const getRandomCharacter = async() => {
    const id = getRandomNumber(1, 826)
    const character = await axios.get(`${url}/${id}`)
    return character
}