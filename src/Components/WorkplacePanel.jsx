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

  background: ${(props) => (props.$selected ? props.theme.buttonBackgroundSelected : props.theme.buttonBackground)};

  ${(props) => props.$selected && `font-style: italic;`};

  &:hover {
    font-style: italic;
  }
`;

const TextArea = styled.div`
  width: auto;
`;

const WorkplaceImage = styled.img``;
