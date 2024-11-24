import styled from "styled-components";
import IconWrapper from "../../Utils/IconWrapper";
import LinkButton from "../../Utils/LinkButton";
import { ProjectIcons } from "./ProjectIcons";

export default function ProjectLinks({ project, showIcons, linkIconSize }) {
  return (
    <LinkContainer>
      {showIcons && <ProjectIcons project={project} />}
      <StyledLinkButton urlLink={project.urlLink} target="_blank" rel="noopener noopener">
        <IconWrapper iconID={"link"} size={linkIconSize} />
      </StyledLinkButton>
    </LinkContainer>
  );
}

const StyledLinkButton = styled(LinkButton)`
  display: flex;
  justify-content: center;

  color: ${(props) => props.theme.light.ColorRichBlack};

  & :hover {
    color: ${(props) => props.theme.light.socialFgColor};
  }

  & :visited {
    color: green;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  min-width: auto;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.light.offWhite};
  border-top: 1px solid ${(props) => props.theme.light.buttonBorderColor};
`;
