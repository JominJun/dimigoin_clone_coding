import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./Login.module.css";
import Main from "./Main";
import Meal from "./Meal";

const Login = () => {
  const [status, setStatus] = useState({
    isLogin: false,
    isLoading: false,
    isError: false,
    errorStatusCode: "",
  });

  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
    name: "",
    grade: "",
    klass: "",
    number: "",
    serial: "",
    email: "",
    accessToken: "",
    refreshToken: "",
  });

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

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const prelogin = () => {
    // 로딩 중이 아니며 로그인하지 않았다면
    if (!status.isLoading && !status.isLogin && !status.isError) {
      setStatus({ ...status, isLoading: true });
      login();
    }
  };

  const login = async () => {
    await axios
      .post("https://api.dimigo.in/auth/", {
        id: userInfo.id,
        password: userInfo.pw,
      })
      .then((response) => {
        setStatus({
          ...status,
          isLogin: true,
          isLoading: false,
        });

        setUserInfo({
          ...userInfo,
          accessToken: response.data.token,
          refreshToken: response.data.refresh_token,
        });
      })
      .catch((error) => {
        setStatus({
          ...status,
          isError: true,
          errorStatusCode: error.response.status,
          isLoading: false,
        });
      });
  };

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

  if (status.isLoading) {
    return (
      <>
        <CircularProgress color="secondary" />
      </>
    );
  }

  if (status.isError) {
    if (status.errorStatusCode === 404) {
      return <>아이디 또는 패스워드가 일치하지 않습니다</>;
    }
    return <>Error: {status.errorStatusCode}</>;
  }

  if (status.isLogin) {
    var date = new Date();
    date.setDate(date.getDate() + 1); // 1일 후 만료

    document.cookie = `accessToken=${
      userInfo.accessToken
    };Expires=${date.toUTCString()};Secure)`;

    document.cookie = `refreshToken=${
      userInfo.refreshToken
    };Expires=${date.toUTCString()};Secure)`;
  }

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

  if (
    getCookieValue("accessToken") !== "" &&
    getCookieValue("refreshToken") !== ""
  ) {
    axios({
      method: "get",
      url: "https://api.dimigo.in/user/jwt/",
      headers: { Authorization: "Bearer " + getCookieValue("accessToken") },
    })
      .then((response) => {
        setUserInfo({
          ...userInfo,
          name: response.data.name,
          grade: response.data.grade,
          klass: response.data.klass,
          number: response.data.number,
          serial: response.data.serial,
          email: response.data.email,
          accessToken: getCookieValue("accessToken"),
          refreshToken: getCookieValue("refreshToken"),
        });
      })
      .catch((error) => {
        setUserInfo({
          ...userInfo,
          accessToken: getCookieValue("accessToken"),
          refreshToken: getCookieValue("refreshToken"),
        });
      });

    return (
      <Main
        userInfo={userInfo}
        mealInfo={mealInfo}
        isBreakfast={isBreakfast}
        isLunch={isLunch}
        isDinner={isDinner}
      />
    );
  }

  return (
    <div id={styles.wrapBox}>
      <div id={styles.loginBox}>
        <div id={styles.logoBox}>
          <svg
            id={styles.logo}
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
        </div>
        <div id={styles.loginArea}>
          <form
            id={styles.loginForm}
            name="LoginForm"
            method="POST"
            onSubmit={prelogin}
          >
            <input
              id={styles.id}
              className={styles.inputText}
              name="id"
              type="text"
              placeholder="아이디"
              autoComplete="off"
              onChange={handleChange}
            />
            <input
              id={styles.pw}
              className={styles.inputText}
              name="pw"
              type="password"
              placeholder="비밀번호"
              onChange={handleChange}
            />
            <button id={styles.submitButton} type="submit">
              로그인
            </button>
          </form>
        </div>
      </div>

      <Meal
        mealInfo={mealInfo}
        isBreakfast={isBreakfast}
        isLunch={isLunch}
        isDinner={isDinner}
      />
    </div>
  );
};

export default Login;
