
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import PageSwitch from "./components/app-router";
import React from "react";
import style from "./style.module.scss";

const App = () => {
  return (


    <BrowserRouter>
      <Header/>
      <div className={style.page}>
      <PageSwitch />
      <AppRouter/>
      <Footer/>
      </div>
    </BrowserRouter>
  )

};

export default App;
