import React, { FC } from 'react';
import {StyledBackDrop} from './styles';

const Backdrop: FC <{ children: any }> = ({ children }) => {
    return (
        <StyledBackDrop>
            {children}
        </StyledBackDrop>
    );
};

export default Backdrop;