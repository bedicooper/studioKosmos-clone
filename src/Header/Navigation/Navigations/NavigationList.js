import { Button, ExpandedItem, ExpandedList, StyledItem, StyledNavLink } from "../styled";
import ChevronDownIcon from "./ChevronDownIcon";
import { useCollapsableNavigation } from "./useCollapsableNavigation";
import { toAbout, toAparments, toContact, toHotels, toHouses, toOffice, toPortfolio } from "../../../routes";

export default () => {

    const {
        expand,
        toggleProjects
    } = useCollapsableNavigation();

    return (
        <>
            <StyledItem>
                <StyledNavLink to={toPortfolio()}>
                    projekty/realizacje
                </StyledNavLink>
                <Button $expand={expand.projects} onClick={toggleProjects}>
                    <ChevronDownIcon />
                </Button>
            </StyledItem>
            {
                expand.projects &&
                <ExpandedList>
                    <ExpandedItem><StyledNavLink to={toAparments()}>— wielorodzinne</StyledNavLink></ExpandedItem>
                    <ExpandedItem><StyledNavLink to={toHouses()}>— jednorodzinne</StyledNavLink></ExpandedItem>
                    <ExpandedItem><StyledNavLink to={toOffice()}>— biurowce</StyledNavLink></ExpandedItem>
                    <ExpandedItem><StyledNavLink to={toHotels()}>— hotele</StyledNavLink></ExpandedItem>
                    <ExpandedItem>— wnętrza komercyjne</ExpandedItem>
                </ExpandedList>}
            <StyledItem>nagrody/publikacje</StyledItem>
            <StyledItem><StyledNavLink to={toAbout()}>o nas</StyledNavLink></StyledItem>
            <StyledItem><StyledNavLink to={toContact()}>kontakt</StyledNavLink></StyledItem>
        </>
    )
}