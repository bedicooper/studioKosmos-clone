import { Button, ExpandedItem, ExpandedList, MenuButton, StyledItem, Wrapper } from "./styled";
import ChevronDownIcon from "./ChevronDownIcon";
import { useCollapsableNavigation } from "./useCollapsableNavigation";

export default () => {

    const {
        menu,
        displayNavigation,
        toggleNavigation,
        toggleProjects
      } = useCollapsableNavigation();

    return (
        <Wrapper>
            <MenuButton onClick={toggleNavigation}>MENU ↓</MenuButton>
            {
                displayNavigation() &&
                <>
                    <StyledItem>projekty/realizacje<Button $expand={menu.projects} onClick={toggleProjects}><ChevronDownIcon /></Button></StyledItem>
                    {
                        menu.projects &&
                        <ExpandedList>
                            <ExpandedItem>— wielorodzinne</ExpandedItem>
                            <ExpandedItem>— jednorodzinne</ExpandedItem>
                            <ExpandedItem>— biurowce</ExpandedItem>
                            <ExpandedItem>— hotele</ExpandedItem>
                            <ExpandedItem>— wnętrza komercyjne</ExpandedItem>
                        </ExpandedList>}
                    <StyledItem>nagrody/publikacje</StyledItem>
                    <StyledItem>o nas</StyledItem>
                    <StyledItem>kontakt</StyledItem>
                </>
            }
        </Wrapper>
    )
};