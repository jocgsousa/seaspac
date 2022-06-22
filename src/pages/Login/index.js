import React, { Component } from "react";
import { RiSettings3Fill } from "react-icons/ri";
import PropTypes from "prop-types";
import { ClassicSpinner } from "react-spinners-kit";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Container,
  Form,
  HeaderForm,
  BodyForm,
  FooterForm,
  Input,
  ButtonSubmit,
  ButtonConfig,
} from "./styles";

// const ipc = window.require("electron").ipcRenderer;

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    loading: false,
  };

  componentDidMount() {}

  handleLogin = async (event) => {
    console.log("login acionado");

    const { page } = this.props;
    event.preventDefault();

    // GET API
    const api = JSON.parse(localStorage.getItem("api")) || false;
    const { username, password } = this.state;
    if (api) {
      this.setState({
        loading: true,
      });
      // REQUEST - POST - SESSION
      const data = {
        username,
        password,
      };

      await axios
        .post(`${api.api}/session`, data)
        .then((response) => {
          localStorage.setItem("credentials", JSON.stringify(response.data));

          if (response.data.user.root) {
            page({
              login: false,
              home: false,
              config: false,
              base: true,
            });
          } else {
            page({
              login: false,
              home: true,
              config: false,
              base: false,
            });
          }
        })
        .catch((err) => {
          if (err.response.data) {
            toast.error(err.response.data.error, {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            toast.warn("Falha de conexão", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        });
      this.setState({
        loading: false,
      });
    } else {
      toast.warn("Sem dados de API", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  render() {
    const { username, password, loading } = this.state;
    const { page } = this.props;
    document.title = "SEASPAC - LOGIN";
    return (
      <Container>
        <ButtonConfig
          type="button"
          onClick={() =>
            page({
              login: false,
              home: false,
              config: true,
            })
          }
        >
          <RiSettings3Fill size={20} />
        </ButtonConfig>

        {loading ? (
          <ClassicSpinner size={35} color="#fff" />
        ) : (
          <Form onSubmit={this.handleLogin}>
            <HeaderForm>
              <h2>LOGIN</h2>
            </HeaderForm>
            <BodyForm>
              <Input
                type="text"
                required
                placeholder="Usuário"
                value={username}
                onChange={(e) => this.setState({ username: e.target.value })}
              />
              <Input
                type="password"
                required
                placeholder="Senha"
                value={password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </BodyForm>
            <FooterForm>
              <ButtonSubmit type="submit">Entrar</ButtonSubmit>
            </FooterForm>
          </Form>
        )}
      </Container>
    );
  }
}

Login.propTypes = {
  page: PropTypes.func.isRequired,
};
