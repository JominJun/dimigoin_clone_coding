import React, { Component } from "react";
import axios from "axios";
import LoginForm from "./LoginForm";
import "./App.css";

class App extends Component {
  state = {
    isLogin: false,
    accessToken: "",
    refreshToken: "",
  };

  login = (data) => {
    axios
      .post("https://api.dimigo.in/auth/", {
        id: data.id,
        password: data.password,
      })
      .then((response) => {
        this.setState({
          isLogin: true,
          accessToken: response.data.token,
          refreshToken: response.data.refreshToken,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.isLogin == false) {
      return (
        <>
          <LoginForm onCreate={this.login} />
        </>
      );
    } else {
      return <>로그인 되었습니다</>;
    }
  }
}

export default App;
