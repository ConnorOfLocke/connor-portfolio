import styled from "styled-components";
import { useState, useContext } from "react";
import WORK from "../../Assets/Data/Work.js";
import WorkplacePanel from "./WorkplacePanel.jsx";
import ProjectList from "./Project/ProjectList.jsx";
import { CenterTextContainer, SubtitleText } from "../Utils/Utils.jsx";
import { ScreenSizeContext } from "../ScreenSizeContext.jsx";

export default function WorkPanel() {
  const { widerThanMedium: isMediumScreen } = useContext(ScreenSizeContext);

  const [selectedWorkplaceTitle, setSelectedWorkplaceTitle] = useState(null);

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
    const index = Math.floor(workplaceDataIndex / (isMediumScreen ? 2 : 1)) + 2;

    workplaceList.push(
      <ProjectList
        key={`${workplaceData.title}_projects`}
        workplace={workplaceData}
        $gridRow={index}
        $columns={isMediumScreen ? 2 : 1}
      />
    );
  }

  return (
    <WorkPanelContainer>
      <CenterTextContainer>
        <SubtitleText>
          Take a squizz! These are all the places I've worked at and the games I’ve had a part in making.
        </SubtitleText>
      </CenterTextContainer>
      <WorkPanelGrid>{workplaceList}</WorkPanelGrid>
    </WorkPanelContainer>
  );
}

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
