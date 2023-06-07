import React from "react";
import { Provider } from "react-redux";
import store from "./Components/Store";
import Header from "./Components/Header";
import Fold from "./Components/Fold";
import Features from "./Components/Features";
import Integrations from "./Components/Integrations";
import CreateEvent from "./Components/CreateEvent";
import Footer from "./Components/Footer";

import "./App.css";

const App = () => {
  return (
    <Provider className="App" store={store}>
      <Header />
      <Fold />
      <Features />
      <Integrations />
      <CreateEvent />
      <Footer />
    </Provider>
  );
};

export default App;
