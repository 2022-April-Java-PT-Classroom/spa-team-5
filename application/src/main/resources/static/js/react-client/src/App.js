
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import PageSwitch from "./components/app-router";
import Fish from "./components/fish";
import React from "react";
import style from "./style.module.scss";


  return (
    <BrowserRouter>
      <Header/>
      <div className={style.page}>
      <PageSwitch />
      <Fish/>
      <Footer/>
      </div>
    </BrowserRouter>
  )

};

export default App;
