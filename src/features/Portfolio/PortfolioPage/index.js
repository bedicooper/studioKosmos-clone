import { NavLink } from "react-router-dom";
import { Header, ProjectsWrapper, Tile, TileTitle } from "../styled";
import { projects } from "../projects";

export default () => (
    <>
        <Header>PROJEKTY/REALIZACJE</Header>
        <ProjectsWrapper>
            {projects.map(project =>
                <Tile $thumbnail={project.thumbnail}><TileTitle as={NavLink} to={`/projekt/${project.title}`}>{project.title.toUpperCase()}</TileTitle></Tile>
            )}
        </ProjectsWrapper>
    </>
);