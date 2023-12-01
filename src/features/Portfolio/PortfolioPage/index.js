import { Header, ProjectsWrapper, Tile, TileBckgrd, TileTitle } from "../styled";
import projects from "../projects";

export default () => (
    <>
        <Header>PROJEKTY/REALIZACJE</Header>
        <ProjectsWrapper>
        {projects.map(project =>
            <Tile><TileTitle>{project.title.toUpperCase()}</TileTitle></Tile>
        )}
        </ProjectsWrapper>
    </>
);