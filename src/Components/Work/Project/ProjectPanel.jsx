import styled from "styled-components";
import { ThemeContext } from "styled-components";
import { useState, useContext } from "react";
import IconWrapper from "../../Utils/IconWrapper";
import ProjectLinks from "./ProjectLinks";
import ProjectVideo from "./ProjectVideo";
import { SubHeadertext, SubtitleText, VerticalSeperator } from "../../Utils/Utils";
import ProjectImages from "./ProjectImages";
import { ScreenSizeContext } from "../../ScreenSizeContext";
import ProjectIcons from "./ProjectIcons";

function ProjectHasVideo(project) {
  return Boolean(project.otherVideoLink) || Boolean(project.youtubeLink);
}

export default function ProjectPanel({ project }) {
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
    <ProjectContainer>
      <ProjectHeader>
        <ProjectTitle onClick={handleTitleClick}>
          <TitleContainer>
            {!open && <IconWrapper iconID={"arrow-right"} iconSize={"1rem"} />}
            {open && <IconWrapper iconID={"arrow-down"} iconSize={"1rem"} />}
            {project.favorite && <FavoriteStar iconID={"favorite"} iconSize={"1.5rem"} />}
            <ProjectTitleText>{project.title}</ProjectTitleText>
          </TitleContainer>
        </ProjectTitle>
        <ProjectLinks project={project} iconSize={themeContext.iconSize}>
          {widerThanMedium && (
            <>
              <ProjectIcons project={project} iconSize={themeContext.iconSize} />
              <VerticalSeperator />
            </>
          )}
        </ProjectLinks>
      </ProjectHeader>
      {!widerThanMedium && open && <SmallScreenIcons project={project} iconSize={themeContext.iconSize} />}
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

const FavoriteStar = styled(IconWrapper)`
  margin-left: 0.5rem;
  color: ${(props) => props.theme.light.favColor};
`;

const SmallScreenIcons = styled(ProjectIcons)`
  border-radius: ${(props) => ` 0 0 ${props.theme.borderRadius} ${props.theme.borderRadius}`};
  padding: 0 2rem;
  background-color: ${(props) => props.theme.light.offWhite};
  justify-content: center;
`;

const StyledProjectVideo = styled.div`
  float: inline-start;
  margin: 1rem 1rem 0 0;
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
