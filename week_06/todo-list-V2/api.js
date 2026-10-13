import axios from 'axios'

const BASE = 'http://localhost:3001'

export const fetchTodos = async ()=>{
    const response = await axios.get(`${BASE}/todos`)
    return response.data
}

export const createTodo = async() =>{
    const response = await axios.post(`${BASE}/todos`, {title})
    return response.data
}