import React, { Component } from "react";
import { RiSettings3Fill } from "react-icons/ri";
import PropTypes from "prop-types";
import { ClassicSpinner } from "react-spinners-kit";
import axios from "axios";
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
    username: null,
    senha: null,
    api: "",
    loading: false,
    errorApi: false,
  };

  componentDidMount() {}

  handleLogin = async (event) => {
    console.log("login acionado");

    const { page } = this.props;
    event.preventDefault();

    // GET API
    const api = localStorage.getItem("api");
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
        .post(`${api.url}/session`, data)
        .then((response) => {
          localStorage.setItem("credentials", JSON.stringify(response.data));

          page({
            login: false,
            home: true,
            config: false,
          });
        })
        .catch((err) => {
          if (err.response.data) {
            window.alert(err.response.data);
          } else {
            window.alert("Falha de conexão");
          }
        });
      this.setState({
        loading: false,
      });
    } else {
      this.setState({
        errorApi: true,
      });
    }
  };

  render() {
    const { username, senha, loading, errorApi } = this.state;
    const { page } = this.props;

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
          <ClassicSpinner size={40} color="white" />
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
                value={senha}
                onChange={(e) => this.setState({ senha: e.target.value })}
              />
            </BodyForm>
            <FooterForm>
              <ButtonSubmit type="submit">Entrar</ButtonSubmit>
              {errorApi && <h3>SEM API</h3>}
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
