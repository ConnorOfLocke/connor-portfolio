import { createContext, useCallback, useEffect, useContext, useState } from "react";
import { ThemeContext } from "styled-components";

const INITIAL_SCREEN_SIZE = {
  widerThanMedium: false,
  widerThanSmall: false,
  widerThanMobile: false,
  getHeaderHeight: () => {},
};

export const ScreenSizeContext = createContext({ ...INITIAL_SCREEN_SIZE });

export default function ScreenSizeContextProvider({ children }) {
  const themeContext = useContext(ThemeContext);
  const [screenSize, setScreenSizes] = useState({ ...INITIAL_SCREEN_SIZE });

  const handleResize = useCallback(() => {
    setScreenSizes((prevScreenSizes) => {
      const newMediumState = window.matchMedia(`(min-width: ${themeContext.mediumScreen})`).matches;
      const newSmallState = window.matchMedia(`(min-width: ${themeContext.smallScreen})`).matches;
      const newMobileState = window.matchMedia(`(min-width: ${themeContext.mobileScreen})`).matches;

      const isDiff =
        prevScreenSizes.widerThanMedium !== newMediumState ||
        prevScreenSizes.widerThanSmall !== newSmallState ||
        prevScreenSizes.widerThanMobile !== newMobileState;

      if (isDiff) {
        return {
          ...prevScreenSizes,
          widerThanMedium: newMediumState,
          widerThanSmall: newSmallState,
          widerThanMobile: newMobileState,
        };
      }

      return prevScreenSizes;
    });
  }, [themeContext]);

  const getHeaderHeight = useCallback(() => {
    let headerHeight = themeContext.largeHeaderHeight;

    if (!screenSize.widerThanMedium) {
      headerHeight = themeContext.mediumHeaderHeight;
    } else if (!screenSize.widerThanSmall) {
      headerHeight = themeContext.smallHeaderHeight;
    } else if (!screenSize.widerThanMobile) {
      headerHeight = themeContext.mobileScreenHeight;
    }

    return headerHeight;
  }, [themeContext, screenSize]);

  //call it on load
  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    const listener = window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [handleResize]);

  const screenSizeCTX = {
    ...themeContext,
    getHeaderHeight: getHeaderHeight,
  };

  return <ScreenSizeContext.Provider value={screenSizeCTX}>{children}</ScreenSizeContext.Provider>;
}
