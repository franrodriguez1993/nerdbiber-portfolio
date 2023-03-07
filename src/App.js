import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Accesories/Navbar";
import UpButton from "./components/Accesories/UpButton";

function App() {
  const [showButtom, SetShowButton] = useState(false);

  /** UP BUTTOM **/
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? SetShowButton(true) : SetShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="outlet">
        <Outlet />
      </div>

      {showButtom && (
        <div className={`scrollToTop`}>
          <UpButton />
        </div>
      )}
    </div>
  );
}

export default App;
