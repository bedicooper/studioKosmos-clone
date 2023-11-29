import { Button, ExpandedItem, ExpandedList, StyledItem } from "../styled";
import ChevronDownIcon from "./ChevronDownIcon";
import { useCollapsableNavigation } from "./useCollapsableNavigation";

export default () => {

    const {
        expand,
        toggleProjects
    } = useCollapsableNavigation();

    return (
        <>
            <StyledItem>
                projekty/realizacje
                <Button $expand={expand.projects} onClick={toggleProjects}>
                    <ChevronDownIcon />
                </Button>
            </StyledItem>
            {
                expand.projects &&
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
    )
}