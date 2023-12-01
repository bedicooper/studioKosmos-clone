import styled from "styled-components";

export const Header = styled.h1`
    font-size: 22.4px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px;
`

export const ProjectsWrapper = styled.div`
    max-width: 2480px;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1;
    justify-content: left;
    gap: 1vw;
`

export const Tile = styled.article`
    flex: 100%;
    max-width: 23%;
    aspect-ratio: 1 / 1;
    background: #eee;

    @media (max-width: 1515px) {
        max-width: 32%;
     }

    @media (max-width: 1260px) {
        max-width: 48%;
    }

    @media (max-width: 1024px) {
        max-width: 100%;
    }
`

export const TileTitle = styled.h2`
    opacity: 0;
    transition: 250ms ease-in-out;
    display: flex;
    margin: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    word-break: break-word;
    font-size: 22.4px;
    color: #fff;
    font-weight: 300;
    background: rgba(0, 0, 0, 0.25);

    &:hover {
        opacity: 1;
        box-shadow: inset 0 0 0 10px black;
    }
` 