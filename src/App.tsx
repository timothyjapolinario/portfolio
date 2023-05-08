import Menu from "./components/Menu";
import Introduce from "./sections/Introduce";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="flex min-h-screen  bg-[#0f0f0f] relative">
      <div className="flex flex-col">
        <Introduce />
        <Projects />
      </div>

      <div className="hidden md:block w-[10vw] py-6">
        <Menu />
      </div>
    </div>
  );
}

export default App;
