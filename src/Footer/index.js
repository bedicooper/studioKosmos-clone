import { toAuthor } from "../routes";
import { Container, Link, StyledNavLink } from "./styled";

export default () => (
    <Container>
        <p>
                {`This is a clone website by `}
                <StyledNavLink to={toAuthor()}>Mateusz Bednarz</StyledNavLink>
            <br />
                {`Based on `}
                <Link href="https://studiokosmos.pl/" target="blank" rel="noopener noreferrer">studiokosmos.pl</Link>
                {`. Please visit the source website as well.`}
        </p>
        <p>
            {`Original website was built with `}
            <Link href="https://wordpress.com/" target="blank" rel="noopener noreferrer">WordPress</Link>
            {`. Theme Author: `}
            <Link href="https://wordpress.com/themes/" target="blank" rel="noopener noreferrer">Automattic</Link>
        </p>
    </Container>
);