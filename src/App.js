import React, { Component } from "react";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Config from "./pages/Config";

export default class App extends Component {
  state = {
    login: true,
    home: false,
    config: false,
  };

  componentDidMount() {}

  handlePage = (page) => {
    this.setState({
      ...page,
    });
  };

  render() {
    const { login, home, config } = this.state;

    return (
      <>
        {login && <Login />}
        {home && <Home />}
        {config && <Config />}
      </>
    );
  }
}
