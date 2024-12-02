const theme = {
  light: {
    text: "rgb(11, 4, 4)",
    background: "rgb(252, 248, 248)",
    primary: "rgb(111, 200, 200)",
    primary_darker: "rgb(58, 152, 152)",
    secondary: "rgb(104, 192, 111)",
    accent: "rgb(246, 188, 136)",
  },
  dark: {
    text: "rgb(251, 244, 244)",
    background: "rgb(7, 3, 3)",
    primary: "rgb(55, 144, 144)",
    primary_darker: "rgb(58, 152, 152)",
    secondary: "rgb(63, 151, 71)",
    accent: "rgb(119, 60, 9)",
  },
};

const THEME = {
  mobileScreen: "620px",
  smallScreen: "800px",
  mediumScreen: "1080px",

  largeHeaderHeight: "8rem",
  mediumHeaderHeight: "8rem",
  smallHeaderHeight: "6rem",
  mobileScreenHeight: "4rem",

  contentMargin: "0 8rem",
  minContentwidth: "320px",
  maxContentwidth: "80rem",
  borderRadius: "4rem",
  innerBorderRadius: "3rem",
  iconSize: "1.5rem",

  largeProjectMediaSizePixels: "520",
  mediumProjectMediaSizePixels: "360",
  smallProjectMediaSizePixels: "200",
  mediaRatio: 9.0 / 16.0,

  black_transparent: "rbga(0,0,0,0)",

  colors: {
    backgroundColor: theme.light.background,
    backgroundImage: undefined,

    header: theme.light.primary,
    header2: theme.light.primary,
    header_trans: theme.light.primary_trans,

    headerText: theme.light.text,
    subtitleText: theme.light.text,

    introHeader: theme.light.text,
    introPanel: theme.light.primary,
    introPanelShadow: theme.light.primary_darker,

    workPanel: theme.light.primary,
    workPanelSelected: theme.light.primary,
    workPanelHeaderText: theme.light.text,
    workPanelDateText: theme.light.text,
    workPanelShadow: theme.light.primary_darker,

    projectListPanel: theme.light.primary,
    projectTitlePanel: theme.light.primary,
    projectLinksPanel: theme.light.secondary,
    projectTitleColor: theme.light.text,
    projectLinkBackground: theme.light.background,
    projectLink: theme.light.text,
    projectLinkHover: theme.light.accent,
    projectIconSeperator: theme.light.text,

    outroPanel: theme.light.primary,
    outroText: theme.light.text,

    scrollbarBack: theme.light.background,
    scrollbarBar: theme.light.primary,
    seperator: theme.light.accent,
    favColor: theme.light.accent,
    socialDefault: theme.light.text,
  },

  socialColors: {
    github: "#171515",
    linkedIn: "#0A66C1",
    bluesky: "#1185FE",
    email: "#101010",
  },
};

export default THEME;
