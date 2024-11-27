import styled from "styled-components";
import { ThemeContext } from "styled-components";
import { useState, useContext } from "react";
import IconWrapper from "../Utils/IconWrapper";
import ProjectLinks from "./ProjectLinks";
import ProjectVideo from "./ProjectVideo";
import { SubHeadertext, SubtitleText } from "../Utils/Utils";
import ProjectImages from "./ProjectImages";
import { ScreenSizeContext } from "../ScreenSizeContext";
import ProjectIcons from "./ProjectIcons";

function ProjectHasVideo(project) {
  return Boolean(project.otherVideoLink) || Boolean(project.youtubeLink);
}

export default function ProjectPanel({ project, isFirst, isLast }) {
  const themeContext = useContext(ThemeContext);
  const { widerThanMedium, widerThanSmall } = useContext(ScreenSizeContext);

  const [open, setIsOpen] = useState(false);

  function handleTitleClick() {
    setIsOpen((prevOpen) => !prevOpen);
  }

  let videoSize = "lg";
  if (!widerThanSmall) {
    videoSize = "sm";
  } else if (!widerThanMedium) {
    videoSize = "md";
  }

  return (
    <ProjectContainer $isLast={isLast}>
      <ProjectHeader>
        <ProjectTitle onClick={handleTitleClick} $isFirst={isFirst}>
          <TitleContainer>
            {!open && <IconWrapper iconID={"arrow-right"} iconSize={"1rem"} />}
            {open && <IconWrapper iconID={"arrow-down"} iconSize={"1rem"} />}
            <ProjectTitleText>{project.title}</ProjectTitleText>
          </TitleContainer>
        </ProjectTitle>
        <StyledProjectLinks project={project} iconSize={themeContext.iconSize} $isFirst={isFirst} />
      </ProjectHeader>
      <StyledProjectIcons project={project} iconSize={themeContext.iconSize} />
      <ProjectInfo $isOpen={open}>
        <StyledProjectVideo>
          {ProjectHasVideo(project) && <ProjectVideo project={project} videoSize={videoSize} />}
          <ProjectImages project={project} />
        </StyledProjectVideo>
        <SubtitleText>{project.description}</SubtitleText>
      </ProjectInfo>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => (props.$isLast ? props.theme.innerBorderRadius : "1rem")};
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
  background-color: ${(props) => props.theme.colors.projectTitlePanel};

  border-radius: ${(props) => (props.$isFirst ? `${props.theme.innerBorderRadius}  0 0 0` : "0")};
  padding: 0;
  margin: 0;
  border: 0;
  padding-left: 1rem;
  width: 100%;

  min-height: ${(props) => props.theme.colors.innerBorderRadius};

  & :hover {
    font-style: italic;
  }
`;

const StyledProjectLinks = styled(ProjectLinks)`
  border-radius: ${(props) => (props.$isFirst ? `0 ${props.theme.innerBorderRadius} 0 0;` : "0")};
`;

const ProjectInfo = styled.div`
  transition: opacity 1s;

  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  padding: ${(props) => (props.$isOpen ? "0.5rem 2rem 2rem 2rem" : "0")};
  height: ${(props) => (props.$isOpen ? "100%" : "0")};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
`;

const StyledProjectIcons = styled(ProjectIcons)`
  border-left: 1rem solid ${(props) => props.theme.colors.projectTitlePanel};
  border-bottom: 1rem solid ${(props) => props.theme.colors.projectTitlePanel};
  border-radius: ${(props) => ` 0 0 0 ${props.theme.borderRadius}`};

  transition: margin 1s;
  margin-left: 65%;
  @media (max-width: ${({ theme }) => theme.mediumScreen}) {
    margin-left: 50%;
  }
  @media (max-width: ${({ theme }) => theme.smallScreen}) {
    margin-left: 20%;
  }
  @media (max-width: ${({ theme }) => theme.smallScreen}) {
    margin-left: 5%;
  }

  padding: 0 2rem;
  justify-content: center;
  //background-color: ${(props) => props.theme.colors.projectTitlePanel};
`;

const StyledProjectVideo = styled.div`
  float: inline-start;
  margin: 1rem 1rem 0 0;
`;
