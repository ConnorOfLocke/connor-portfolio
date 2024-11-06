import { SocialIcon } from "react-social-icons";

import SOCIALS from "../../Assets/Data/Socials.js";
import styled from "styled-components";
import { ThemeContext } from "styled-components";

import { useCallback, useEffect, useState, useContext } from "react";

const socialIconSizeSmall = "35px";
const socialIconSize = "50px";

export default function SocialLinks() {
  const themeContext = useContext(ThemeContext);
  const [buttonSize, setButtonStyle] = useState(socialIconSize);

  //Rezize the button through styles since the plugin doesn't support styled being passed
  const handleResize = useCallback(() => {
    if (window.matchMedia(`(max-width: ${themeContext.smallScreen})`).matches) {
      setButtonStyle((prevSize) => (prevSize !== socialIconSizeSmall ? socialIconSizeSmall : prevSize));
    } else {
      setButtonStyle((prevSize) => (prevSize !== socialIconSize ? socialIconSize : prevSize));
    }
  }, [themeContext]);

  useEffect(() => {
    const listener = window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [handleResize]);

  return (
    <SocialList>
      {SOCIALS.map((social) => (
        <SocialListItem key={social.id}>
          <SocialIcon url={social.url} label={social.id} style={{ width: buttonSize, height: buttonSize }} />
        </SocialListItem>
      ))}
    </SocialList>
  );
}

const SocialList = styled.ol`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`;

const SocialListItem = styled.li`
  margin: 0.25rem;
`;
