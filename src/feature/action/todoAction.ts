import * as types from '../types';
import {
    fetchAll,
    create,
    deleteOneTodo,
    updateOneTodo
} from '../../service/todoService';
import { Dispatch } from 'redux';
import {Todo} from '../../types';

export const getAllTodos = () => async (dispatch: Dispatch) => {
    try {
        const response = await fetchAll()
        dispatch({
            type: types.GET_TODOS,
            payload: response
        })
    } catch(err) {
        console.log(err)
        dispatch({
            type: types.GET_TODOS_ERROR,
            payload: err
        })
    }
}

export const createTodo = (formData: { title: string; content: string }) => async (dispatch: Dispatch) => {
    try {
        const response = await create(formData)
        dispatch({
            type: types.CREATE_TODO,
            payload: response
        })
    } catch(err) {
        console.log(err)
        dispatch({
            type: types.CREATE_TODO_ERROR,
            payload: err
        })
    }
}

export const updateTodo = (formData: Todo, id: string) => async (dispatch: Dispatch) => {
    try {
        const response = await updateOneTodo(formData, id)
        dispatch({
            type: types.UPDATE_TODO,
            payload: response
        })
    } catch(err) {
        console.log(err)
        dispatch({
            type: types.UPDATE_TODO_ERROR,
            payload: err
        })
    }
}

export const deleteTodo = (id: string) => async (dispatch: Dispatch) => {
    try {
        const response = await deleteOneTodo(id)
        dispatch({
            type: types.DELETE_TODO,
            payload: response,
            id
        })
    } catch(err) {
        console.log(err)
        dispatch({
            type: types.DELETE_TODO_ERROR,
            payload: err
        })
    }
}