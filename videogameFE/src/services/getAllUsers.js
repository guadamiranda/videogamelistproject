import axios from "axios"

export const getAllUsers = () => {
    const userEndPoint = 'http://localhost:3000/api/users'
    return axios.get(userEndPoint)
}

export const addUser = (body, queryParam) => {
    const userEndpoint = 'http://localhost:3000/api/users'
    return axios.post(userEndpoint, body, {headers: {'Content-Type': 'application/json'}})
}