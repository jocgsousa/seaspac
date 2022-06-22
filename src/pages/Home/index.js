import React, { Component } from "react";

import { Container, Row, Col } from "./styles";

export default class Home extends Component {
  state = {};

  componentDidMount() {}

  render() {
    document.title = "SEASPAC - HOME";

    return (
      <Container>
        <Row flexDirection="row">
          <Col size={2} minHeight="100vh">
            <h2>Estrutura</h2>
          </Col>

          <Col size={10} minHeight="100vh" backgroundColor="#eee">
            <h2>Content</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}
