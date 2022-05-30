import { fetchTodos, createTodo } from './todoService';
import { createSlice } from '@reduxjs/toolkit';

const getTodos = (dispatch: any) => async () => {
    try {
        // @ts-ignore
        const response = getTodos()
        dispatch(setTodos(response))
    } catch(err) {
        console.log(err)
    }
}
const addTodos = (dispatch: any) => async (formData: any) => {}

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