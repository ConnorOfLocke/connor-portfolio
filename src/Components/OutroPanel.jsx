import styled from "styled-components";

export default function OutroPanel() {
  return (
    <OutroPanelContainer>
      <p>Meowdty</p>
    </OutroPanelContainer>
  );
}

const OutroPanelContainer = styled.div`
  margin-top: 2rem;
  height: auto;
  background-color: ${(props) => props.theme.light.tertiary_trans};
  display: flex;
`;
