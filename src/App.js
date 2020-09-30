import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./App.css";

const App = () => {
  const [status, setStatus] = useState({
    isLogin: false,
    isLoading: false,
    isError: false,
    errorStatusCode: "",
  });

  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
    accessToken: "",
    refreshToken: "",
  });

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
    const data = await axios
      .post("https://api.dimigo.in/auth/", {
        id: userInfo.id,
        password: userInfo.pw,
      })
      .then((response) => {
        console.log("로그인 성공");
        setStatus({ ...status, isLogin: true, isLoading: false });
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
    return <>로그인 함</>;
  }

  return (
    <>
      <form name="LoginForm" onSubmit={prelogin}>
        <input
          name="id"
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={handleChange}
        />
        <input
          name="pw"
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleChange}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
};

export default App;
