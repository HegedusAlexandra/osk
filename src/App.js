import "./App.css";
import Menu from "./components/Menu";
import Clouds from "./components/Clouds";

function App() {
  return (
    <div className="absolute flex flex-col justify-between items-center w-[100%] h-min-[500vh] h-fit bg-gradient-to-br from-sky-200 to-sky-500 overflow-hidden">
      <Menu/>
      <Clouds />
      <div className="w-[100%] h-[400vh]">

      </div>
    </div>
  );
}

export default App;
