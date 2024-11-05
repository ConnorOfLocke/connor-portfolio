import styled, { ThemeProvider } from "styled-components";
import THEME from "./Assets/Data/Theme.js";
import Header from "./Components/Header";
import IntroPanel from "./Components/IntroPanel.jsx";
import WorkPanel from "./Components/WorkPanel.jsx";
import OutroPanel from "./Components/OutroPanel.jsx";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <AppContainer>
        <Header />
        <Main>
          <IntroPanel />
          <WorkPanel />
          <OutroPanel />
        </Main>
      </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  padding-top: ${(props) => props.theme.headerHeight};
  margin: ${(props) => props.theme.contentMargin};
  width: 100%;
  min-width: ${(props) => props.theme.minContentwidth};
  max-width: ${(props) => props.theme.maxContentwidth};
`;

export default App;
