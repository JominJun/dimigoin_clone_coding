import React from "react";
import styles from "./Main.module.css";
import Header from "./Header";
import Meal from "./Meal";
import Menubar from "./Menubar";
import dimigoPNG from "../images/dimigo.png";
import councilPNG from "../images/council.png";
import beneduPNG from "../images/benedu.png";
import dimigoLifePNG from "../images/dimigolife.svg";

const Main = (props) => {
  const getCookieValue = (key) => {
    let cookieKey = key + "=";
    let result = "";
    const cookieArr = document.cookie.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
      if (cookieArr[i][0] === " ") {
        cookieArr[i] = cookieArr[i].substring(1);
      }

      if (cookieArr[i].indexOf(cookieKey) === 0) {
        result = cookieArr[i].slice(cookieKey.length, cookieArr[i].length);
        return result;
      }
    }
    return result;
  };

  document.body.parentElement.setAttribute("id", "mainHTML");
  document.body.setAttribute("id", "mainHTML");
  document.getElementById("root").setAttribute("class", "mainHTML_ROOT");

  let accessToken = getCookieValue("accessToken");
  let refreshToken = getCookieValue("refreshToken");

  if (accessToken !== "" && refreshToken !== "") {
    return (
      <>
        <Header />

        <div id={`${styles.contentWrap}`}>
          <div id={`${styles.noticeWrap}`}>
            <div
              className={`${styles.noticeBox} ${styles.noticeBoxBottomMargin}`}
            >
              <div className={`${styles.noticeTitle}`}>
                Go언어는 진짜 빨라요
              </div>
              <div className={`${styles.noticeContent}`}>
                ㄹㅇ C++이랑 Java를 압도하네요
              </div>
            </div>

            <div
              className={`${styles.noticeBox} ${styles.noticeBoxBottomMargin}`}
            >
              <div className={`${styles.noticeTitle}`}>
                교내최고동아리 Aperture
              </div>
              <div className={`${styles.noticeContent}`}>
                한글로는 애퍼처라고 적는답니다 *^^*
              </div>
            </div>

            <div className={`${styles.noticeBox}`}>
              <div className={`${styles.noticeTitle}`}>
                이 이모티콘 너무 귀엽지 않나요?
              </div>
              <div className={`${styles.noticeContent}`}>
                ㅇ~ㅇ 전 너무 귀엽다고 생각해요 ㅇ~ㅇ
              </div>
            </div>
          </div>

          <Meal caller="Main" />
        </div>

        <div id={styles.menuWrap}>
          <div id={styles.menuLinkWrap}>
            <a href="https://www.dimigo.hs.kr">
              <img
                id={styles.dimigo}
                className={styles.linkIcons}
                src={dimigoPNG}
                alt="dimigo"
                title="dimigo"
              />
            </a>

            <a href="https://www.facebook.com/dimigocouncil/">
              <img
                id={styles.council}
                className={styles.linkIcons}
                src={councilPNG}
                alt="council"
                title="council"
              />
            </a>

            <a href="https://www.benedu.co.kr/">
              <img
                id={styles.benedu}
                className={styles.linkIcons}
                src={beneduPNG}
                alt="benedu"
                title="benedu"
              />
            </a>

            <a href="https://dimigo.life/">
              <img
                id={styles.dimigoLife}
                className={styles.linkIcons}
                src={dimigoLifePNG}
                alt="dimigoLife"
                title="dimigoLife"
              />
            </a>
          </div>
          <div id={styles.menubarWrap}>
            <Menubar />
          </div>
        </div>

        <div id={styles.contentBottomWrap}>
          <div id={styles.scheduleWrap}>신청현황</div>
        </div>
      </>
    );
  }

  window.location.reload();
  return <></>;
};

export default Main;
