import { Wrapper } from "./styled";
import { NavigationOnDesktop, NavigationOnMobile } from "./Navigations/Navigations";

export default () => (
    <Wrapper>
        <NavigationOnMobile />
        <NavigationOnDesktop />
    </Wrapper>
);