import styled from "styled-components";
import { useRef, useState, useContext } from "react";
import WORK from "../Assets/Data/Work.js";
import WorkplacePanel from "./WorkplacePanel.jsx";
import ProjectList from "./ProjectList.jsx";
import { ThemeContext } from "styled-components";

export default function WorkPanel() {
  const gridRef = useRef();
  const themeContext = useContext(ThemeContext);

  const [selectedWorkplaceTitle, setSelectedWorkplaceTitle] = useState(null);

  const workplaceDataIndex = WORK.workplaces.findIndex((place) => place.title === selectedWorkplaceTitle);
  const workplaceData = WORK.workplaces[workplaceDataIndex];

  const columns = window.matchMedia(`(min-width: ${themeContext.mediumScreen})`).matches ? 2 : 1;

  function handleWorkplaceSelected(workplace) {
    console.log(`setting ${selectedWorkplaceTitle} to ${workplace}`);
    setSelectedWorkplaceTitle(workplace);
  }

  const workplaceList = WORK.workplaces.map((work) => {
    return (
      <WorkplacePanel
        key={work.title}
        workplace={work}
        selected={work.title === selectedWorkplaceTitle}
        onClick={() => {
          handleWorkplaceSelected(work.title);
        }}
      />
    );
  });

  //emplace the project list
  if (workplaceData) {
    const index = Math.floor(workplaceDataIndex / columns) + columns;

    workplaceList.push(
      <ProjectList
        key={`${workplaceData.title}_projects`}
        workplace={workplaceData}
        $gridRow={index}
        $columns={columns}
      />
    );
  }

  return <WorkPanelGrid ref={gridRef}>{workplaceList}</WorkPanelGrid>;
}

const WorkPanelGrid = styled.div`
  background-color: ${(props) => props.theme.foreground};
  display: grid;
  margin-top: 2rem;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.mediumScreen}) {
    grid-template-columns: auto auto;
  }
`;
