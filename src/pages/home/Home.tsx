import React, { FC, useEffect, useState } from 'react';
import { ITodos } from '../../types';
import { StyledNav, StyledSection } from './styledHome';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from '../../components/todoForm/AddTodo';
import { getAllTodos, deleteTodo } from '../../feature/action/todoAction';
import Card from '../../components/card/Card';
import { AnimatePresence } from 'framer-motion';

const Home: FC = () => {
    const dispatch: any = useDispatch()
    const { todos, loading } = useSelector((state: any) => state.todos)
    // const filterTodo = useSelector((state: any) => state.todos.filter((todo: any) => ( todo.todos.isComplete )))
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        dispatch(getAllTodos())
    }, [])

    const handleToggle = () => setIsOpen(!isOpen)
    const handleOpen = () => setIsOpen(true)
    const handleClose: any = () => setIsOpen(false)

    const handleDeleteTodo = (id: string) => {
        dispatch(deleteTodo(id))
    }
    const displayTodos = todos?.length > 0 ? todos?.map((todo: ITodos) => (
        <Card todo={todo} />
    )): <p>No Todos found!</p>

    return (
        <div>
            <StyledNav>
                <h3>Todo Tracker</h3>
            </StyledNav>
            <div style={{ margin: '0 auto', maxWidth: '1100px', padding: '20px 0' }}>
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                >
                    {isOpen && <AddTodo handleClose={handleClose} />}
                </AnimatePresence>
                <button onClick={handleOpen}>Add Todo</button>
                <StyledSection>
                    {displayTodos}
                </StyledSection>
            </div>
        </div>
    );
}

export default Home;