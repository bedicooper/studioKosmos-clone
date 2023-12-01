import { NavLink } from "react-router-dom";
import { Header, ProjectsWrapper, Tile, TileTitle } from "../../styled";
import projects from "../../projects";

export default () => {
    const filteredProjects = projects.filter(project => project.type === 'hotel');

    return (
    <>
        <Header>HOTELE</Header>
        <ProjectsWrapper>
        {filteredProjects.map(project =>
            <Tile $thumbnail={project.thumbnail}><TileTitle as={NavLink} to={`/projekt/${project.id}`}>{project.title.toUpperCase()}</TileTitle></Tile>
        )}
        </ProjectsWrapper>
    </>
)};