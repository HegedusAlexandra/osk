import "./App.css";
import ProductListContainer from "./components/ProductListContainer";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="app">
      <Menu/>
      <div className="headline">
        <h1>
          <span style={{ color: "white" }}>Deadlee Cereal </span>Webshop:
          <span style={{ color: "white" }}> As good you would die for it</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
