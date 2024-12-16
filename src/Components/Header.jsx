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

  transition: height 1s;

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
