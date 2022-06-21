import React, { Component } from "react";
import { RiSettings3Fill } from "react-icons/ri";
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

const ipc = window.require("electron").ipcRenderer;

export default class Login extends Component {
  state = {
    usuario: null,
    senha: null,
    api: "",
  };

  componentDidMount() {
    const api = ipc.sendSync("api", true);
    console.log(api);
  }

  handleLogin = (event) => {
    event.preventDefault();
    alert("Login acionado");
  };

  render() {
    const { usuario, senha } = this.state;
    return (
      <Container>
        <ButtonConfig type="button">
          <RiSettings3Fill size={20} color="#333" />
        </ButtonConfig>
        <Form onSubmit={this.handleLogin}>
          <HeaderForm>
            <h2>SEASPAC - LOGIN</h2>
          </HeaderForm>
          <BodyForm>
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
            <ButtonSubmit type="submit">Entrar</ButtonSubmit>
          </FooterForm>
        </Form>
      </Container>
    );
  }
}
