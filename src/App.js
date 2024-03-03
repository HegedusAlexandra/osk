import "./App.css";
import Menu from "./components/Menu";
import Clouds from "./components/Clouds";
import Main from "./pages/Main";

function App() {
  return (
    <div className="flex flex-col justify-between items-center w-[100%] h-[500vh] bg-gradient-to-br from-sky-200 to-sky-500 overflow-hidden">
      <Clouds />
      <Main/>
    </div>
  );
}

export default App;
