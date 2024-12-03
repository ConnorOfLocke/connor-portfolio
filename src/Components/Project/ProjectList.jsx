import styled from "styled-components";
import ProjectPanel from "./ProjectPanel.jsx";

export default function ProjectList({ workplace, ...props }) {
  return (
    <ProjectListContainer {...props}>
      {workplace.projects.map((project, projectIndex) => (
        <ProjectPanel
          key={project.title}
          project={project}
          isFirst={projectIndex === 0}
          isLast={projectIndex === workplace.projects.length - 1}
        />
      ))}
    </ProjectListContainer>
  );
}

const ProjectListContainer = styled.ol`
  list-style: none;
  padding: 0;
  border: 1rem solid ${(props) => props.theme.colors.projectListPanel};
  border-radius: ${(props) => props.theme.borderRadius};
  grid-row: ${(props) => props.$gridRow};
  grid-column: 1 / span ${(props) => props.$columns};
`;
