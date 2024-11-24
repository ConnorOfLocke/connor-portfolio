import styled from "styled-components";
import IconWrapper from "../../Utils/IconWrapper";

export function ProjectIcons({ project }) {
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

  const midSize = "1.5rem";

  return (
    <>
      <>
        {isUnity && <IconWrapper iconID={"unity"} size={midSize} />}
        {isGameMaker && <IconWrapper iconID={"gamemaker"} size={midSize} />}
        {isReact && <IconWrapper iconID={"react"} size={midSize} />}
        <VerticalSeperator />
        <IconRow>
          {isIOS && <IconWrapper iconID={"ios"} size={midSize} />}
          {isAndroid && <IconWrapper iconID={"android"} size={midSize} />}
          {isPlaystation && <IconWrapper iconID={"xbox"} size={midSize} />}
          {isXbox && <IconWrapper iconID={"playstation"} size={midSize} />}
          {isPC && <IconWrapper iconID={"pc"} size={midSize} />}
          {isWebGl && <IconWrapper iconID={"webgl"} size={midSize} />}
          {isWeb && <IconWrapper iconID={"web"} size={midSize} />}
          {project.target.length <= 0 && <IconWrapper iconID={"mystery"} size={midSize} />}
        </IconRow>
        <VerticalSeperator />
      </>
    </>
  );
}

const IconRow = styled.div`
  display: flex;
  gap: 4px;
`;

const VerticalSeperator = styled.div`
  border: 1px solid grey;
  margin: 16px 1rem;
`;
