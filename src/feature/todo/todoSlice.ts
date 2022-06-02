import { fetchAll, create, updateOneTodo, deleteOneTodo } from './todoService';
import { createSlice } from '@reduxjs/toolkit';

export const getTodos = () => async (dispatch: any) => {
    try {
        const response = await fetchAll();
        dispatch(setTodos(response));
        console.log(response);
    } catch(err) {
        console.log(err);
    }
}
export const addTodos = (formData: any) => async (dispatch: any) => {
    try {
        const response = await create(formData);
        dispatch(addTodo(response));
        console.log(response);
    } catch(err) {
        console.log(err);
    }
}

export const editTodo = (formData: any, id: string) => async (dispatch: any) => {
    try {
        const response = await updateOneTodo(formData, id);
        dispatch(updateTodo(response));
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
export const removeTodo = (id: string) => async (dispatch: any) => {
    try {
        const response = await deleteOneTodo(id);
        dispatch(deleteTodo(response));
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        setTodos(state, action) {
            return action.payload;
        },
        addTodo(state: any, action: any) {
            state.push(action.payload);
        },
        updateTodo(state: any, action: any) {
            const findTodo = state.find((todo: { id: any; }) => todo.id === action.payload.id);
            console.log(findTodo);
            const todoEdit = {
                ...findTodo,
                isComplete: !findTodo.isComplete
            }
            return state.map((todo: { id: any; }) => todo.id === action.payload.id ? todoEdit : todo);
        },
        deleteTodo(state: any, action: any) {
            return state.filter((todo: { _id: any; }) => todo._id !== action.payload._id);
        }
    }
})

export const { setTodos, addTodo, updateTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer