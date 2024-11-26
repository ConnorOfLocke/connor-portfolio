import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import WORK from "../../Assets/Data/Work.js";
import WorkplacePanel from "./WorkplacePanel.jsx";
import ProjectList from "../Project/ProjectList.jsx";
import { CenteringContainer, convertRemToPixels, SubtitleText } from "../Utils/Utils.jsx";
import { ScreenSizeContext } from "../ScreenSizeContext.jsx";

export default function WorkPanel() {
  const { widerThanMedium, getHeaderHeight } = useContext(ScreenSizeContext);
  const [selectedWorkplaceTitle, setSelectedWorkplaceTitle] = useState(null);

  useEffect(() => {
    if (selectedWorkplaceTitle) {
      const element = document.getElementById(selectedWorkplaceTitle);
      const scrollElement = document.getElementById("scrollContainer");
      if (element && scrollElement) {
        const headerPixels = convertRemToPixels(getHeaderHeight());
        const y = element.getBoundingClientRect().top + scrollElement.scrollTop - headerPixels;
        scrollElement.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [selectedWorkplaceTitle, getHeaderHeight]);

  const WorkplacesData = [...WORK.workplaces].reverse();

  const workplaceDataIndex = WorkplacesData.findIndex((place) => place.title === selectedWorkplaceTitle);
  const workplaceData = WorkplacesData[workplaceDataIndex];

  function handleWorkplaceSelected(workplace) {
    setSelectedWorkplaceTitle(workplace);
  }

  const workplaceList = WorkplacesData.map((work) => {
    return (
      <WorkplacePanel
        key={work.title}
        id={work.title}
        workplace={work}
        $selected={work.title === selectedWorkplaceTitle}
        onClick={() => {
          handleWorkplaceSelected(work.title);
        }}
      />
    );
  });

  //emplace the project list
  if (workplaceData) {
    const index = Math.floor(workplaceDataIndex / (widerThanMedium ? 2 : 1)) + 2;

    workplaceList.push(
      <ProjectList
        key={`${workplaceData.title}_projects`}
        workplace={workplaceData}
        $gridRow={index}
        $columns={widerThanMedium ? 2 : 1}
      />
    );
  }

  return (
    <WorkPanelContainer>
      <CenteringContainer>
        <StyledSubtitleText>
          Take a squizz! These are all the places I've worked at and the games I’ve had a part in making.
        </StyledSubtitleText>
      </CenteringContainer>
      <WorkPanelGrid>{workplaceList}</WorkPanelGrid>
    </WorkPanelContainer>
  );
}

const StyledSubtitleText = styled(SubtitleText)`
  color: ${(props) => props.theme.colors.headerText};
`;

const WorkPanelContainer = styled.div`
  margin: 1rem 0;
`;

const WorkPanelGrid = styled.div`
  display: grid;
  justify-content: center;
  gap: 2rem;

  grid-template-columns: auto;
  @media (min-width: ${(props) => props.theme.mediumScreen}) {
    grid-template-columns: auto auto;
  }
`;
