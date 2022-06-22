import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Config from "./pages/Config";
import Base from "./pages/Base";

export default class App extends Component {
  state = {
    login: true,
    home: false,
    config: false,
    base: false,
  };

  componentDidMount() {
    const credentials = JSON.parse(localStorage.getItem("credentials"));

    if (credentials && credentials.user.root) {
      this.setState({
        home: false,
        login: false,
        config: false,
        base: true,
      });
    } else if (credentials && !credentials.user.root) {
      this.setState({
        home: true,
        login: false,
        config: false,
        base: false,
      });
    } else {
      this.setState({
        login: true,
        home: false,
        config: false,
        base: false,
      });
    }
  }

  handlePage = (page) => {
    this.setState({
      ...page,
    });
  };

  render() {
    const { login, home, config, base } = this.state;

    return (
      <>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {login && <Login page={this.handlePage} />}
        {home && <Home page={this.handlePage} />}
        {config && <Config page={this.handlePage} />}
        {base && <Base page={this.handlePage} />}
      </>
    );
  }
}
