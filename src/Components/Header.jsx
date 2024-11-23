import styled from "styled-components";
import SocialLinks from "./SocialLinks.jsx";
import { CenterTextContainer, HeaderText } from "./Utils/Utils.jsx";

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

  height: ${(props) => props.theme.largeHeaderHeight};

  @media (max-width: ${(props) => props.theme.mediumScreen}) {
    height: ${(props) => props.theme.mediumHeaderHeight};
  }
  @media (max-width: ${(props) => props.theme.smallScreen}) {
    height: ${(props) => props.theme.smallHeaderHeight};
  }
  @media (max-width: ${(props) => props.theme.mobileScreen}) {
    height: ${(props) => props.theme.mobileScreenHeight};
  }

  display: flex;
  justify-content: center;
  z-index: 10;
  position: fixed;
  ${(props) => {
    const mainColor = props.theme.light.headerColor;
    const transColor = props.theme.light.headerColor_trans;
    return `
        background: ${mainColor};
        background: -moz-linear-gradient(180deg, ${mainColor} 0%, ${mainColor} 97%, ${transColor} 100%);
        background: -webkit-linear-gradient(180deg, ${mainColor} 0%, ${mainColor} 97%, ${transColor} 100%);
        background: linear-gradient(180deg, ${mainColor} 0%, ${mainColor} 97%, ${transColor} 100%);        
      `;
  }};
`;

const HeaderContainerContent = styled.header`
  @media (max-width: ${(props) => props.theme.mobileScreen}) {
    padding: 0 2rem;
  }

  min-width: ${(props) => props.theme.minContentwidth};
  max-width: ${(props) => props.theme.maxContentwidth};
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;
