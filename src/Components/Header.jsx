import styled from "styled-components";
import SocialLinks from "./SocialLinks.jsx";
import { CenterTextContainer, HeaderText } from "./Utils.jsx";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContainerContent>
        <CenterTextContainer>
          <HeaderText>Connor Locke-Warburton</HeaderText>
        </CenterTextContainer>
        <SocialLinks />
      </HeaderContainerContent>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: ${(props) => props.theme.headerHeight};
  display: flex;
  justify-content: center;

  position: fixed;
  background-color: ${(props) => props.theme.light.headerColor};
`;

const HeaderContainerContent = styled.header`
  min-width: ${(props) => props.theme.minContentwidth};
  max-width: ${(props) => props.theme.maxContentwidth};
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;
