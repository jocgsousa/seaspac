import React, { Component } from "react";
import { FcAddDatabase, FcDatabase, FcDocument } from "react-icons/fc";
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
  ListForms,
  Form,
} from "./styles";

export default class Base extends Component {
  state = {
    newproject: false,
    sections: [],
    name: "",
    nameSection: "",
    nameForm: "",
    loading: false,
    firstLoading: true,
    id: "",
    idSection: "",
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
    this.setState({
      loading: true,
    });
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
        if (error.response) {
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
        } else {
          toast.error("Falha de conexão", {
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
  };

  handleSaveNewSection = async (e) => {
    e.preventDefault();
    const { id } = this.state;

    const credentials = JSON.parse(localStorage.getItem("credentials"));
    const api = JSON.parse(localStorage.getItem("api"));
    const { nameSection } = this.state;
    const data = {
      title: nameSection,
      data: "",
      fk_dep_id: id,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${credentials.token}`,
      },
    };

    await axios
      .post(`${api.api}/section`, data, config)
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
        toast.warn(error.response.data.message, {
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
  handleShowSections = (index, s) => {
    const divDown = document.getElementById(`opDown${index}`);
    const div = document.getElementById(`dep${index}`);
    divDown.style.display = "none";
    div.style.height = "300px";

    const divUp = document.getElementById(`opUp${index}`);
    divUp.style.display = "block";

    if (s.secoes.length) {
      document.getElementById(`child${index}`).style.display = "block";
    }

    document.getElementById(`listsections${index}`).style.display = "block";
  };

  handleHideSection = (index) => {
    document.getElementById(`opUp${index}`).style.display = "none";
    document.getElementById(`dep${index}`).style.height = "0px";
    document.getElementById(`newSection${index}`).style.display = "none";
    document.getElementById(`opDown${index}`).style.display = "block";

    document.getElementById(`child${index}`).style.display = "none";
    document.getElementById(`listsections${index}`).style.display = "none";
  };

  handleNewSectionDep = (index) => {
    document.getElementById(`dep${index}`).style.height = "300px";

    document.getElementById(`opDown${index}`).style.display = "none";
    document.getElementById(`opUp${index}`).style.display = "block";

    document.getElementById(`newSection${index}`).style.display = "block";

    document.getElementById(`child${index}`).style.display = "block";
    document.getElementById(`listsections${index}`).style.display = "block";
  };

  handleShowFormsSection = (sec, dep, formularios) => {
    document.getElementById(`forms${sec}${dep}`).style.height = "250px";
    document.getElementById(`opUpForms${sec}${dep}`).style.display = "block";
    document.getElementById(`opDownForms${sec}${dep}`).style.display = "none";
    if (formularios.length) {
      document.getElementById(`childSection${sec}${dep}`).style.display =
        "block";
    }
  };

  handleHideFormsSection = (sec, dep) => {
    document.getElementById(`forms${sec}${dep}`).style.height = "0px";
    document.getElementById(`opUpForms${sec}${dep}`).style.display = "none";
    document.getElementById(`opDownForms${sec}${dep}`).style.display = "block";
    document.getElementById(`childSection${sec}${dep}`).style.display = "none";
  };

  handleNewForm = (sec, dep) => {
    document.getElementById(`newForm${sec}${dep}`).style.display = "block";
  };

  handleSaveNewForm = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    const api = JSON.parse(localStorage.getItem("api"));
    const { nameForm, id, idSection } = this.state;
    const data = {
      title: nameForm,
      fk_dep_id: id,
      fk_section_id: idSection,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${credentials.token}`,
      },
    };

    await axios
      .post(`${api.api}/form`, data, config)
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
          nameForm: "",
          id: "",
          idSection: "",
        });
        this.handleListDeps();
      })
      .catch((error) => {
        if (error.response) {
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
        } else {
          toast.error("Falha de conexão", {
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
  };

  render() {
    document.title = "SEASPAC - HOMEBASE";
    const {
      newproject,
      sections,
      name,
      nameSection,
      nameForm,
      loading,
      firstLoading,
    } = this.state;

    return (
      <Container>
        <Row flexDirection="row">
          <Col
            size={2}
            minHeight="100vh"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="column"
            backgroundColor="#eee"
          >
            <h2>Estrutura</h2>

            <Button
              style={{
                position: "absolute",
                left: 0,
                top: "30px",
              }}
            >
              <Line width={1} height={15} top={15} />
              <Line
                width={37}
                height={0.5}
                left={0}
                style={{ position: "absolute" }}
              />
              <FcAddDatabase size={20} style={{ marginLeft: "-18%" }} />
              <span
                onClick={() => this.setState({ newproject: !newproject })}
                style={{ marginLeft: "-25%" }}
              >
                Novo projeto/setor
              </span>
              <DivOp>
                <Op
                  style={{
                    position: "relative",
                    left: "-20px",
                  }}
                >
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

            {firstLoading ? (
              <Loading>
                <ClassicSpinner size={20} color="#333" />
              </Loading>
            ) : (
              <ListDeps>
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
                      onClick={() =>
                        this.setState({ name: "", newproject: false })
                      }
                    >
                      <MdClose size={20} color="#fff" />
                    </Close>
                  </FormNewProject>
                )}

                {sections.map((s, index) => (
                  <div
                    styled={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Dep>
                      <Line width={0.5} height={30} top={0} />
                      <Line width={40} height={0.5} />
                      <Line
                        id={`child${index}`}
                        width={1}
                        height={15}
                        top={15}
                        style={{
                          display: "none",
                          position: "relative",
                          left: "-30px",
                        }}
                      />

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
                          onClick={() => this.handleShowSections(index, s)}
                        >
                          <MdArrowDropDown size={15} />
                        </Op>

                        <Op
                          style={{ display: "none" }}
                          id={`opUp${index}`}
                          onClick={() => this.handleHideSection(index)}
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
                        {/* Added new Section in Department or Section */}
                        <FormNewProject
                          onSubmit={this.handleSaveNewSection}
                          onSubmitCapture={() => this.setState({ id: s.id })}
                        >
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

                      <ListSections id={`listsections${index}`}>
                        {s.secoes.map((section) => (
                          <>
                            <Section>
                              <Line width={0.5} height={30} top={-30} />
                              <Line width={40} height={0.5} />
                              <Line
                                id={`childSection${section.id}${section.fk_dep_id}`}
                                width={0.5}
                                height={15}
                                top={15}
                                style={{
                                  display: "none",
                                  position: "relative",
                                  left: "-29.5px",
                                }}
                              />

                              <FcDatabase size={20} />
                              <span>{section.title}</span>
                              <div
                                id={`newFormSection${index}`}
                                style={{ display: "none" }}
                              >
                                {/* Added new Section in Department or Section */}
                                <FormNewProject
                                  onSubmit={this.handleSaveNewSection}
                                  onSubmitCapture={() =>
                                    this.setState({ id: s.id })
                                  }
                                >
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
                              <DivOp style={{ right: "-20px", zIndex: "2" }}>
                                <Op
                                  onClick={() => {
                                    this.handleNewForm(
                                      section.id,
                                      section.fk_dep_id
                                    );

                                    this.handleShowFormsSection(
                                      section.id,
                                      section.fk_dep_id
                                    );
                                  }}
                                  style={{ border: "none" }}
                                >
                                  <FcDocument size={20} />
                                </Op>
                                <Op
                                  id={`opDownForms${section.id}${section.fk_dep_id}`}
                                  onClick={() =>
                                    this.handleShowFormsSection(
                                      section.id,
                                      section.fk_dep_id,
                                      section.formularios
                                    )
                                  }
                                >
                                  <MdArrowDropDown size={15} />
                                </Op>
                                <Op
                                  style={{ display: "none" }}
                                  id={`opUpForms${section.id}${section.fk_dep_id}`}
                                  onClick={() =>
                                    this.handleHideFormsSection(
                                      section.id,
                                      section.fk_dep_id
                                    )
                                  }
                                >
                                  <MdArrowDropUp size={15} />
                                </Op>
                              </DivOp>
                            </Section>
                            <ListForms
                              id={`forms${section.id}${section.fk_dep_id}`}
                            >
                              <div
                                id={`newForm${section.id}${section.fk_dep_id}`}
                                style={{
                                  display: "none",
                                  marginTop: "15px",
                                  marginLeft: "0px",
                                }}
                              >
                                {/* Added new form in section */}
                                <FormNewProject
                                  onSubmit={this.handleSaveNewForm}
                                  onSubmitCapture={() =>
                                    this.setState({
                                      idSection: section.id,
                                      id: s.id,
                                    })
                                  }
                                >
                                  <Input
                                    autoFocus
                                    required
                                    value={nameForm}
                                    onChange={(e) =>
                                      this.setState({
                                        nameForm: String(
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
                                      this.setState({ nameForm: "" });
                                      document.getElementById(
                                        `newForm${section.id}${section.fk_dep_id}`
                                      ).style.display = "none";
                                    }}
                                  >
                                    <MdClose size={20} color="#fff" />
                                  </Close>
                                </FormNewProject>
                              </div>

                              {section.formularios &&
                                section.formularios.map((form) => (
                                  <Form>
                                    <Line width={0.5} height={30} top={-30} />
                                    <Line width={40} height={0.5} />
                                    <FcDocument size={20} />
                                    <span>{form.title}</span>
                                  </Form>
                                ))}
                            </ListForms>
                          </>
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
