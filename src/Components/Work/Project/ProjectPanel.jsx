import styled from "styled-components";
import { useState } from "react";
import IconWrapper from "../../Utils/IconWrapper";
import ProjectLinks from "./ProjectLinks";
import { ProjectVideo } from "./ProjectVideo";
import { SubtitleText } from "../../Utils/Utils";

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
          <ProjectVideo project={project} />
          <SubtitleText>{project.description}</SubtitleText>
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
  padding: 0.5rem 2rem 2rem 2rem;
  border-radius: ${(props) => props.theme.borderRadiusUpperTab};
`;
