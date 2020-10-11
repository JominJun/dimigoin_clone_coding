import React from "react";
import styles from "./Menubar.module.css";

const Menubar = () => {
  return (
    <>
      <div id={styles.menuContentWrap}>
        <a href="/ingang">
          <div className={`${styles.menuBox}`}>인강</div>
        </a>
        <a href="/laundry">
          <div className={`${styles.menuBox}`}>빨래</div>
        </a>
        <a href="/stay">
          <div className={`${styles.menuBox}`}>잔류</div>
        </a>
        <a href="/counsel">
          <div className={`${styles.menuBox}`}>상담</div>
        </a>
        <a href="/afterschool">
          <div className={`${styles.menuBox}`}>방과후</div>
        </a>
        <a href="/club">
          <div className={`${styles.menuBox}`}>동아리</div>
        </a>
        <a href="/study">
          <div className={`${styles.menuBox}`}>자습</div>
        </a>
        <a href="/dets">
          <div className={`${styles.menuBox}`}>DETS</div>
        </a>
      </div>
    </>
  );
};

export default Menubar;
