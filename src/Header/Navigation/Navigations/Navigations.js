import NavigationList from "./NavigationList";
import { StyledNavigationOnDesktop, StyledNavigationOnMobile } from "./styled";
import { MenuButton } from "../styled";
import { useCollapsableNavigation } from "./useCollapsableNavigation";

export const NavigationOnDesktop = () => (
    <StyledNavigationOnDesktop>
        <NavigationList />
    </StyledNavigationOnDesktop>
);

export const NavigationOnMobile = () => {
    const {
        expand,
        toggleNavigation,
    } = useCollapsableNavigation();

    return (
        <StyledNavigationOnMobile>
            <MenuButton onClick={toggleNavigation}>MENU ↓</MenuButton>
            {
                expand.navigation && <NavigationList />
            }
        </StyledNavigationOnMobile>
    )
};
