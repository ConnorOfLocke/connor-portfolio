import IconWrapper from "./IconWrapper.jsx";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ScreenSizeContext } from "../ScreenSizeContext.jsx";

export default function SocialIcon({ socialId, altIcon }) {
  const themeContext = useContext(ThemeContext);
  const { widerThanMedium, widerThanMobile } = useContext(ScreenSizeContext);

  const socialColor = themeContext.socialColors[socialId] ?? themeContext.colors.socialDefault;

  let iconSize = "3rem";
  let innerIconSize = "2rem";
  if (!widerThanMobile) {
    iconSize = "2rem";
    innerIconSize = "1.25rem";
  } else if (!widerThanMedium) {
    iconSize = "2.5rem";
    innerIconSize = "1.5rem";
  }

  return (
    <IconWrapper
      iconID={socialId}
      altIcon={altIcon}
      backgroundColor={altIcon ? socialColor : "transparent"}
      foregroundColor={altIcon ? "white" : socialColor}
      iconSize={iconSize}
      innerIconSize={innerIconSize}
    />
  );
}
