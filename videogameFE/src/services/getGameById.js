import axios from "axios"
import { buildGameModels } from "../adapters/gameAdapter"

export const getGameById = (id) => {
    const rawgURL = `https://api.rawg.io/api/games/${id}?key=c3bf55362bf64921a6880317fef9ccfd`
    return axios.get(rawgURL).then(res => buildGameModels(res.data))
} 