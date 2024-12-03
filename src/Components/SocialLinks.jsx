import SOCIALS from "../Assets/Data/Socials.js";
import styled from "styled-components";
import LinkButton from "./Utils/LinkButton.jsx";
import SocialIcon from "./Utils/SocialIcon.jsx";

export default function SocialLinks({ altIcon, ...props }) {
  return (
    <SocialList {...props}>
      {SOCIALS.map((social) => (
        <LinkButton key={social.id} urlLink={social.url} target="_blank" rel="noopener noopener">
          <SocialIcon socialId={social.id} altIcon={altIcon} />
        </LinkButton>
      ))}
    </SocialList>
  );
}

const SocialList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
`;
