import React, { FC } from 'react';
import { StyledLayout } from './styles';
import Sidebar from '../sidebar/Sidebar';

const Layout: FC<{ children: any }> = ({ children }) => {
    return (
        <StyledLayout>
            <aside className="aside">
                <Sidebar />
            </aside>
            <div className="main-content">{children}</div>
        </StyledLayout>
    );
};

export default Layout;