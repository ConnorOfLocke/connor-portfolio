import styled from "styled-components";
import IconWrapper from "../../Utils/IconWrapper";
import { VerticalSeperator } from "../../Utils/Utils";

export default function ProjectIcons({ project, iconSize, ...props }) {
  const isUnity = project.engine === "Unity";
  const isGameMaker = project.engine === "GameMaker";
  const isReact = project.engine === "React";

  const isIOS = project.target.findIndex((target) => target === "IOS") !== -1;
  const isAndroid = project.target.findIndex((target) => target === "ANDROID") !== -1;
  const isPlaystation = project.target.findIndex((target) => target === "PS4") !== -1;
  const isXbox = project.target.findIndex((target) => target === "XBOXONE") !== -1;
  const isPC = project.target.findIndex((target) => target === "PC") !== -1;
  const isWebGl = project.target.findIndex((target) => target === "WebGL") !== -1;
  const isWeb = project.target.findIndex((target) => target === "Web") !== -1;

  return (
    <ProjectIconContainer {...props}>
      {isUnity && <IconWrapper iconID={"unity"} size={iconSize} />}
      {isGameMaker && <IconWrapper iconID={"gamemaker"} size={iconSize} />}
      {isReact && <IconWrapper iconID={"react"} size={iconSize} />}
      <VerticalSeperator />
      <IconRow>
        {isIOS && <IconWrapper iconID={"ios"} size={iconSize} />}
        {isAndroid && <IconWrapper iconID={"android"} size={iconSize} />}
        {isPlaystation && <IconWrapper iconID={"xbox"} size={iconSize} />}
        {isXbox && <IconWrapper iconID={"playstation"} size={iconSize} />}
        {isPC && <IconWrapper iconID={"pc"} size={iconSize} />}
        {isWebGl && <IconWrapper iconID={"webgl"} size={iconSize} />}
        {isWeb && <IconWrapper iconID={"web"} size={iconSize} />}
        {project.target.length <= 0 && <IconWrapper iconID={"mystery"} size={iconSize} />}
      </IconRow>
    </ProjectIconContainer>
  );
}

const ProjectIconContainer = styled.div`
  display: flex;
  min-width: auto;
  min-height: 3rem;
`;

const IconRow = styled.div`
  display: flex;
  gap: 4px;
`;
