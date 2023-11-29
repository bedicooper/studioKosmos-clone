import { Container, StyledParagraph } from "../styled";

export default () => (
    <Container>
        <StyledParagraph>
            {`Warszawa, ul. Duchnicka 3/345`}
        </StyledParagraph>
        <StyledParagraph>
            {`Łukasz Racinowski 502.78.29.36`}
            <br />
            {`Magda Tylman 603.12.81.83`}
        </StyledParagraph>
        <StyledParagraph>
            {`studio@studiokosmos.pl`}
        </StyledParagraph>
    </Container>
);