import HeaderImage from "./HeaderImage";
import { Container, Link, StyledParagraph } from "../styled";

export default () => (
    <Container>
        <HeaderImage />
        <StyledParagraph>
            {`Hi! My name is `}
            <Link 
                href="https://github.com/bedicooper"
                target="blank"
                rel="noopener noreferrer"
            >
                Mateusz Bednarz
            </Link>
            {`. Thanks for stopping by!`}
        </StyledParagraph>
        <StyledParagraph>
            {`I'm currently studying to become a Frontend Developer. 
              I have created this mockup of `
            }
            <Link 
                href="https://studiokosmos.pl/" 
                target="blank" 
                rel="noopener noreferrer"
            >
                studiokosmos.pl
            </Link>
            {` for practice
              and as a showcase of my skill set.
              I tried to reproduce as much from original site as possible, 
              though not all original features are implemented yet.`
            }
        </StyledParagraph>
        <StyledParagraph>
            {`I have chosen that particular website, 
              because as an Architect by trade, 
              I have been cooperating with studio Kosmos for the last 10 years
              on various designs.`
            }
        </StyledParagraph>
    </Container>
);