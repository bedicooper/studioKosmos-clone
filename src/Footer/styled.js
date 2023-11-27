import styled, { css } from "styled-components";
import {NavLink} from 'react-router-dom';

export const Container = styled.footer`
    display: block;
    margin: 21px 0;
    color: rgb(119, 119, 119);
    font-size: 14px;
    line-height: 17px;
`

const StyledLink = () => {
    return css`
        color: #000;
        text-decoration: none;

        &:hover{
            border-bottom: 1px solid #000;
        }
    `;
};

export const Link = styled.a`
    ${() => StyledLink()};
`

export const StyledNavLink = styled(NavLink)`
    ${() => StyledLink()};
`