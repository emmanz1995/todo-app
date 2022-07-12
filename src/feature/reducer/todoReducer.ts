import * as types from '../types';

const initialState = {
    loading: false,
    todos: [],
    error: ''
}

const todoReducer = (state: any = initialState, action: { type: any; payload: any; }) => {
    const { type, payload } = action;
    switch(type) {
        case types.GET_TODOS_PENDING:
            return {
                loading: true
            }
        case types.GET_TODOS:
            return {
                ...state,
                todos: payload,
                loading: false
            }
        case types.GET_TODOS_ERROR:
            return {
                error: payload,
                loading: false
            }
        case types.CREATE_TODO:
            return {
                todos: [...state.todos, payload],
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
                ...state,
                todos: {
                    ...state.todos.map((todo: any) => {
                        return (
                            todo._id === payload.todo._id ?
                                { isComplete: !state.isComplete } : payload
                        )
                    })
                },
                loading: false
            }
        case types.UPDATE_TODO_ERROR:
            return {
                error: payload,
                loading: false
            }
        case types.DELETE_TODO:
            return {
                ...state,
                todos: {
                    ...state.todos.filter((todo: any) => todo._id !== payload._id)
                },
                loading: false
            }
        case types.DELETE_TODO_ERROR:
            return {
                error: payload,
                loading: false
            }
        default: return state;
    }
}

export default todoReducer