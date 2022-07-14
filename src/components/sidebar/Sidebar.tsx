import React from 'react';
import { StyledLinkBtn, StyledSidebar } from './styles';

const Sidebar = () => {
    return (
        <StyledSidebar>
            <h3 className="sidebar-title">Todo Tracker</h3>
            <StyledLinkBtn href="/">Tasks</StyledLinkBtn>
            <StyledLinkBtn href="/">Goals</StyledLinkBtn>
        </StyledSidebar>
    );
};

export default Sidebar;