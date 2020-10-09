import React, { useEffect, useState } from "react";
import axios from "axios";
import loginStyles from "./Login.module.css";
import mainStyles from "./Main.module.css";

const Meal = (props) => {
  const [mealInfo, setMealInfo] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
    isError: false,
    errorStatusCode: "",
  });

  useEffect((mealInfo) => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();

    axios
      .get(
        "https://dev-api.dimigo.in/dimibobs/" + year + "-" + month + "-" + day
      )
      .then((response) => {
        setMealInfo({
          ...mealInfo,
          breakfast: response.data.breakfast,
          lunch: response.data.lunch,
          dinner: response.data.dinner,
        });
      })
      .catch((error) => {
        setMealInfo({
          ...mealInfo,
          isError: true,
          errorStatusCode: error.response.status,
        });
      });

    document.body.parentElement.setAttribute("id", "bgHTML"); // html의 id 설정
    document.body.setAttribute("id", "bgHTML"); // body의 id 설정
    document.getElementById("root").setAttribute("class", "bgHTML_ROOT");
  }, []);

  let today = new Date();
  let hour = today.getHours();

  let isBreakfast = false,
    isLunch = false,
    isDinner = false;

  if (6 <= hour && hour <= 8) {
    isBreakfast = true;
    isLunch = false;
    isDinner = false;
  }
  if (9 <= hour && hour <= 13) {
    isBreakfast = false;
    isLunch = true;
    isDinner = false;
  }
  if (14 <= hour && hour <= 20) {
    isBreakfast = false;
    isLunch = false;
    isDinner = true;
  }

  let styles = "";

  if (props.caller === "Login") {
    styles = loginStyles;
  } else if (props.caller === "Main") {
    styles = mainStyles;
  }

  return (
    <>
      <div id={styles.mealBox}>
        <div
          id={styles.mealContentWrap}
          className={isBreakfast ? styles.selectedMealContentWrap : ""}
        >
          <div className={styles.mealTime}>아침</div>
          <div className={styles.meal}>
            {mealInfo.isError ? "급식 정보가 없습니다" : mealInfo.breakfast}
          </div>
        </div>
        <div
          id={styles.mealContentWrap}
          className={isLunch ? styles.selectedMealContentWrap : ""}
        >
          <div className={styles.mealTime}>점심</div>
          <div className={styles.meal}>
            {mealInfo.isError ? "급식 정보가 없습니다" : mealInfo.lunch}
          </div>
        </div>
        <div
          id={styles.mealContentWrap}
          className={isDinner ? styles.selectedMealContentWrap : ""}
        >
          <div className={styles.mealTime}>저녁</div>
          <div className={styles.meal}>
            {mealInfo.isError ? "급식 정보가 없습니다" : mealInfo.dinner}
          </div>
        </div>
      </div>
    </>
  );
};

export default Meal;
