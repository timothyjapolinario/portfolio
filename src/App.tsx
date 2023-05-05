import Menu from "./components/Menu";
import Introduce from "./sections/Introduce";

function App() {
  return (
    <div className="flex h-screen  bg-[#0f0f0f] relative p-6">
      <Introduce />
      <div className="w-[10vw]">
        <Menu />
      </div>
    </div>
  );
}

export default App;
