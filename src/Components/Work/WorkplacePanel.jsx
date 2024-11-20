import styled from "styled-components";

export default function WorkplacePanel({ workplace, ...props }) {
  return (
    <WorkplaceImageButtonContainer {...props}>
      <WorkplaceImage src={workplace.panelImg} alt={workplace.title} />
      <TextArea>
        <h2>{workplace.title}</h2>
        <h3>
          {workplace.role} - {workplace.startDate} to {workplace.endDate}
        </h3>
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
  min-width: 320px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.light.tertiary_trans};
  ${(props) => props.$selected && `font-style: italic;`};
  box-shadow: 0px 0px 0px, 3px 3px 3px ${(props) => props.theme.light.primaryTextColor};
`;

const TextArea = styled.div`
  width: auto;
`;

const WorkplaceImage = styled.img`
  border-radius: ${(props) => props.theme.borderRadius};
`;
