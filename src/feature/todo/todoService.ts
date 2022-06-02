import axios from 'axios';

export const fetchAll = async () => {
    const response = await axios.get('/gettodos')
    return response.data
}

export const create = async (formData: any) => {
    const response = await axios.post('/createtodos', formData, {
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.data
}

export const updateOneTodo = async (formData: any, id: string) => {
    const response = await axios.put(`/updatetodos/${id}`, formData, {
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.data
}

export const deleteOneTodo = async (id: string) => {
    const response = await axios.delete(`/removetodo/${id}`)
    return response.data
}