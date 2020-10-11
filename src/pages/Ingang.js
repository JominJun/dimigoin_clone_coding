import React from "react";
import Header from "./Header";
import Menubar from "./Menubar";
import styles from "./Ingang.module.css";

const Ingang = () => {
  document.body.parentElement.setAttribute("id", "mainHTML");
  document.body.setAttribute("id", "mainHTML");
  document.getElementById("root").setAttribute("class", "mainHTML_ROOT");

  return (
    <>
      <Header />
      <div id={styles.menuWrap}>
        <Menubar />
      </div>
      인강
    </>
  );
};

export default Ingang;
