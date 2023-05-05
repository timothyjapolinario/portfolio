import Menu from "./components/Menu";
import Introduce from "./sections/Introduce";

function App() {
  return (
    <div className="flex min-h-screen  bg-[#0f0f0f] relative p-6">
      <Introduce />
      <div className="hidden md:block w-[10vw]">
        <Menu />
      </div>
    </div>
  );
}

export default App;
