import React, { FC, useEffect, useState } from 'react';
import { ITodos } from '../../types';
import { StyledNav, StyledSection, StyledMainSection } from './styledHome';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from '../../components/todoForm/AddTodo';
import { getAllTodos, deleteTodo } from '../../feature/action/todoAction';
import Card from '../../components/card/Card';
import { AnimatePresence } from 'framer-motion';

const Home: FC = () => {
    const dispatch: any = useDispatch();
    const { todos, loading } = useSelector((state: any) => state.todos);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        dispatch(getAllTodos());
    }, []);

    const handleOpen = () => setIsOpen(true);
    const handleClose: any = () => setIsOpen(false);

    const displayTodos = todos?.length > 0 ? todos?.map((todo: ITodos) => (
        <Card todo={todo} />
    )): <p>No Todos found!</p>

    return (
        <div>
            <StyledNav>
                <h3>Todo Kanban Tracker</h3>
            </StyledNav>
            <StyledMainSection>
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                >
                    {isOpen && <AddTodo handleClose={handleClose} />}
                </AnimatePresence>
                <button onClick={handleOpen} className="btn-add">Add Todo</button>
                <StyledSection>
                    {displayTodos}
                </StyledSection>
            </StyledMainSection>
        </div>
    );
};

export default Home;