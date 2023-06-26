import GlobalStyleWithBackground from './GlobalStyle';
import RouteManager from './routes-manager/RouteManager';



function App() {
  return (
    <>
      <GlobalStyleWithBackground>
        <RouteManager />
      </GlobalStyleWithBackground>
    </>
  );
}

export default App;
