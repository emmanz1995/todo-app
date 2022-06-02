import React, { FC } from 'react';
import Todo from '../../interface';
import { StyledNav, StyledTable } from './styledHome';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../feature/todo/todoSlice';
import AddTodo from '../../components/todoForm/AddTodo';

const Home: FC<({ todos: Todo[] })> = ({ todos }) => {
    const dispatch = useDispatch()
    const handleDeleteTodo = (id: string | undefined) => {
        // @ts-ignore
        dispatch(removeTodo(id))
    }
    const displayTodos = todos?.length > 0 ? todos?.map((todo: Todo) => (
        <tr key={todo._id}>
            <td>{todo.title}</td>
            <td>{todo.content}</td>
            <td>{todo.createdAt}</td>
            <td>
                <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
                <button>Update</button>
            </td>
        </tr>
    )): <p>No Todos found!</p>

    return (
        <div>
            <StyledNav>
                <h3>Todo Tracker</h3>
            </StyledNav>
            <div style={{ margin: '0 auto', maxWidth: '1100px', padding: '20px 0' }}>
                <div>
                    <AddTodo />
                </div>
                <StyledTable>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Create At</th>
                        <th>Action</th>
                    </tr>
                    {displayTodos}
                </StyledTable>
            </div>
        </div>
    );
}

export default Home;