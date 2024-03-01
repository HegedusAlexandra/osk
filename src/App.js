import "./App.css";
import Menu from "./components/Menu";
import Clouds from "./components/Clouds";
import noc from './assets/pictures/no_cloud_2.png'
import bridge from './assets/pictures/bridge3.png'

function App() {
  return (
    <div className="absolute flex flex-col justify-between items-center w-[100%] h-min-[500vh] h-fit bg-gradient-to-br from-sky-200 to-sky-500 overflow-hidden">
      <Menu/>
      <Clouds />
      <div className="w-[100%] h-[400vh]">
      <div className="absolute flex justify-center w-[100%] h-[100vh]">
        <img src={bridge} className="absolute z-1 w-[100vw] top-[11vh] opacity-[50%]"/>     
        <img src={noc} className="absolute z-2 h-[80vh] top-[20vh] left-[10vh] uppercase"/>    
        <h1 className="mt-[20vh]">OMASKLEIDERSCHRANK FOR THOSE WHO LOVE FASHION AND HAVE CREATIVITY</h1> 
      </div>
      </div>
    </div>
  );
}

export default App;
