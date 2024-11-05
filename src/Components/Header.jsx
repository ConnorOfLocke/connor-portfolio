import styled from "styled-components";
import SocialLinks from "./SocialLinks.jsx";
import { CenterTextContainer } from "./Utils.jsx";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContainerContent>
        <CenterTextContainer>
          <NameText>Connor Locke-Warburton</NameText>
        </CenterTextContainer>
        <SocialLinks />
      </HeaderContainerContent>
    </HeaderContainer>
  );
}

const NameText = styled.h1`
  @media (max-width: ${(props) => props.theme.smallScreen}) {
    font-size: 22px;
  }
`;

const HeaderContainer = styled.header`
  width: 100%;
  height: ${(props) => props.theme.headerHeight};
  display: flex;
  justify-content: center;

  position: fixed;
  background-color: green;
`;

const HeaderContainerContent = styled.header`
  min-width: ${(props) => props.theme.minContentwidth};
  max-width: ${(props) => props.theme.maxContentwidth};
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;
