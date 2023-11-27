import Navigation from "./Navigation";
import { Wrapper, StyledImageNavLink } from "./styled";
import Logo from "./Logo";

export default () => {
  return (
    <Wrapper>
      <StyledImageNavLink to=""><Logo /></StyledImageNavLink>
      <Navigation />
    </Wrapper>
  );
};