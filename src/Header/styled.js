import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.header`
    width: 260px;
    padding-right: 40px;
    position: fixed;
    top: 72px;
    left: 60px;
    max-height: 100%;
    overflow: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
    display: none; 
    }
`
export const StyledImageNavLink = styled(NavLink)`
    display: block;
    width: 220px;
    height: 284px;
    margin-bottom: 48px;

    line-height: 284px;
    text-align: center;
    text-decoration: none;
`