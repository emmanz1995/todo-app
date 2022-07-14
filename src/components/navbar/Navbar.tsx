import React from 'react';
import { StyledNav, StyledUl, StyledLi, StyledLink } from './styles';

const Navbar = () => {
    return (
        <StyledNav>
            <h3>Todo Tracker</h3>
            <StyledUl>
                <StyledLi>
                    <StyledLink>Sign In</StyledLink>
                    <StyledLink>Sign Up</StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
};

export default Navbar;