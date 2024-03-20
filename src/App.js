import "./App.css";
import Menu from "./components/Menu";
import Main from "./pages/Main";
import MobileMenu from "./components/MobileMenu";

function App() {
  return (
    <div className="flex flex-col justify-between items-center w-[100%] bg-gradient-to-br from-sky-200 to-sky-500 overflow-hidden">
      {window.innerWidth > 780 ? <Menu screen={"home"} /> : <MobileMenu />}
      <Main/>
    </div>
  );
}

export default App;
