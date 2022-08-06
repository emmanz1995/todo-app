import * as types from '../types';
import { ITodos } from '../../types';

const initialState = {
    loading: false,
    todos: [],
    error: ''
}

type stateType = {
    loading: boolean;
    todos: any;
    error: string;
}

const todoReducer = (state: stateType = initialState, action: { type: string; payload: any; }) => {
    const { type, payload } = action;
    switch(type) {
        case types.GET_TODOS_PENDING:
            return {
                loading: true
            }
        case types.GET_TODOS:
            return {
                ...state,
                todos: payload.data,
                currentPage: payload.page,
                numberOfPages: payload.numberOfPages,
                loading: false
            }
        case types.GET_TODOS_ERROR:
            return {
                error: payload,
                loading: false
            }
        case types.CREATE_TODO:
            return {
                todos: [ ...state.todos, payload ],
                loading: false
            }
        case types.CREATE_TODO_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case types.UPDATE_TODO:
            return {
                todos: [
                    ...state.todos.map((todo: ITodos) => {
                        return (
                            todo._id === payload._id ? { ...todo, ...payload } : todo
                        )
                    })
                ],
                loading: false
            }
        case types.UPDATE_TODO_ERROR:
            return {
                error: payload,
                loading: false
            }
        case types.DELETE_TODO:
            return {
                todos: [
                    ...state.todos.filter((todo: ITodos) => (
                        todo._id !== payload._id
                    ))
                ],
                loading: false,
            }
        case types.DELETE_TODO_ERROR:
            return {
                error: payload,
                loading: false
            }
        default: return state;
    }
}

export default todoReducer;