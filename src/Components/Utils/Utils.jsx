import styled from "styled-components";

const CenterTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.light.headerTextColor};

  @media (max-width: ${(props) => props.theme.mediumScreen}) {
    font-size: 32px;
  }
  @media (max-width: ${(props) => props.theme.smallScreen}) {
    font-size: 24px;
  }
  @media (max-width: ${(props) => props.theme.mobileScreen}) {
    font-size: 18px;
  }
`;

const SubHeadertext = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme.light.headerTextColor};

  @media (max-width: ${(props) => props.theme.smallScreen}) {
    font-size: 20px;
  }
  @media (max-width: ${(props) => props.theme.mobileScreen}) {
    font-size: 18px;
  }
`;

const SubtitleText = styled.h3`
  font-size: 20px;
  color: ${(props) => props.theme.light.headerTextColor};

  @media (max-width: ${(props) => props.theme.smallScreen}) {
    font-size: 18px;
  }
  @media (max-width: ${(props) => props.theme.smallScreen}) {
    font-size: 13px;
  }
`;

export { CenterTextContainer, HeaderText, SubHeadertext, SubtitleText };
