import Navigation from "./Navigation";
import Social from "./Social";
import { Wrapper, StyledImageNavLink } from "./styled";
import Logo from "./Logo";
import { toHome } from "../routes";

export default () => {
  return (
    <Wrapper>
      <StyledImageNavLink to={toHome()}><Logo /></StyledImageNavLink>
      <Navigation />
      <Social />
    </Wrapper>
  );
};