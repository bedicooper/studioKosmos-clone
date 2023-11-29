import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 40px;
    margin-bottom: 72px;
`

export const Link = styled.a`
    width: 40px;
    height: 40px;
    padding: 10px;
    text-decoration: none;
    background: #eee;
    color: #888;

    &:hover{
        background: #888;
        color: #eee;
    }
`