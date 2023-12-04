import { useParams } from "react-router-dom";
import { Header } from "../styled";
import { projects } from "../projects";
import { StyledParagraph } from "../../styled";
import { useRenderProjectContent } from "./useRenderProjectContent";

function ProjectPage() {
    const { title } = useParams();
    const project = projects.find(project => project.title === title);
    const renderProjectContent = useRenderProjectContent();

    return (
        !project
            ?
            <>
                <Header>UPS! NIE UDAŁO SIĘ ZNALEŹĆ POŻĄDANEJ STRONY.</Header>
                <StyledParagraph>Wygląda na to, że nic nie znaleziono w tym miejscu.</StyledParagraph>
            </>
            :
            <>
                <Header>{project.title.toUpperCase()}</Header>
                {renderProjectContent(project)}
            </>
    )
};

export default ProjectPage;