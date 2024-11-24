import styled from "styled-components";
import IconWrapper from "../../Utils/IconWrapper";
import LinkButton from "../../Utils/LinkButton";

export default function ProjectLinks({ project, iconSize, children }) {
  return (
    <LinkContainer>
      {children}
      <StyledLinkButton urlLink={project.urlLink} target="_blank" rel="noopener noopener">
        <IconWrapper iconID={"link"} size={iconSize} />
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
`;

const LinkContainer = styled.div`
  display: flex;
  min-width: auto;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.light.offWhite};
`;
