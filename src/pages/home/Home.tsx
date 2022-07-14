import React, { FC, useEffect, useState } from 'react';
import { ITodos } from '../../types';
import { StyledSection, StyledMainSection } from './styledHome';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from '../../components/todoForm/AddTodo';
import { getAllTodos, deleteTodo } from '../../feature/action/todoAction';
import Card from '../../components/card/Card';
import { AnimatePresence } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import moment from 'moment';

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
        <Layout>
            <StyledMainSection>
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={true}
                    onExitComplete={() => null}
                >
                    {isOpen && <AddTodo handleClose={handleClose} />}
                </AnimatePresence>
                <div className="flex-heading">
                    <div>
                        <h3>Your Tasks</h3>
                        <span>{moment(new Date().toISOString()).format('YYYY-MM-DD HH:mm')}</span>
                    </div>
                    <span>
                        <input type="search" className="search-bar" placeholder="Search a Todo" />
                    </span>
                    <button onClick={handleOpen} className="btn-add">Add Todo</button>
                </div>
                <StyledSection>
                    {displayTodos}
                </StyledSection>
            </StyledMainSection>
        </Layout>
    );
};

export default Home;