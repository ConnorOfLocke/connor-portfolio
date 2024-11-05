import styled from "styled-components";

export default function WorkplacePanel({ workplace, selected, ...props }) {
  return (
    <WorkplaceImageButtonContainer {...props}>
      <WorkplaceImage src={workplace.panelImg} alt={workplace.title} />
      <h2>{workplace.title}</h2>
      <h3>
        {workplace.role} - {workplace.startDate} to {workplace.endDate}
      </h3>
    </WorkplaceImageButtonContainer>
  );
}

const WorkplaceImageButtonContainer = styled.button`
  width: 100%;
  background: slategray;
  border: none;

  &:hover {
    font-style: italic;
  }
`;

const WorkplaceImage = styled.img`
  width: 320px;
`;
