import React, { Component } from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import PropTypes from "prop-types";
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
    usuario: null,
    senha: null,
    api: "",
  };

  componentDidMount() {}

  handleLogin = (event) => {
    event.preventDefault();
    alert("Login acionado");
  };

  render() {
    const { usuario, senha, api } = this.state;
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
              value={usuario}
              onChange={(e) => this.setState({ usuario: e.target.value })}
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
            <ButtonSubmit type="submit">Salvar</ButtonSubmit>
          </FooterForm>
        </Form>
      </Container>
    );
  }
}

Config.propTypes = {
  page: PropTypes.func.isRequired,
};
