import { useParams } from "react-router-dom";
import { Header } from "../styled";
import projects from "../projects";
import { StyledParagraph } from "../../styled";

function ProjectPage() {
    const { id } = useParams();
    const project = projects.find(project => project.id === +id);

    return (
        <>
            <Header>{project.title.toUpperCase()}</Header>
            <StyledParagraph>O Projekcie</StyledParagraph>
        </>
    )
};

export default ProjectPage;