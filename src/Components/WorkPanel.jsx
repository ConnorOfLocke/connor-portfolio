import styled from "styled-components";
import { useState, useContext, useEffect, useCallback } from "react";
import WORK from "../Assets/Data/Work.js";
import WorkplacePanel from "./WorkplacePanel.jsx";
import ProjectList from "./ProjectComponents/ProjectList.jsx";
import { ThemeContext } from "styled-components";

export default function WorkPanel() {
  const themeContext = useContext(ThemeContext);

  const [selectedWorkplaceTitle, setSelectedWorkplaceTitle] = useState(null);
  const [columns, setColumns] = useState(1);

  const WorkplacesData = [...WORK.workplaces].reverse();

  const workplaceDataIndex = WorkplacesData.findIndex((place) => place.title === selectedWorkplaceTitle);
  const workplaceData = WorkplacesData[workplaceDataIndex];

  //Resize the grid columns
  const handleResize = useCallback(() => {
    setColumns((prevColumns) => {
      const newColumns = window.matchMedia(`(min-width: ${themeContext.mediumScreen})`).matches ? 2 : 1;
      return newColumns !== prevColumns ? newColumns : prevColumns;
    });
  }, [themeContext]);

  //call it on load
  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    const listener = window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [handleResize]);

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
    const index = Math.floor(workplaceDataIndex / columns) + 2;

    workplaceList.push(
      <ProjectList
        key={`${workplaceData.title}_projects`}
        workplace={workplaceData}
        $gridRow={index}
        $columns={columns}
      />
    );
  }

  return <WorkPanelGrid>{workplaceList}</WorkPanelGrid>;
}

const WorkPanelGrid = styled.div`
  background-color: ${(props) => props.theme.foreground};
  display: grid;
  justify-content: center;
  margin: 2rem 0;

  grid-template-columns: auto;
  @media (min-width: ${(props) => props.theme.mediumScreen}) {
    grid-template-columns: auto auto;
  }
`;
