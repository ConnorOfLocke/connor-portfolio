import styled from "styled-components";

export default function OutroPanel() {
  return (
    <IntroPanelContainer>
      <p>Meowdty</p>
    </IntroPanelContainer>
  );
}

const IntroPanelContainer = styled.div`
  margin-top: 2rem;
  height: auto;
  background-color: ${(props) => props.theme.foreground};
  display: flex;
`;
