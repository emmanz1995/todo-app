import React, {FC} from 'react';
import Backdrop from './Backdrop';
import { StyledModal } from './styles';

const Modal: FC <{ children: any }> = ({ children }) => {
    const animateIn = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: 'easeIn',
            }
        },
        exit: {
            opacity: 0,
            scale: 0,
            transition: {
                duration: 0.15,
                ease: 'easeOut',
            }
        },
    }
    return (
        <Backdrop>
            <StyledModal onClick={(evt) => evt.stopPropagation()} variants={animateIn} initial="hidden" animate="visible" exit="exit">{children}</StyledModal>
        </Backdrop>
    );
};

export default Modal;