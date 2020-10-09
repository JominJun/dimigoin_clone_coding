import React from "react";
import styles from "./Main.module.css";
import Meal from "./Meal";

const Main = (props) => {
  document.body.parentElement.setAttribute("id", "mainHTML"); // html의 id 설정
  document.body.setAttribute("id", "mainHTML"); // body의 id 설정
  document.getElementById("root").setAttribute("class", "mainHTML_ROOT");

  let accessToken = props.userInfo.accessToken;
  let refreshToken = props.userInfo.refreshToken;

  if (accessToken !== "" && refreshToken !== "") {
    return (
      <>
        <header id={styles.header}>
          <div id={styles.innerHeader}>
            <svg
              id={styles.logo}
              className={styles.headerMenu}
              data-v-5674a119=""
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 128 33"
            >
              <path
                data-v-5674a119=""
                d="M11 21.13H7.85A7.85 7.85 0 012.3 7.73a2.41 2.41 0 013.41 3.41 3 3 0 002.14 5.16h.77V2.41a2.42 2.42 0 014.83 0v16.3A2.42 2.42 0 0111 21.13zm10.6-2.42v-7.24a2.42 2.42 0 10-4.83 0v7.24a2.42 2.42 0 104.83 0zm-2-10.91a2.44 2.44 0 00.46-.14 3.23 3.23 0 00.41-.22 2.2 2.2 0 00.37-.3 2.69 2.69 0 00.3-.37 2.1 2.1 0 00.22-.42 2.35 2.35 0 00.14-.45 2.42 2.42 0 00.05-.47 2.45 2.45 0 00-.71-1.71 2.2 2.2 0 00-.37-.3 2.32 2.32 0 00-.41-.22 2.44 2.44 0 00-.46-.14 2.48 2.48 0 00-.94 0 2.35 2.35 0 00-.45.14 2.1 2.1 0 00-.42.22 3.47 3.47 0 00-.37.3 2.63 2.63 0 00-.29.37 2.16 2.16 0 00-.36.87 1.83 1.83 0 00-.05.47 1.83 1.83 0 00.05.47 2.32 2.32 0 00.13.45 2.13 2.13 0 00.23.42 2.06 2.06 0 00.29.37 2.5 2.5 0 002.18.66zm29.54-.24a7.86 7.86 0 00-11-.1 7.84 7.84 0 00-13.28 5.65V19a2.42 2.42 0 104.83 0v-5.9a3 3 0 016 0V19a2.42 2.42 0 104.83 0v-5.9a3 3 0 116 0V19a2.42 2.42 0 004.84 0v-5.9a7.83 7.83 0 00-2.17-5.54zm10.5 11.15v-7.24a2.42 2.42 0 10-4.83 0v7.24a2.42 2.42 0 104.83 0zm-2-10.91a2.15 2.15 0 00.45-.14 2.78 2.78 0 00.42-.22 2.69 2.69 0 00.37-.3 2.69 2.69 0 00.3-.37 2.1 2.1 0 00.22-.42 2.35 2.35 0 00.14-.45 2.23 2.23 0 000-.94 2.15 2.15 0 00-.14-.45 2.1 2.1 0 00-.22-.42 2.69 2.69 0 00-.3-.37 2.69 2.69 0 00-.37-.3 2.1 2.1 0 00-.42-.22 2.15 2.15 0 00-.45-.14 2.48 2.48 0 00-.94 0 2.35 2.35 0 00-.45.14 2.1 2.1 0 00-.42.22 2.69 2.69 0 00-.37.3 2.69 2.69 0 00-.3.37 2.78 2.78 0 00-.22.42 2.15 2.15 0 00-.14.45 2.5 2.5 0 00.66 2.18 2.69 2.69 0 00.37.3 2.78 2.78 0 00.42.22 2.35 2.35 0 00.45.14 2.78 2.78 0 00.94 0zm19.76 6.08v10.87a7.25 7.25 0 11-14.49 0 2.42 2.42 0 114.83 0 2.42 2.42 0 104.83 0V20.7a7.24 7.24 0 114.83-6.82zm-4.83 0a2.42 2.42 0 10-2.37 2.42 2.42 2.42 0 002.42-2.42zm22.34 0a7.25 7.25 0 10-7.25 7.25A7.25 7.25 0 0095 13.88zm-4.83 0a2.42 2.42 0 11-2.42-2.41 2.43 2.43 0 012.47 2.41z"
              ></path>
              <path
                data-v-5674a119=""
                d="M103.41 20.67a2.42 2.42 0 01-2.41-2.41V11a2.42 2.42 0 014.83 0v7.25a2.41 2.41 0 01-2.42 2.42zm.47-13.33a2.32 2.32 0 00.45-.13 2.13 2.13 0 00.42-.23 1.74 1.74 0 00.37-.3 2.6 2.6 0 00.3-.36 2.78 2.78 0 00.22-.42 2.35 2.35 0 00.14-.45 2.56 2.56 0 000-.47 2.42 2.42 0 000-.47 2.44 2.44 0 00-.14-.46 3.23 3.23 0 00-.22-.41 2.2 2.2 0 00-.3-.37 2.69 2.69 0 00-.37-.3 2.1 2.1 0 00-.42-.22 1.81 1.81 0 00-.45-.14 2.48 2.48 0 00-.94 0 1.69 1.69 0 00-.45.14 2.1 2.1 0 00-.42.22 2.69 2.69 0 00-.37.3 2.2 2.2 0 00-.3.37 2.32 2.32 0 00-.22.41 2.44 2.44 0 00-.14.46A2.42 2.42 0 00101 5a2.59 2.59 0 00.05.47 2.35 2.35 0 00.14.45 2.1 2.1 0 00.22.42 2.6 2.6 0 00.3.36 1.74 1.74 0 00.37.3 2.16 2.16 0 00.87.36 2.23 2.23 0 00.94 0zm21 11.07v-5.9a7.85 7.85 0 10-15.69 0v5.9a2.42 2.42 0 104.83 0v-5.9a3 3 0 013-3 3 3 0 012.14.89 3 3 0 01.88 2.13v5.9a2.42 2.42 0 104.83 0zm2.72 8.45a2.41 2.41 0 00-2.41-2.41h-24.5a2.42 2.42 0 000 4.83h24.46a2.41 2.41 0 002.41-2.42z"
                fill="#e83c3d"
              ></path>
            </svg>
            <div id={styles.headerMenuWrap}>
              <div className={`${styles.headerMenu}`}>인강실</div>

              <div className={`${styles.headerMenu}`}>외출</div>

              <div className={`${styles.headerMenu}`}>상담</div>

              <div className={`${styles.headerMenu}`}>멘토링</div>

              <div className={`${styles.headerMenu}`}>방과후</div>

              <div className={`${styles.headerMenu}`}>DETS</div>
            </div>
            <div id={styles.headerUserInfo}>
              <div className={`${styles.headerUserInfoProfile}`}></div>
              <div className={`${styles.headerUserInfoName}`}>
                {props.userInfo.name}
              </div>
              <div className={`${styles.headerUserInfoLogout}`}></div>
            </div>
          </div>
        </header>
        <div>
          <Meal
            caller="Main"
            mealInfo={props.mealInfo}
            isBreakfast={props.isBreakfast}
            isLunch={props.isLunch}
            isDinner={props.isDinner}
          />
        </div>
      </>
    );
  }

  return <></>;
};

export default Main;
