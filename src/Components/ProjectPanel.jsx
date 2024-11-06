import styled from "styled-components";
import { useState } from "react";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";

export default function ProjectPanel({ project }) {
  const [open, setIsOpen] = useState(false);

  function handleTitleClick() {
    setIsOpen((prevOpen) => !prevOpen);
  }

  return (
    <ProjectContainer>
      <ProjectTitleContainer onClick={handleTitleClick}>
        <IconContainer>
          {!open && <SlArrowRight size={"1rem"} />}
          {open && <SlArrowDown size={"1rem"} />}
        </IconContainer>
        <ProjectTitle>{project.title}</ProjectTitle>
      </ProjectTitleContainer>
      {open && (
        <ProjectInfo>
          <p>{project.description}</p>
        </ProjectInfo>
      )}
    </ProjectContainer>
  );
}

const ProjectContainer = styled.li`
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h2`
  margin-left: 1rem;
`;

const IconContainer = styled.div`
  margin: auto 0;
  display: block;
`;

const ProjectTitleContainer = styled.button`
  background-color: ${(props) => props.theme.buttonBackgroundSelected};
  padding: 0;
  margin: 0;
  border: 0;
  border-top: 1px solid ${(props) => props.theme.buttonBorderColor};
  padding-left: 1rem;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-content: center;

  & :hover {
    font-style: italic;
  }
`;

const ProjectInfo = styled.div`
  padding: 2rem;
`;
