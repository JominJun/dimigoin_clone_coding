import React from "react";
import styles from "./Login.module.css";

const Meal = (props) => {
  return (
    <>
      <div id={styles.mealBox} style={{ marginTop: "50px" }}>
        <div
          id={styles.mealContentWrap}
          className={props.isBreakfast ? styles.selectedMealContentWrap : ""}
        >
          <div className={styles.mealTime}>아침</div>
          <div className={styles.meal}>
            {props.mealInfo.isError
              ? "급식 정보가 없습니다"
              : props.mealInfo.breakfast}
          </div>
        </div>
        <div
          id={styles.mealContentWrap}
          className={props.isLunch ? styles.selectedMealContentWrap : ""}
        >
          <div className={styles.mealTime}>점심</div>
          <div className={styles.meal}>
            {props.mealInfo.isError
              ? "급식 정보가 없습니다"
              : props.mealInfo.lunch}
          </div>
        </div>
        <div
          id={styles.mealContentWrap}
          className={props.isDinner ? styles.selectedMealContentWrap : ""}
        >
          <div className={styles.mealTime}>저녁</div>
          <div className={styles.meal}>
            {props.mealInfo.isError
              ? "급식 정보가 없습니다"
              : props.mealInfo.dinner}
          </div>
        </div>
      </div>
    </>
  );
};

export default Meal;
