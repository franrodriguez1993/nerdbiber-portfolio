import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Accesories/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
