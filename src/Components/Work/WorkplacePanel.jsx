import styled from "styled-components";
import { SubHeadertext, SubtitleText } from "../Utils/Utils";

export default function WorkplacePanel({ workplace, ...props }) {
  return (
    <WorkplaceImageButtonContainer {...props}>
      <WorkplaceImage src={workplace.panelImg} alt={workplace.title} />
      <TextArea>
        <SubHeadertext>{workplace.title}</SubHeadertext>
        <DateText>
          {workplace.role} - {workplace.startDate} to {workplace.endDate}
        </DateText>
      </TextArea>
    </WorkplaceImageButtonContainer>
  );
}

const WorkplaceImageButtonContainer = styled.button`
  width: 100%;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${(props) => props.theme.light.tertiary_light_trans};
  ${(props) => props.$selected && `font-style: italic;`};
  ${(props) => props.$selected && `background-color: ${props.theme.light.tertiary_heavy_trans};`};

  border-radius: ${(props) => props.theme.borderRadius};

  min-width: ${(props) => props.theme.minContentwidth};

  transition: box-shadow 0.1s;
  box-shadow: 0px 0px 0px, 3px 3px 3px ${(props) => props.theme.light.primaryTextColor};

  &:hover {
    box-shadow: 0px 0px 0px, 4px 4px 4px ${(props) => props.theme.light.primaryTextColor};
    ${(props) =>
      props.$selected &&
      `box-shadow: none;
  `};
  }
`;

const DateText = styled(SubtitleText)`
  padding: 0 1rem;
`;

const TextArea = styled.div`
  padding: 0 2rem;
`;

const WorkplaceImage = styled.img`
  border-radius: ${(props) => props.theme.borderRadius};
`;
