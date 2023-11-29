import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 72px 40px 0 320px;
    overflow: auto;
    overflow-x: hidden;

    @media (min-width: 1025px) {
        margin: 72px 40px 0 360px;
    }

    @media (max-width: 767px) {
        margin: 0;
    }
`;