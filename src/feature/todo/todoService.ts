import axios from 'axios';

export const fetchTodos = async () => {
    const response = await axios.get('/gettodos')
    return response.data
}

export const createTodo = async (formData: any) => {
    const response = await axios.post('/createtodos', formData, {
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.data
}