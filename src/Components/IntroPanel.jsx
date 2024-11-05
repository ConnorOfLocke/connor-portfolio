import styled from "styled-components";
import ProfileFace from "../Assets/Images/profile-face.jpg";

export default function IntroPanel() {
  return (
    <IntroPanelContainer>
      <ProfileImage src={ProfileFace} alt="Profile pic of Connor Locke-Warburton" />
      <p>Meowdty</p>
    </IntroPanelContainer>
  );
}

const IntroPanelContainer = styled.div`
  margin-top: 2rem;
  height: auto;
  background-color: ${(props) => props.theme.foreground};
  display: flex;
`;

const ProfileImage = styled.img`
  height: 8rem;
  width: fit-content;
  padding: 1rem;
`;
