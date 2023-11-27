import HeaderImage from "./HeaderImage";
import { Container, Link, StyledParagraph } from "../styled";

export default () => (
    <Container>
        <HeaderImage />
        <StyledParagraph>
            {`Hi! My name is `}
            <Link href="https://github.com/bedicooper">Mateusz Bednarz</Link>
            {`. Thanks for stopping by!`}
        </StyledParagraph>
        <StyledParagraph>
            {`I'm currently studing to become Frontend Developer. 
                I have created this mockup for practice
                and as a showcase of my skillset.
                I tried to reproduce as much form original site as possible,
                though not all original features are implemented yet.`}
        </StyledParagraph>
        <StyledParagraph>
            {`I have chosen that particular website, 
                because as an Architect by trade, 
                I have been cooperating with studio Kosmos for the last 10 years
                on various designs.
            `}
        </StyledParagraph>
    </Container>
);