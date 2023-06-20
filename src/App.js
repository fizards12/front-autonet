import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import PagesRoutes from "./PagesRoutes";

export const ModalContext = React.createContext({
  handleClose: () => {},
  handleShow: () => {},
  show: false,
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PagesRoutes />
      </Router>
    </Provider>
  );
}

export default App;
