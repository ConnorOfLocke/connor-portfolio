import styled from "styled-components";
import { useState } from "react";
import IconWrapper from "../../Utils/IconWrapper";
import ProjectLinks from "./ProjectLinks";
import ProjectVideo from "./ProjectVideo";
import { SubHeadertext, SubtitleText } from "../../Utils/Utils";
import ProjectImages from "./ProjectImages";

function ProjectHasVideo(project) {
  return Boolean(project.otherVideoLink) || Boolean(project.youtubeLink);
}

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
      <ProjectInfo $isOpen={open}>
        <StyledProjectVideo>
          {ProjectHasVideo(project) && <ProjectVideo project={project} />}
          <ProjectImages project={project} />
        </StyledProjectVideo>
        <SubtitleText>{project.description}</SubtitleText>
      </ProjectInfo>
    </ProjectContainer>
  );
}

const StyledProjectVideo = styled.div`
  float: inline-start;
  margin: 1rem 1rem 0 0;
  @media (max-width: ${(props) => props.theme.mediumScreen}) {
    float: none;
    display: flex;
    justify-content: center;
    margin: 1rem 0 0 0;
  }
`;

const ProjectContainer = styled.li`
  display: flex;
  flex-direction: column;
`;

const ProjectTitleText = styled(SubHeadertext)`
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
  transition: opacity 1s;

  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  padding: ${(props) => (props.$isOpen ? "0.5rem 2rem 2rem 2rem" : "0")};
  height: ${(props) => (props.$isOpen ? "100%" : "0")};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
`;
