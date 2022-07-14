import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../feature/action/todoAction';
import { StyledAddTodoContainer, StyledButton } from './styles';
import { formValueTypes } from '../../types'
import Modal from '../modal/Modal';
import * as yup from 'yup';
import { Formik } from 'formik';
import { FaTimesCircle } from 'react-icons/fa';

const formValidation = yup.object().shape({
    title: yup.string().required('Title is required!'),
    content: yup.string().required('Content is required!').min(15).max(100)
})

const initialValue: formValueTypes = {
    title: '',
    content: ''
}

const AddTodo: FC<{ handleClose: any }> = ({ handleClose }) => {
    const dispatch: any = useDispatch();
    const handleAddTodo = (values: formValueTypes) => {
        const formData = {
            title: values.title,
            content: values.content
        };

        dispatch(createTodo(formData));
        handleClose();
    };
    return (
        <Modal>
            <Formik initialValues={initialValue} onSubmit={handleAddTodo} validationSchema={formValidation}>
                {({ handleSubmit, values, errors, handleChange, touched }: any) => (
                    <StyledAddTodoContainer>
                        <div className="add-header">
                            <h3>Add Todos</h3>
                            <FaTimesCircle size={20} className="btn-close" onClick={handleClose} />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="title" placeholder="Write a title" value={values.title} onChange={handleChange} />
                            {errors.title && touched.title ? (
                                <div className="error">{errors.title}</div>
                            ): null}
                            <textarea name="content" placeholder="Write a content" value={values.content} onChange={handleChange} />
                            {errors.content && touched.content ? (
                                <div className="error">{errors.content}</div>
                            ): null}
                            <StyledButton type="submit">Add Todo</StyledButton>
                        </form>
                    </StyledAddTodoContainer>
                )}
            </Formik>
        </Modal>
    );
};

export default AddTodo;