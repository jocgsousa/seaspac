import React, { Component } from "react";
import { FcAddDatabase, FcDatabase } from "react-icons/fc";
import {
  MdClose,
  MdCheck,
  MdArrowDropDown,
  MdArrowDropUp,
  MdSupervisorAccount,
} from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Container,
  Row,
  Col,
  Button,
  Line,
  Input,
  FormNewProject,
  Section,
  Close,
  Save,
  ListSections,
  DivOp,
  Op,
  SectionsDep,
} from "./styles";

export default class Base extends Component {
  state = {
    newproject: false,
    sections: [],
    name: "",
  };

  componentDidMount() {
    this.handleListDeps();
  }

  handleListDeps = async () => {
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    const api = JSON.parse(localStorage.getItem("api"));

    await axios
      .get(`${api.api}/section`, {
        headers: {
          Authorization: `Bearer ${credentials.token}`,
        },
      })
      .then((response) => {
        this.setState({
          sections: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.warn("Falha ao recuperar informações!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  handleSaveNewDep = async (e) => {
    e.preventDefault();
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    const api = JSON.parse(localStorage.getItem("api"));
    const { name } = this.state;
    const data = {
      name,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${credentials.token}`,
      },
    };

    await axios
      .post(`${api.api}/departamento`, data, config)
      .then((response) => {
        toast.success(response.data.message, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        this.setState({
          name: "",
          newproject: false,
        });
        this.handleListDeps();
      })
      .catch((error) => {
        console.log(error);
        toast.warn(error.response.data.error, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  handleShowSections = (index) => {
    const divDown = document.getElementById(`opDown${index}`);
    const div = document.getElementById(`dep${index}`);
    divDown.style.display = "none";
    div.style.height = "300px";

    const divUp = document.getElementById(`opUp${index}`);
    divUp.style.display = "block";
  };

  handlwHideSection = (index) => {
    const divUp = document.getElementById(`opUp${index}`);
    const div = document.getElementById(`dep${index}`);
    divUp.style.display = "none";
    div.style.height = "0px";

    const divDown = document.getElementById(`opDown${index}`);
    divDown.style.display = "block";
  };

  render() {
    document.title = "SEASPAC - HOMEBASE";
    const { newproject, sections, name } = this.state;

    return (
      <Container>
        <Row flexDirection="row">
          <Col
            size={1.8}
            minHeight="100vh"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="column"
            backgroundColor="#eee"
          >
            <h2>Estrutura</h2>

            <Button onClick={() => this.setState({ newproject: !newproject })}>
              <Line width={1} height={15} top={15} />
              <Line width={30} height={1} />
              <FcAddDatabase size={20} /> <span> Novo projeto/setor </span>
            </Button>

            <ListSections>
              {sections.map((s, index) => (
                <div
                  styled={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Section>
                    <Line width={1} height={30} top={0} />
                    <Line width={30} height={1} />
                    <FcDatabase size={20} />
                    <span>{s.name}</span>

                    <DivOp>
                      <Op>
                        <MdSupervisorAccount size={15} />
                      </Op>
                      <Op
                        id={`opDown${index}`}
                        onClick={() => this.handleShowSections(index)}
                      >
                        <MdArrowDropDown size={15} />
                      </Op>

                      <Op
                        style={{ display: "none" }}
                        id={`opUp${index}`}
                        onClick={() => this.handlwHideSection(index)}
                      >
                        <MdArrowDropUp size={15} />
                      </Op>
                    </DivOp>
                  </Section>
                  <SectionsDep id={`dep${index}`}></SectionsDep>
                </div>
              ))}
            </ListSections>

            {newproject && (
              <FormNewProject onSubmit={this.handleSaveNewDep}>
                <Input
                  autoFocus
                  required
                  value={name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
                <Save type="submit">
                  <MdCheck size={20} color="#fff" />
                </Save>
                <Close
                  type="button"
                  onClick={() => this.setState({ name: "", newproject: false })}
                >
                  <MdClose size={20} color="#fff" />
                </Close>
              </FormNewProject>
            )}
          </Col>

          <Col size={10} minHeight="100vh" backgroundColor="#ccc">
            <h2>Componentes</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}
