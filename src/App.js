import styled, { ThemeProvider } from "styled-components";
import THEME from "./Assets/Data/Theme.js";
import Header from "./Components/Header";
import IntroPanel from "./Components/IntroPanel.jsx";
import WorkPanel from "./Components/Work/WorkPanel.jsx";
import OutroPanel from "./Components/OutroPanel.jsx";
import ScreenSizeContextProvider from "./Components/ScreenSizeContext.jsx";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <ScreenSizeContextProvider>
        <Background>
          <AppContainer id="scrollContainer">
            <Header />
            <Main>
              <IntroPanel />
              <WorkPanel />
              <OutroPanel />
            </Main>
          </AppContainer>
        </Background>
      </ScreenSizeContextProvider>
    </ThemeProvider>
  );
}

const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${(props) => props.theme.colors.backgroundImage});
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;

  scrollbar-width: thin;
  scrollbar-color: ${(props) => `${props.theme.colors.scrollbarBar} ${props.theme.colors.scrollbarBack}`};
`;

const Main = styled.div`
  padding-top: ${(props) => props.theme.largeHeaderHeight};

  @media (max-width: ${(props) => props.theme.mediumScreen}) {
    padding-top: ${(props) => props.theme.mediumHeaderHeight};
  }
  @media (max-width: ${(props) => props.theme.smallScreen}) {
    padding-top: ${(props) => props.theme.smallHeaderHeight};
  }

  @media (max-width: ${(props) => props.theme.mobileScreen}) {
    padding-top: ${(props) => props.theme.mobileScreenHeight};
  }

  margin: ${(props) => props.theme.contentMargin};
  width: 100%;
  min-width: ${(props) => props.theme.minContentwidth};
  max-width: ${(props) => props.theme.maxContentwidth};
`;

export default App;
