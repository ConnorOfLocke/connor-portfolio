import styled from "styled-components";
import ProjectPanel from "./ProjectPanel.jsx";

export default function ProjectList({ workplace, ...props }) {
  return (
    <ProjectListContainer {...props}>
      {workplace.projects.map((project) => (
        <ProjectPanel key={project.title} project={project} />
      ))}
    </ProjectListContainer>
  );
}

const ProjectListContainer = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  grid-row: ${(props) => props.$gridRow};
  grid-column: 1 / span ${(props) => props.$columns};
`;
