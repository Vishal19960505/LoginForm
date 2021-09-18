import React, { useState } from "react";
class Hook1 extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: null,
      userPassword: null,
      Status1: null,
    };
  }
  login() {
    if (
      this.state.userName.toString() === "admin" &&
      this.state.userPassword.toString() === "pass"
    ) {
      this.setState({ Status1: "Welcome : " + this.state.userName.toString() });
    } else {
      this.setState({
        Status1: this.state.userName.toString() + " not Authorized ",
      });
    }
  }
  render() {
    return (
      <div>
        <center>
          <h1>Authentication Form</h1>
          <br />
          <br />
          <input
            type="text"
            name="userName"
            placeholder="Username.."
            onChange={(e) => {
              this.setState({ userName: e.target.value });
            }}
          />
          <br />
          <br />
          <input
            type="text"
            name="userPassword"
            placeholder="Password.."
            onChange={(e) => {
              this.setState({ userPassword: e.target.value });
            }}
          />
          <br />
          <br />
          <input
            type="button"
            value="Login"
            name="userName"
            onClick={() => {
              this.login();
            }}
          />
          <br />
          <br />
          <p>
            <h1>{this.state.Status1}</h1>
          </p>
        </center>
      </div>
    );
  }
}
export default Hook1;
