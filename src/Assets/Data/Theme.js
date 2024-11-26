//import BackgroundImg from "../Images/Backgrounds/denim.webp";
//import BackgroundImg from "../Images/Backgrounds/tactile_noise.png";
//import BackgroundImg from "../Images/Backgrounds/geometric-leaves-dark.webp";
import BackgroundImg from "../Images/Backgrounds/seamless_paper_texture.png";

//Gazzah Pink : rgba(245, 120, 244, 0.3) //F578E0
//Gazzah Yellow : rgba(244 241 79, 0.3) //F4F14F
//Gazzah green : rgba(110, 228, 120, 0.3) //6EE478
//Gazzah Background : rgba(17, 64, 54, 0.3)
//Gazzah Grey : C8C8C8
//Gazzah outline: 737373
// Gazzah Outline Black
//Gazzah Mouth: F25C94
//Gazza Tounge: DD5487

//Paper : rgba(228, 226, 217)

const ColorAlabaster = "rgba(228, 226, 217)";
const ColorAlabaster_a = "rgba(228, 226, 217, 0.3)";
const ColorRichBlack = "rgba(1, 28, 39)";

const ColorOffWhite = "rgba(255,251,245)";

const Pink = {
  lighter: "rgba(247, 157, 232)",
  light: "rgba(246, 145, 229)",
  main: "rgba(245, 120, 244)",
  dark: "rgba(220, 108, 201)",
  darker: "rgba(196, 96, 179)",
  darkerer: "rgba(196, 106, 181)",
};

const THEME = {
  mobileScreen: "620px",
  smallScreen: "800px",
  mediumScreen: "1080px",

  largeHeaderHeight: "10rem",
  mediumHeaderHeight: "8rem",
  smallHeaderHeight: "6rem",
  mobileScreenHeight: "4rem",

  contentMargin: "0 8rem",
  minContentwidth: "320px",
  maxContentwidth: "80rem",
  borderRadius: "4rem",
  iconSize: "1.5rem",

  largeProjectMediaSizePixels: "520",
  mediumProjectMediaSizePixels: "360",
  smallProjectMediaSizePixels: "240",
  mediaRatio: 9.0 / 16.0,

  black_transparent: "rbga(0,0,0,0)",

  colors: {
    backgroundImage: BackgroundImg,

    primary: "transparent",
    header: "rgba(18,17,17,1)",
    header2: "rgba(38,37,37,1)",
    header_trans: "rgba(18,17,17,0)",

    headerText: Pink.light,
    subtitleText: ColorRichBlack,

    introHeader: ColorRichBlack,
    introPanel: Pink.darkerer,

    workPanel: Pink.darkerer,
    workPanelSelected: Pink.darkerer,
    workPanelHeaderText: Pink.lighter,
    workPanelDateText: ColorRichBlack,

    projectListPanel: Pink.darkerer,
    projectTitlePanel: ColorOffWhite,
    projectTitleColor: ColorRichBlack,

    outroPanel: Pink.darkerer,
    outroText: Pink.darkerer,

    greyAccent: ColorAlabaster_a,
    favColor: "gold",
    socialDefault: ColorAlabaster,
    primaryTextColor: ColorRichBlack,
  },

  socialColors: {
    github: "#171515",
    linkedIn: "#0A66C1",
    bluesky: "#1185FE",
    email: "#101010",
  },
};

export default THEME;
