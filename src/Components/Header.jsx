import styled from "styled-components";
import SocialLinks from "./SocialLinks.jsx";
import { CenteringContainer, HeaderText } from "./Utils/Utils.jsx";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContainerContent>
        <CenteringContainer>
          <HeaderText>Connor Locke-Warburton</HeaderText>
        </CenteringContainer>
        <SocialLinksStyled altIcon={true} />
      </HeaderContainerContent>
    </HeaderContainer>
  );
}

const SocialLinksStyled = styled(SocialLinks)`
  padding-left: 2rem;
`;

const HeaderContainer = styled.header`
  width: 101%;

  height: ${({ theme }) => theme.largeHeaderHeight};

  @media (max-width: ${({ theme }) => theme.mediumScreen}) {
    height: ${({ theme }) => theme.mediumHeaderHeight};
  }
  @media (max-width: ${({ theme }) => theme.smallScreen}) {
    height: ${({ theme }) => theme.smallHeaderHeight};
  }
  @media (max-width: ${({ theme }) => theme.mobileScreen}) {
    height: ${({ theme }) => theme.mobileScreenHeight};
  }

  display: flex;
  justify-content: center;
  z-index: 10;
  position: fixed;

  border-bottom: 1rem solid ${(props) => props.theme.colors.header};
  background: ${(props) => props.theme.colors.header};
  /*
  color: ${(props) => props.theme.headerText}
    ${(props) => {
    const mainColor = props.theme.colors.header;
    const mainColor2 = props.theme.colors.header2;
    const transColor = props.theme.colors.header_trans;
    return `        
        background: ${mainColor};
        background: -moz-linear-gradient(180deg, ${mainColor} 0%, ${mainColor2} 90%, ${transColor} 100%);
        background: -webkit-linear-gradient(180deg, ${mainColor} 0%, ${mainColor2} 90%, ${transColor} 100%);
        background: linear-gradient(180deg, ${mainColor} 0%, ${mainColor2} 90%, ${transColor} 100%);        
      `;
  }};*/
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
