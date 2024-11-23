import styled from "styled-components";
import IconWrapper from "./IconWrapper.jsx";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export default function SocialIcon({ socialId }) {
  const themeContext = useContext(ThemeContext);

  const socialColor = themeContext.socialColors[socialId] ?? themeContext.light.socialDefaultColor;

  return <SocialIconWrapper iconID={socialId} $socialColor={socialColor} />;
}

const SocialIconWrapper = styled(IconWrapper)`
  width: 50px;
  height: 50px;

  @media (max-width: ${(props) => props.theme.mediumScreen}) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: ${(props) => props.theme.mobileScreen}) {
    width: 30px;
    height: 30px;
  }

  background-color: ${(props) => props.theme.black_transparent};
  color: ${(props) => props.$socialColor};
`;
