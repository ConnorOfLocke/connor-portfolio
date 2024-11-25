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
      {isUnity && <IconWrapper iconID={"unity"} iconSize={iconSize} />}
      {isGameMaker && <IconWrapper iconID={"gamemaker"} iconSize={iconSize} />}
      {isReact && <IconWrapper iconID={"react"} iconSize={iconSize} />}
      <VerticalSeperator />
      <IconRow>
        {isIOS && <IconWrapper iconID={"ios"} iconSize={iconSize} />}
        {isAndroid && <IconWrapper iconID={"android"} iconSize={iconSize} />}
        {isPlaystation && <IconWrapper iconID={"xbox"} iconSize={iconSize} />}
        {isXbox && <IconWrapper iconID={"playstation"} iconSize={iconSize} />}
        {isPC && <IconWrapper iconID={"pc"} iconSize={iconSize} />}
        {isWebGl && <IconWrapper iconID={"webgl"} iconSize={iconSize} />}
        {isWeb && <IconWrapper iconID={"web"} iconSize={iconSize} />}
        {project.target.length <= 0 && <IconWrapper iconID={"mystery"} iconSize={iconSize} />}
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
