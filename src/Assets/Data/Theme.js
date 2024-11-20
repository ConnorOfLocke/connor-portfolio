import BackgroundDark from "../Images/Backgrounds/denim.webp";
import BackgroundLight from "../Images/Backgrounds/seamless_paper_texture.png";

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
const ColorPlum = "rgba(235, 159, 239)";
const ColorPlum_a = "rgba(235, 159, 239, 0.3)";
//const ColorUltraViolet = "rgba(84, 86, 119)";
//const ColorUltraViolet_a = "rgba(84, 86, 119, 0.3)";
//const ColorOxfordBlue = "rgba(3, 37, 78)";
const ColorRichBlack = "rgba(1, 28, 39)";

const ColorOffWhite = "rgba(255,251,245)";

const THEME = {
  smallScreen: "800px",
  mediumScreen: "1080px",

  largeHeaderHeight: "10rem",
  mediumHeaderHeight: "8rem",
  smallHeaderHeight: "6rem",

  contentMargin: "0 8rem",
  minContentwidth: "28rem",
  maxContentwidth: "80rem",
  borderRadius: "4rem",

  light: {
    primary: "transparent",
    headerColor: ColorAlabaster,
    socialBgColor: ColorRichBlack,
    socialFgColor: ColorAlabaster,
    tertiaryLighter: ColorPlum,
    tertiary: ColorPlum,
    tertiary_trans: ColorPlum_a,
    offWhite: ColorOffWhite,
    buttonBackground: ColorAlabaster,
    buttonBorderColor: ColorAlabaster_a,
    buttonBackgroundSelected: "antiquewhite",
    backgroundImage: BackgroundLight,
    primaryTextColor: ColorRichBlack,
  },

  dark: {
    primary: "transparent",
    headerColor: ColorAlabaster,
    socialBgColor: ColorRichBlack,
    socialFgColor: ColorAlabaster,
    tertiary: ColorPlum,
    tertiary_trans: ColorPlum_a,
    offWhite: ColorOffWhite,
    buttonBackground: ColorAlabaster,
    buttonBorderColor: ColorAlabaster_a,
    buttonBackgroundSelected: "antiquewhite",
    backgroundImage: BackgroundDark,
    headerTextColor: ColorRichBlack,
  },
};

export default THEME;
