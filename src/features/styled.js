import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const Container = styled.article`
    max-width: 640px;
    margin-bottom: 96px;
`

export const StyledImage = styled.img`
    display: flex;
    flex: 1;
    width: 100%;
`

export const StyledParagraph = styled.p`
    display: block;
    margin: 0 0 22.5px 0;
    color: rgb(49, 49, 49);
    font-size: 15px;
    line-height: 22.5px;
`

export const Link = styled.a`
    color: #111;
    text-decoration: none;
    border-bottom: 1px solid #111;

    &:hover{
        filter: brightness(400%);
    }
`

export const StyledNavLink = styled(NavLink)`
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid #000;

    &:hover{
        filter: brightness(150%);
    }
`