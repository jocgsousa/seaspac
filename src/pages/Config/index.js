import React, { Component } from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import PropTypes from "prop-types";
import { ClassicSpinner } from "react-spinners-kit";
import { toast } from "react-toastify";
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

export default class Config extends Component {
  state = {
    username: null,
    password: null,
    api: "",
    error: "",
    loading: false,
  };

  componentDidMount() {
    const api = JSON.parse(localStorage.getItem("api"));
    if (api) {
      this.setState({
        api: api.api,
      });
    }
  }

  handleLogin = async (event) => {
    event.preventDefault();
    const { api, username, password } = this.state;
    const { page } = this.props;

    this.setState({ loading: true });
    const data = {
      username,
      password,
    };
    await axios
      .post(`${api}/session`, data)
      .then((response) => {
        if (!response.data.user.root) {
          toast.error("Operação não autorizada!", {
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
          const apiConfig = { api };
          localStorage.setItem("api", JSON.stringify(apiConfig));
          toast.success("Salvo com sucesso!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          page({
            login: true,
            home: false,
            config: false,
            base: false,
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.error, {
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

    this.setState({ loading: false });
  };

  render() {
    const { username, password, api, error, loading } = this.state;
    const { page } = this.props;

    return (
      <Container>
        <ButtonConfig
          type="button"
          onClick={() =>
            page({
              login: true,
              home: false,
              config: false,
            })
          }
        >
          <RiLoginBoxLine size={20} />
        </ButtonConfig>

        {loading ? (
          <ClassicSpinner size={35} color="#fff" />
        ) : (
          <Form onSubmit={this.handleLogin}>
            <HeaderForm>
              <h2>Configurações</h2>
            </HeaderForm>
            <BodyForm>
              <Input
                type="text"
                required
                placeholder="API"
                value={api}
                onChange={(e) => this.setState({ api: e.target.value })}
              />
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
              <ButtonSubmit type="submit">Salvar</ButtonSubmit>
              {error && <h3>{error}</h3>}
            </FooterForm>
          </Form>
        )}
      </Container>
    );
  }
}

Config.propTypes = {
  page: PropTypes.func.isRequired,
};
