import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.min.css";
import { Provider } from "react-redux";
import configureStore from "./page/store/index";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

const AppWithRouter = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
ReactDOM.render(<AppWithRouter />, document.getElementById("root"));
