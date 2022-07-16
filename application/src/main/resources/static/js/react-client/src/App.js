<<<<<<< HEAD

=======
>>>>>>> bc693cd (edit to draft)
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import PageSwitch from "./components/app-router";
import React from "react";
import style from "./style.module.scss";

const App = () => {
  return (
<<<<<<< HEAD


    <BrowserRouter>
      <Header/>
      <div className={style.page}>
      <PageSwitch />
      <AppRouter/>
      <Footer/>
      </div>
    </BrowserRouter>
  )

=======
    <BrowserRouter>
      <Header />
      <div className={style.page}>
        <PageSwitch />
        <Footer />
      </div>
    </BrowserRouter>
  );
>>>>>>> bc693cd (edit to draft)
};

export default App;
