import React, { FC, useEffect, useState } from 'react';
import { ITodos } from '../../types';
import { StyledSection, StyledMainSection, StyledPagination, StyledPaginationItem } from './styledHome';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from '../../components/todoForm/AddTodo';
import { getAllTodos } from '../../feature/action/todoAction';
import Card from '../../components/card/Card';
import { AnimatePresence } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import moment from 'moment';

const Home: FC = () => {
    const dispatch: any = useDispatch();
    const { todos, loading, numberOfPages } = useSelector((state: any) => state.todos);
    const [isOpen, setIsOpen] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
    useEffect(() => {
        if(pageNumber) dispatch(getAllTodos(pageNumber));
    }, [dispatch, pageNumber]);

    const handleOpen = () => setIsOpen(true);
    const handleClose: any = () => setIsOpen(false);

    const displayTodos = todos?.length > 0 ? todos?.map((todo: ITodos) => (
        <Card todo={todo} />
    )): <p>No Todos found!</p>

    const previousIndex = () => {
        setPageNumber(Math.max(0, pageNumber - 1));
    }

    const nextIndex = () => {
        setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1))
    }

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
            <StyledPagination>
                {pages.length > 1 ?
                    <>
                        <StyledPaginationItem onClick={previousIndex}>Previous</StyledPaginationItem>
                        {pages?.length > 0 ? pages?.map((pageIndex: number) => (
                            <StyledPaginationItem onClick={() => setPageNumber(pageIndex + 1)}>{pageIndex + 1}</StyledPaginationItem>
                        )): <p>No Pages</p>}
                        <StyledPaginationItem onClick={nextIndex}>Next</StyledPaginationItem>
                    </> : ''
                }
            </StyledPagination>
        </Layout>
    );
};

export default Home;