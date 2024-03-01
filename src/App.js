import "./App.css";
import Menu from "./components/Menu";
import Clouds from "./components/Clouds";
import noc from "./assets/pictures/no_cloud_2.png";
import bridge from "./assets/pictures/bridge3.png";
import ActualCampaign from "./components/ActualCampaign";

function App() {
  return (
    <div className="absolute flex flex-col justify-between items-center w-[100%] h-min-[500vh] h-fit bg-gradient-to-br from-sky-200 to-sky-500 overflow-hidden">
      <Menu />
      <Clouds />
      <div className="w-[100%] h-[400vh]">
        <div className="flex flex-col items-center w-[100%] h-[100vh] pt-[18vh]">
          <h2 className="font-bebas text-[14vh]">OMASKLEIDERSCHRANK</h2>
          <h1 className="font-bebas text-[4vh]">
            FOR THOSE WHO LOVE FASHION AND HAVE CREATIVITY
          </h1>
          <button className="absolute z-10 top-[60vh] w-[6vw] h-[4vh] uppercase font-afacad text-white font-montserrat font-bold bg-sky-800 opacity-100">
            Shop
          </button>
          <img
            src={bridge}
            className="absolute z-1 w-[100vw] top-[11vh] opacity-[50%]"
          />
          <img
            src={noc}
            className="absolute z-2 h-[80vh] top-[20vh] left-[10vh] uppercase"
          />
        </div>
        <div className="flex justify-center items-center absolute z-3 w-[100%] h-[41vh] bg-orange-100 top-[99.5vh] text-[4vh] font-montserrat text-orange-950 font-bold">
          LUXURY SECONDHAND BOUTIQUE <br/> IN THE HEART OF ILLERTISSEN
          <br/>
          AFFORDABLE AND SOPHISTICATED
        </div>
      </div>
    </div>
  );
}

export default App;
