import React from "react";
import styles from "./Menubar.module.css";

const Menubar = () => {
  return (
    <>
      <div id={styles.menuContentWrap}>
        <a href="/ingang">
          <div className={`${styles.menuBox}`}>
            <span id={styles.ingangIcon} className={styles.menuIcons}></span>
            <span className={styles.menuNames}>인강</span>
          </div>
        </a>
        <a href="/laundry">
          <div className={`${styles.menuBox}`}>
            <span id={styles.laundryIcon} className={styles.menuIcons}></span>
            <span className={styles.menuNames}>빨래</span>
          </div>
        </a>
        <a href="/stay">
          <div className={`${styles.menuBox}`}>
            <span id={styles.stayIcon} className={styles.menuIcons}></span>
            <span className={styles.menuNames}>잔류</span>
          </div>
        </a>
        <a href="/counsel">
          <div className={`${styles.menuBox}`}>
            <span id={styles.counselIcon} className={styles.menuIcons}></span>
            <span className={styles.menuNames}>상담</span>
          </div>
        </a>
        <a href="/afterschool">
          <div className={`${styles.menuBox}`}>
            <span
              id={styles.afterschoolIcon}
              className={styles.menuIcons}
            ></span>
            <span className={styles.menuNames}>방과후</span>
          </div>
        </a>
        <a href="/club">
          <div className={`${styles.menuBox}`}>
            <span id={styles.clubIcon} className={styles.menuIcons}></span>
            <span className={styles.menuNames}>동아리</span>
          </div>
        </a>
        <a href="/study">
          <div className={`${styles.menuBox}`}>
            <span id={styles.studyIcon} className={styles.menuIcons}></span>
            <span className={styles.menuNames}>자습관리</span>
          </div>
        </a>
        <a href="/dets">
          <div className={`${styles.menuBox}`}>DETS</div>
        </a>
      </div>
    </>
  );
};

export default Menubar;
