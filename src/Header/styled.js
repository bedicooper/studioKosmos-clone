import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.header`
    width: 260px;
    padding-right: 40px;
    position: fixed;
    top: 72px;
    left: 40px;
    max-height: 100%;
    overflow: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
    display: none; 
    }

    @media (min-width: 1025px) {
        position: fixed;
        left: 60px;
    }

    @media (max-width: 767px) {
        margin: 0;
        padding: 0;
        width: 100%;
        position: relative;
        top: inherit;
        left: inherit;
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