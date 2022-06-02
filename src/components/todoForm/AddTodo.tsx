import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../../feature/todo/todoSlice';
import { StyledAddTodoContainer } from './styles';

const AddTodo: FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const handleAddTodo = (evt: any) => {
        evt.preventDefault();
        const formData = {
            title: title,
            content: content
        }
        // @ts-ignore
        dispatch(addTodos(formData))
    }
    return (
        <StyledAddTodoContainer>
            <form onSubmit={handleAddTodo}>
                <input type="text" name="title" placeholder="Write a title" value={title} onChange={({target}) => setTitle(target.value)} />
                <textarea name="content" placeholder="Write a content" value={content} onChange={({target}) => setContent(target.value)} />
                <button type="submit">Add Todo</button>
            </form>
        </StyledAddTodoContainer>
    )
}

export default AddTodo