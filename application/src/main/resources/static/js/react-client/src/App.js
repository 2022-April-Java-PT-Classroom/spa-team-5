<<<<<<< HEAD
import Fish from "./components/fish";
=======
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import PageSwitch from "./components/app-router";
>>>>>>> 2962609779bb7cb2a14dddd8a4731fc95c95583c
import React from "react";
import style from "./style.module.scss";

const App = () => {
<<<<<<< HEAD
  return;
  <div>
    <Fish />
  </div>;
=======
  return (
    <BrowserRouter>
      <Header/>
      <div className={style.page}>
      <PageSwitch />
      <Footer/>
      </div>
    </BrowserRouter>
  )
>>>>>>> 2962609779bb7cb2a14dddd8a4731fc95c95583c
};

export default App;
