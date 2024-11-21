import styled from "styled-components";
import ProfileFace from "../Assets/Images/profile-face.jpg";
import { HeaderText, SubtitleText } from "./Utils/Utils";

export default function IntroPanel() {
  return (
    <IntroPanelContainer>
      <ProfileImage src={ProfileFace} alt="Profile pic of Connor Locke-Warburton" />
      <TextContainer>
        <HeaderText>Games Developer with +8 Years of experience.</HeaderText>
        <SubtitleText>Howdy howdy howdy!</SubtitleText>
        <SubtitleText>
          I’m Connor and I’ve been making games for a while. I’ve been as developer on projects for IOS, Android, PC,
          Switch, XBoxOne, PS4, TVOS, Table Touch Screens and the large screen in Federation Square, Melbourne!
        </SubtitleText>
      </TextContainer>
    </IntroPanelContainer>
  );
}

const IntroPanelContainer = styled.div`
  margin-top: 2rem;
  height: auto;
  background-color: ${(props) => props.theme.light.tertiary_trans};
  display: flex;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0px 0px 0px, 3px 3px 3px ${(props) => props.theme.light.primaryTextColor};
`;

const TextContainer = styled.div`
  padding-right: 1rem;
`;

const ProfileImage = styled.img`
  height: 28rem;

  @media (max-width: ${(props) => props.theme.mediumScreen}) {
    height: 18rem;
  }
  @media (max-width: ${(props) => props.theme.smallScreen}) {
    height: 12rem;
  }
  width: fit-content;
  padding: 1rem;
  border-radius: 4rem;
`;
