import styled from "styled-components";
import SocialLinks from "./SocialLinks";
import { SubtitleText } from "./Utils/Utils";

export default function OutroPanel() {
  return (
    <OutroPanelContainer>
      <div>
        <SubtitleTextCentered>Come say hi if you wanna</SubtitleTextCentered>
        <SocialLinksCentered />
      </div>
    </OutroPanelContainer>
  );
}

const SocialLinksCentered = styled(SocialLinks)`
  justify-content: center;
`;

const SubtitleTextCentered = styled(SubtitleText)`
  text-align: center;
`;

const OutroPanelContainer = styled.div`
  margin-top: 2rem;
  height: auto;
  background-color: ${(props) => props.theme.light.tertiary_trans};
  display: flex;
  justify-content: center;
  border-radius: ${(props) => `${props.theme.borderRadius} ${props.theme.borderRadius} 0 0`};
`;
