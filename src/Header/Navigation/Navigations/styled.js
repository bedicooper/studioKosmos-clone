import styled from "styled-components";

export const StyledNavigationOnDesktop = styled.div`
    @media (max-width: 767px) {
       display: none;
    }
`

export const StyledNavigationOnMobile = styled.div`
    @media (min-width: 768px) {
       display: none;
    }
`