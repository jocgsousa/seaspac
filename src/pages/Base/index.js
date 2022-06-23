import React, { Component } from "react";
import { FcAddDatabase, FcDatabase } from "react-icons/fc";
import {
  MdClose,
  MdCheck,
  MdArrowDropDown,
  MdArrowDropUp,
  MdSupervisorAccount,
  MdAdd,
  MdSync,
} from "react-icons/md";
import { ClassicSpinner } from "react-spinners-kit";
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
  Dep,
  Close,
  Save,
  ListDeps,
  DivOp,
  Op,
  SectionsDep,
  Loading,
  ListSections,
  Section,
} from "./styles";

export default class Base extends Component {
  state = {
    newproject: false,
    sections: [],
    name: "",
    nameSection: "",
    loading: false,
    firstLoading: true,
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
          loading: false,
          firstLoading: false,
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

        this.setState({
          loading: false,
          firstLoading: false,
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
    document.getElementById(`opUp${index}`).style.display = "none";
    document.getElementById(`dep${index}`).style.height = "0px";

    document.getElementById(`opDown${index}`).style.display = "block";
    document.getElementById(`newSection${index}`).style.display = "none";
  };

  handleNewSectionDep = (index) => {
    document.getElementById(`dep${index}`).style.height = "300px";

    document.getElementById(`opDown${index}`).style.display = "none";
    document.getElementById(`opUp${index}`).style.display = "block";

    document.getElementById(`newSection${index}`).style.display = "block";
  };

  render() {
    document.title = "SEASPAC - HOMEBASE";
    const { newproject, sections, name, nameSection, loading, firstLoading } =
      this.state;

    return (
      <Container>
        <Row flexDirection="row">
          <Col
            size={1.5}
            minHeight="100vh"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="column"
            backgroundColor="#eee"
          >
            <h2>Estrutura</h2>

            <Button>
              <Line width={1} height={15} top={15} />
              <Line
                width={37}
                height={1}
                left={0}
                style={{ position: "absolute" }}
              />
              <FcAddDatabase size={20} style={{ marginLeft: "-14%" }} />
              <span
                onClick={() => this.setState({ newproject: !newproject })}
                style={{ marginLeft: "-25%" }}
              >
                Novo projeto/setor
              </span>
              <DivOp>
                <Op>
                  {loading ? (
                    <ClassicSpinner size={10} color="#333" />
                  ) : (
                    <MdSync
                      size={15}
                      onClick={() => {
                        this.handleListDeps();
                        this.setState({ loading: true });
                      }}
                    />
                  )}
                </Op>
              </DivOp>
            </Button>
            {newproject && (
              <FormNewProject onSubmit={this.handleSaveNewDep}>
                <Input
                  autoFocus
                  required
                  value={name}
                  onChange={(e) =>
                    this.setState({
                      name: String(e.target.value).toUpperCase(),
                    })
                  }
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

            {firstLoading ? (
              <Loading>
                <ClassicSpinner size={20} color="#333" />
              </Loading>
            ) : (
              <ListDeps>
                {sections.map((s, index) => (
                  <div
                    styled={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Dep>
                      <Line width={1} height={30} top={0} />
                      <Line width={40} height={1} />
                      <FcDatabase size={20} />
                      <span>{s.name}</span>

                      <DivOp>
                        <Op onClick={() => this.handleNewSectionDep(index)}>
                          <MdAdd size={15} />
                        </Op>

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
                    </Dep>
                    <SectionsDep id={`dep${index}`}>
                      <div
                        id={`newSection${index}`}
                        style={{ display: "none" }}
                      >
                        <FormNewProject onSubmit={this.handleSaveNewDep}>
                          <Input
                            autoFocus
                            required
                            value={nameSection}
                            onChange={(e) =>
                              this.setState({
                                nameSection: String(
                                  e.target.value
                                ).toUpperCase(),
                              })
                            }
                          />
                          <Save type="submit">
                            <MdCheck size={20} color="#fff" />
                          </Save>
                          <Close
                            type="button"
                            onClick={() => {
                              this.setState({ nameSection: "" });
                              document.getElementById(
                                `newSection${index}`
                              ).style.display = "none";
                            }}
                          >
                            <MdClose size={20} color="#fff" />
                          </Close>
                        </FormNewProject>
                      </div>

                      <ListSections>
                        {s.secoes.map((section) => (
                          <Section>
                            <span>{section.title}</span>
                          </Section>
                        ))}
                      </ListSections>
                    </SectionsDep>
                  </div>
                ))}
              </ListDeps>
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
