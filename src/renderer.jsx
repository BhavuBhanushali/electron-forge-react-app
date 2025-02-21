import React from "react";
import { createRoot } from "react-dom/client";
import imag from "/assets/Cristiano_Ronaldo.jpg";
import Login from "./pages/Login";
import "antd/dist/antd.less";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from './store';

const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Hello from React in Electron!</h1>
          <img srcSet={imag} style={{ height: 100, width: 70 }} />
          <Login />
        </div>
      </PersistGate>
    </Provider>
  );
}

createRoot(document.getElementById("app")).render(<App />);
