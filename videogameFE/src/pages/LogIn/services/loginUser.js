import axios from "axios"

export const loginUser = (body) => {
    const userEndPoint = 'http://localhost:3000/api/authenticate'
    return  axios.post(userEndPoint, body)
}