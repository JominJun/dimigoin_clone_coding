import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    id: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);

    this.setState({
      id: "",
      password: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="아이디"
          value={this.state.id}
          onChange={this.handleChange}
          name="id"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={this.state.password}
          onChange={this.handleChange}
          name="password"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default LoginForm;
