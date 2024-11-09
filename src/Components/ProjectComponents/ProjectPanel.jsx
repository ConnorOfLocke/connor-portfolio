import styled from "styled-components";
import { useState } from "react";
import IconWrapper from "../IconWrapper";
import ProjectLinks from "./ProjectLinks";

export default function ProjectPanel({ project }) {
  const [open, setIsOpen] = useState(false);

  function handleTitleClick() {
    setIsOpen((prevOpen) => !prevOpen);
  }

  return (
    <ProjectContainer>
      <ProjectHeader>
        <ProjectTitle onClick={handleTitleClick}>
          <TitleContainer>
            {!open && <IconWrapper iconID={"arrow-right"} size={"1rem"} />}
            {open && <IconWrapper iconID={"arrow-down"} size={"1rem"} />}
            <ProjectTitleText>{project.title}</ProjectTitleText>
          </TitleContainer>
        </ProjectTitle>
        <ProjectLinks project={project} />
      </ProjectHeader>
      {open && (
        <ProjectInfo>
          <p>{project.description}</p>
        </ProjectInfo>
      )}
    </ProjectContainer>
  );
}

const ProjectContainer = styled.li`
  display: flex;
  flex-direction: column;
`;

const ProjectTitleText = styled.h2`
  margin-left: 1rem;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProjectTitle = styled.button`
  background-color: ${(props) => props.theme.light.offWhite};
  padding: 0;
  margin: 0;
  border: 0;
  border-top: 1px solid ${(props) => props.theme.light.buttonBorderColor};
  padding-left: 1rem;
  width: 100%;

  & :hover {
    font-style: italic;
  }
`;

const ProjectInfo = styled.div`
  background-color: ${(props) => props.theme.light.offWhite};
  padding: 2rem;
`;
