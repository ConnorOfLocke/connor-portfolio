import styled from "styled-components";
import {
  FaUnity,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaReact,
  FaInternetExplorer,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { SlLink, SlArrowRight, SlArrowDown } from "react-icons/sl";
import { SiGamemaker, SiWebgl } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import { TbDeviceDesktopQuestion } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

const iconPairs = [
  { id: "unity", icon: FaUnity },
  { id: "gamemaker", icon: SiGamemaker },
  { id: "link", icon: SlLink },
  { id: "arrow-right", icon: SlArrowRight },
  { id: "arrow-down", icon: SlArrowDown },
  { id: "ios", icon: FaApple },
  { id: "android", icon: IoLogoAndroid },
  { id: "pc", icon: FaComputer },
  { id: "xbox", icon: FaXbox },
  { id: "playstation", icon: FaPlaystation },
  { id: "webgl", icon: SiWebgl },
  { id: "react", icon: FaReact },
  { id: "web", icon: FaInternetExplorer },
  { id: "mystery", icon: TbDeviceDesktopQuestion },
  { id: "github", icon: FaGithub },
  { id: "email", icon: MdEmail },
  { id: "linkedIn", icon: FaLinkedin },
  { id: "bluesky", icon: FaBluesky },
];

export default function IconWrapper({ iconID, ...props }) {
  const iconindex = iconPairs.findIndex((icon) => icon.id === iconID);
  const iconPair = iconPairs[iconindex];

  return <IconContainer>{iconPair && <iconPair.icon {...props} />}</IconContainer>;
}

const IconContainer = styled.div`
  margin: auto 0;
  display: block;
`;
