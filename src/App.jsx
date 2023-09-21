import "./App.css";
import LineChart from "./components/LineChart/LineChart";
import Nav from "./components/Nav/Nav";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
    {/* <NavBar></NavBar> */}
    <Nav></Nav>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    
    </>
  );
}

export default App;
