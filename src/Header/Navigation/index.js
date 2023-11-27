import { useState } from "react";
import { Button, ExpandedItem, ExpandedList, MenuButton, StyledItem, Wrapper } from "./styled";
import ChevronDownIcon from "./ChevronDownIcon";

export default () => {
    const [menu, setMenu] = useState(
        {
            navigation: false,
            projects: false,
        });

    const toggleNavigation = () => {
        setMenu(menu => {
            return { ...menu, navigation: !menu.navigation };
        });
    };

    const toggleProjects = () => {
        setMenu(menu => {
            return { ...menu, projects: !menu.projects };
        });
    };

    console.log(menu);

    return (
        <Wrapper>
            <MenuButton onClick={toggleNavigation}>MENU ↓</MenuButton>
            {/* {
                menu.navigation &&
                <> */}
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
            {/* </> */}
            {/* } */}
        </Wrapper>
    )
};