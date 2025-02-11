import React from "react";
import { createRoot } from 'react-dom/client';
import imag from "/assets/Cristiano_Ronaldo.jpg";
import Login from "./pages/Login";
import 'antd/dist/antd.less';

function App() {
  return (
    <div>
      <h1>Hello from React in Electron!</h1>
      <img srcSet={imag} style={{ height: 100, width: 70 }} />
      <Login />
    </div>
  );
}

createRoot(document.getElementById("app")).render(<App />, );
