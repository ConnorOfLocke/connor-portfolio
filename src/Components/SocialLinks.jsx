import SOCIALS from "../Assets/Data/Socials.js";
import styled from "styled-components";
import LinkButton from "./Utils/LinkButton.jsx";
import SocialIcon from "./Utils/SocialIcon.jsx";

export default function SocialLinks() {
  return (
    <SocialList>
      {SOCIALS.map((social) => (
        <li key={social.id}>
          <LinkButton urlLink={social.url} target="_blank" rel="noopener noopener">
            <SocialIcon socialId={social.id} />
          </LinkButton>
        </li>
      ))}
    </SocialList>
  );
}

const SocialList = styled.ol`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
