import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/index"
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
