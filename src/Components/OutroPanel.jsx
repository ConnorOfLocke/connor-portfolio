import styled from "styled-components";
import SocialLinks from "./SocialLinks";
import { SubtitleText } from "./Utils/Utils";

export default function OutroPanel() {
  return (
    <OutroPanelContainer>
      <div>
        <SubtitleTextCentered>Come say hi if you wanna</SubtitleTextCentered>
        <SocialLinks />
      </div>
    </OutroPanelContainer>
  );
}

const SubtitleTextCentered = styled(SubtitleText)`
  text-align: center;
`;

const OutroPanelContainer = styled.section`
  margin-top: 2rem;
  padding-bottom: 1rem;
  height: auto;
  border-radius: ${(props) => `${props.theme.borderRadius} ${props.theme.borderRadius} 0 0`};
  border: 1rem solid ${(props) => props.theme.colors.outroPanel};
  border-bottom: 0;
  display: flex;
  justify-content: center;
`;
