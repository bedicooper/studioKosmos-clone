import styled, { css } from "styled-components";
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";

export const Container = styled.div`
    height: 40px;
    margin-bottom: 72px;
`

export const Link = styled.a`
    width: 20px;
    height: 20px;
    padding: 10px;
    text-decoration: none;
    background: #eee;

    &:hover{
        background: #888;
    }
`

const StyledSvg = () => {
    return css`
        & path {
            fill: #000;
        }
        &:hover path {
            fill: azure;
        }
    `;
};

export const StyledFacebookIcon = styled(FacebookIcon)`
    ${() => StyledSvg()}; 
`

export const StyledInstagramIcon = styled(InstagramIcon)`
    ${() => StyledSvg()}; 
`