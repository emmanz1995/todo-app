import React, { FC } from 'react';
import { StyledCard, StyledCardHeader, StyledCardContent } from './styles';
import { ITodos } from '../../types'
import { FaTimesCircle, FaCheck, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../feature/action/todoAction';
import { truncate } from '../../utils/truncate';
import moment from 'moment';

const Card: FC<{ todo: ITodos }> = ({ todo }) => {
    const dispatch = useDispatch();
    const handleDeleteTodo = (id: string) => {
        // @ts-ignore
        dispatch(deleteTodo(id));
    };
    return (
        <StyledCard>
            <StyledCardHeader>
                <h4>{todo.title}</h4>
                <span>
                    <FaTrash size={15} onClick={() => handleDeleteTodo(todo._id)} />{' '}
                    {todo.isComplete ? <FaTimesCircle size={15} /> : <FaCheck size={15} />}
                </span>
            </StyledCardHeader>
            <StyledCardContent>
                <p>{truncate(todo.content, 50)}</p>
                <span>
                    <p>{moment(todo.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </span>
            </StyledCardContent>
        </StyledCard>
    );
};

export default Card;