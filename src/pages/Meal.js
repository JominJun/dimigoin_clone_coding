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

  const beautifyMeal = (text) => {
    return text.replaceAll("/", " | ");
  };

  useEffect((mealInfo) => {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(parseInt(today.getMonth() + 1)); // 도대체 왜 1을 더해줘야 하는 거지 ??
    let day = today.getDate();

    axios
      .get(
        "https://dev-api.dimigo.in/dimibobs/" + year + "-" + month + "-" + day
      )
      .then((response) => {
        setMealInfo({
          ...mealInfo,
          breakfast: beautifyMeal(response.data.breakfast),
          lunch: beautifyMeal(response.data.lunch),
          dinner: beautifyMeal(response.data.dinner),
        });
      })
      .catch((error) => {
        setMealInfo({
          ...mealInfo,
          isError: true,
          errorStatusCode: error.response.status,
        });
      });
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
          <div className={`${styles.meal}`}>
            <p>클릭하여 복사하세요</p>
            <span className="meal">
              {mealInfo.isError ? "급식 정보가 없습니다" : mealInfo.breakfast}
            </span>
          </div>
        </div>
        <div
          id={styles.mealContentWrap}
          className={isLunch ? styles.selectedMealContentWrap : ""}
        >
          <div className={styles.mealTime}>점심</div>
          <div className={`${styles.meal}`}>
            <p>클릭하여 복사하세요</p>
            <span className="meal">
              {mealInfo.isError ? "급식 정보가 없습니다" : mealInfo.lunch}
            </span>
          </div>
        </div>
        <div
          id={styles.mealContentWrap}
          className={isDinner ? styles.selectedMealContentWrap : ""}
        >
          <div className={styles.mealTime}>저녁</div>
          <div className={`${styles.meal}`}>
            <p>클릭하여 복사하세요</p>
            <span className="meal">
              {mealInfo.isError ? "급식 정보가 없습니다" : mealInfo.dinner}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meal;
