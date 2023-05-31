import React from "react";
import Header from "./Components/Header";
import Fold from "./Components/Fold";
import Features from "./Components/Features";
import Integrations from "./Components/Integrations";
import CreateEvent from "./Components/CreateEvent";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Fold />
      <Features />
      <Integrations />
      <CreateEvent />
      <Footer />
    </div>
  );
}

export default App;
