import React from "react";
import { createRoot } from "react-dom/client";
import imag from "/assets/Cristiano_Ronaldo.jpg";
import Login from "./pages/Login";
import "antd/dist/antd.less";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./store";
import AppRoute from "./AppRoute";
import MainLayout from "./Layout/MainLayout";
import './styles/app.less'

const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <div>
          <h1>Hello from React in Electron!</h1>
          <Login />
          </div> */}
          <img srcSet={imag} style={{ height: 100, width: 70,  }} />
          <AppRoute />
        {/* </MainLayout> */}
      </PersistGate>
    </Provider>
  );
}

createRoot(document.getElementById("app")).render(<App />);
