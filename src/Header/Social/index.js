import { Container, Link } from "./styled";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";

export default () => (
    <Container>
        <Link href="https://www.instagram.com/studiokosmos.pl/" target="blank" rel="noopener noreferrer"><InstagramIcon /></Link>
        <Link href="https://www.facebook.com/studiokosmosarch" target="blank" rel="noopener noreferrer"><FacebookIcon /></Link>
    </Container>
)