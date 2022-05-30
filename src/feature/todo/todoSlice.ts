import { fetchTodos, createTodo } from './todoService';
import { createSlice } from '@reduxjs/toolkit';

export const getTodos = () => async (dispatch: any) => {
    try {
        const response = await fetchTodos()
        dispatch(setTodos(response))
        console.log(response)
    } catch(err) {
        console.log(err)
    }
}
const addTodos = (formData: any) => async (dispatch: any) => {}

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        setTodos(state, action) {
            return action.payload
        }
    }
})

export const { setTodos } = todoSlice.actions
export default todoSlice.reducer