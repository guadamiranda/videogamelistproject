import axios from "axios"
import { buildGameModels } from "../adapters/gameAdapter"

export const getAllGames = (pageNumber, pageSize) => {
    const rawgURL = `https://api.rawg.io/api/games?key=c3bf55362bf64921a6880317fef9ccfd&page_size=${pageSize}&page=${pageNumber}`
    
    return axios.get(rawgURL).then(res => buildGameModels(res.data))
} 