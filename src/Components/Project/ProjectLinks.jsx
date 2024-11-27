import styled from "styled-components";
import IconWrapper from "../Utils/IconWrapper";
import LinkButton from "../Utils/LinkButton";

export default function ProjectLinks({ project, iconSize, ...props }) {
  return (
    <LinkContainer {...props}>
      <StyledLinkButton urlLink={project.urlLink} target="_blank" rel="noopener noopener">
        <IconWrapper iconID={"link"} iconSize={iconSize} />
      </StyledLinkButton>
    </LinkContainer>
  );
}

const StyledLinkButton = styled(LinkButton)`
  display: flex;
  justify-content: center;

  color: ${(props) => props.theme.colors.projectLink};

  & :hover {
    color: ${(props) => props.theme.colors.projectLinkHover};
  }
`;

const LinkContainer = styled.div`
  display: flex;
  min-width: auto;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.colors.projectLinksPanel};
`;
