import Canvas from "./canvas/index";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";

const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
};

export default App;
