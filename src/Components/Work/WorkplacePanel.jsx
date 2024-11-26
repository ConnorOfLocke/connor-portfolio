import styled from "styled-components";
import { SubHeadertext, SubtitleText } from "../Utils/Utils";

export default function WorkplacePanel({ workplace, ...props }) {
  return (
    <WorkplaceImageButtonContainer {...props}>
      <WorkplaceImage src={workplace.panelImg} alt={workplace.title} />
      <TextArea>
        <StyledSubHeaderText>{workplace.title}</StyledSubHeaderText>
        <DateText>
          {workplace.role} - {workplace.startDate} to {workplace.endDate}
        </DateText>
      </TextArea>
    </WorkplaceImageButtonContainer>
  );
}

const StyledSubHeaderText = styled(SubHeadertext)`
  color: ${(props) => props.theme.colors.workPanelHeaderText};
`;

const WorkplaceImageButtonContainer = styled.button`
  width: 100%;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  background-color: ${(props) => props.theme.colors.workPanel};
  ${(props) => props.$selected && `font-style: italic;`};
  ${(props) => props.$selected && `background-color: ${props.theme.colors.workPanelSelected};`};

  border-radius: ${(props) => props.theme.borderRadius};

  min-width: ${(props) => props.theme.minContentwidth};

  transition: box-shadow 0.1s;
  box-shadow: 0px 0px 0px, 3px 3px 3px ${(props) => props.theme.colors.primaryTextColor};
  ${(props) =>
    props.$selected &&
    `box-shadow: none;
  `};
  &:hover {
    box-shadow: 0px 0px 0px, 4px 4px 4px ${(props) => props.theme.colors.primaryTextColor};
    ${(props) =>
      props.$selected &&
      `box-shadow: none;
  `};
  }
`;

const DateText = styled(SubtitleText)`
  color: ${(props) => props.theme.colors.workPanelDateText};
  padding: 0 1rem;
`;

const TextArea = styled.div`
  padding: 0 2rem;
`;

const WorkplaceImage = styled.img`
  border-radius: ${(props) => props.theme.borderRadius};
  align-self: center;
  width: 100%;
  height: 100%;
`;
