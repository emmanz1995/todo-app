import React, { FC } from 'react';
import { StyledCard, StyledCardHeader, StyledCardContent } from './styles';
import { ITodos } from '../../types'
import { FaTimesCircle, FaCheck, FaTrash } from 'react-icons/fa';

const Card: FC<{ todo: ITodos }> = ({ todo }) => {
    return (
        <StyledCard>
            <StyledCardHeader>
                <h4>{todo.title}</h4>
                <span>
                    <FaTrash size={25} />{' '}
                    {todo.isComplete ? <FaTimesCircle size={25} /> : <FaCheck size={25} />}
                </span>
            </StyledCardHeader>
            <StyledCardContent>
                <p>{todo.content}</p>
            </StyledCardContent>
        </StyledCard>
    );
};

export default Card;