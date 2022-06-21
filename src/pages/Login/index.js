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

export default class Login extends Component {
  state = {};

  componentDidMount() {}

  handleLogin = (event) => {
    event.preventDefault();
    alert("Login acionado");
  };

  render() {
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
            <Input type="text" required />
            <Input type="password" required />
          </BodyForm>
          <FooterForm>
            <ButtonSubmit type="submit">Entrar</ButtonSubmit>
          </FooterForm>
        </Form>
      </Container>
    );
  }
}
