import styled from "styled-components";
import ProfileFace from "../Assets/Images/profile-face.jpg";
import { HeaderText, SubtitleText } from "./Utils/Utils";

export default function IntroPanel() {
  return (
    <IntroPanelContainer>
      <ProfileContainer>
        <ProfileImage src={ProfileFace} alt="Profile pic of Connor Locke-Warburton" />
      </ProfileContainer>
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
  padding: 0.5rem;
  height: auto;
  background-color: ${(props) => props.theme.light.tertiary_light_trans};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0px 0px 0px, 3px 3px 3px ${(props) => props.theme.light.primaryTextColor};

  @media (min-width: ${(props) => props.theme.mediumScreen}) {
    float: none;
    display: flex;
    justify-content: center;
    margin: 1rem 0 0 0;
  }
`;

const TextContainer = styled.div`
  padding: 0 1rem 1.25rem 1.5rem;
`;

const ProfileContainer = styled.div`
  float: inline-start;
`;

const ProfileImage = styled.img`
  height: 28rem;

  @media (max-width: ${(props) => props.theme.mediumScreen}) {
    height: 18rem;
  }
  @media (max-width: ${(props) => props.theme.smallScreen}) {
    height: 12rem;
  }
  @media (max-width: ${(props) => props.theme.mobileScreen}) {
    height: 8rem;
  }
  padding: 1rem;
  border-radius: 4rem;
`;
