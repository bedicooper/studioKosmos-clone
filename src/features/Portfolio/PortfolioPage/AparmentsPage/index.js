import { NavLink } from "react-router-dom";
import { Header, ProjectsWrapper, Tile, TileTitle } from "../../styled";
import { projects } from "../../projects";

export default () => {
    const filteredProjects = projects.filter(project => project.type === 'wielo');

    return (
        <>
            <Header>WIELORODZINNE</Header>
            <ProjectsWrapper>
                {filteredProjects.map(project =>
                    <Tile $thumbnail={project.thumbnail}><TileTitle as={NavLink} to={`/projekt/${project.title}`}>{project.title.toUpperCase()}</TileTitle></Tile>
                )}
            </ProjectsWrapper>
        </>
    )
};