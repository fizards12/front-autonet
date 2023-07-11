import React, { useEffect, useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import PagesRoutes from "./PagesRoutes";

export const ModalContext = React.createContext({
  handleClose: () => {},
  handleShow: () => {},
  show: false,
});
class Screen {
  constructor() {
    this.xlargScreenWidth = 1920;
    this.largScreenWidth = 1200;
    this.mediumScreenWidth = 992;
    this.smallScreenWidth = 768;
    this.xSmallScreenWidth = 576;
  }
  isXLargScreen = (currentScreenWidth) =>
    currentScreenWidth < this.xlargScreenWidth;
  isLargScreen = (currentScreenWidth) =>
    currentScreenWidth < this.largScreenWidth;
  isMediumScreen = (currentScreenWidth) =>
    currentScreenWidth < this.mediumScreenWidth;
  isSmallScreen = (currentScreenWidth) =>
    currentScreenWidth < this.smallScreenWidth;
  isXSmallScreen = (currentScreenWidth) =>
    currentScreenWidth < this.xSmallScreenWidth;
}
export const screen = new Screen();

export const screenContext = React.createContext({
  currentScreenWidth: 1920,
  screen: {},
});
function App() {
  const [currentScreenWidth, setCurrentScreenWidth] = useState(1920);
  const getSize = () => {
    setCurrentScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.onload = getSize;
    window.onresize = getSize;
    return () => {
      window.onload = window.onresize = () => {};
    };
  }, []);
  return (
    <screenContext.Provider
      value={{
        currentScreenWidth: currentScreenWidth,
        screen: screen,
      }}
    >
      <Provider store={store}>
        <Router>
          <PagesRoutes />
        </Router>
      </Provider>
      <p className="bg-dark text-white">{currentScreenWidth}</p>
    </screenContext.Provider>
  );
}

export default App;
