import styled from "styled-components";

export const Wrapper = styled.ul`   
    display: block;
    width: 220px;
    margin: 0 0 48px 0;
    padding: 0;
    color: #999;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`

export const StyledItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-top: 1px solid rgba(0,0,0,.06);
    text-align: left;
    text-decoration: none;
    list-style-type: none;
`

export const Button = styled.button`
    width: 24x;
    height: 24px;
    padding: 0;
    margin-right: 12px;
    border: none;
    background: none;

    ${({ expanded }) => expanded && `
        transform: rotate(180deg)
    `};
`

export const ExpandedList = styled.ul`
    padding: 0;
`

export const ExpandedItem = styled(StyledItem)`
    justify-content: left;
    padding-left: 16px;
`