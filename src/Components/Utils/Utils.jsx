import styled from "styled-components";

function convertRemToPixels(rem) {
  return parseFloat(rem) * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const CenteringContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Seperator = styled.div`
  border: 1px solid ${(props) => props.theme.colors.seperator};
  margin: 16px 1rem;
`;

const HeaderText = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.colors.headerText};

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
  color: ${(props) => props.theme.colors.headerText};

  @media (max-width: ${(props) => props.theme.smallScreen}) {
    font-size: 20px;
  }
  @media (max-width: ${(props) => props.theme.mobileScreen}) {
    font-size: 18px;
  }
`;

const SubtitleText = styled.h3`
  font-size: 20px;
  color: ${(props) => props.theme.colors.subtitleText};

  @media (max-width: ${(props) => props.theme.smallScreen}) {
    font-size: 18px;
  }
  @media (max-width: ${(props) => props.theme.smallScreen}) {
    font-size: 13px;
  }
`;

export { CenteringContainer, Seperator, HeaderText, SubHeadertext, SubtitleText, convertRemToPixels };
