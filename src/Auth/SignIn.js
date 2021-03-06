import React, { Component } from "react";
import "../stylesheets/Auth.css";
import axios from "axios";
import { base_url } from "../config";

export default class Auth extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  login = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${base_url}/api/user/login`,
      data: {
        username: this.state.username,
        password: this.state.password,
      },
    })
      .then((data) => {
        window.localStorage.setItem("access_token", data.data);
        // window.localStorage.setItem("userId", data.data.id);
        window.location.href = "/";
      })
      .catch((err) => {
        if (err)
          this.setState({ error: "Your username or password is incorrect" });
        else this.setState({ error: "" });
      });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="sign_in">
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header ">
                <h3>Sign In</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span>
                    <i className="fab fa-facebook-square"></i>
                  </span>
                  <span>
                    <i className="fab fa-google-plus-square"></i>
                  </span>
                  <span>
                    <i className="fab fa-twitter-square"></i>
                  </span>
                </div>
              </div>
              <div className="card-body ">
                <form onSubmit={this.login}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="username"
                      name="username"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      name="password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="row align-items-center remember"></div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>

                <div className="text-center text-warning">
                  {" "}
                  {this.state.error}
                </div>
              </div>
              <div className="card-footer ">
                <div className="d-flex justify-content-center links">
                  Don't have an account?
                  <a href="/sign_up">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
