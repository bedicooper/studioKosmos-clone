import { useState } from "react";
import { Button, ExpandedItem, ExpandedList, StyledItem, Wrapper } from "./styled";
import ChevronDownIcon from "./ChevronDownIcon";

export default () => {
    const [expand, setExpand] = useState(false);
    const toggleExpand = () => setExpand(!expand);

    return (
        <Wrapper>
            <StyledItem>projekty/realizacje<Button expanded={expand} onClick={toggleExpand}><ChevronDownIcon /></Button></StyledItem>
            { 
            expand && 
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
        </Wrapper>
    )
};