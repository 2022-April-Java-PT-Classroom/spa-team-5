import AppRouter from "./components/app-router";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import style from "./style.module.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
