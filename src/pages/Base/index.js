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
  MdDelete,
  // MdTextSnippet,
} from "react-icons/md";

import {
  BsInputCursorText,
  BsCardChecklist,
  BsTextareaResize,
} from "react-icons/bs";

import { RiCheckboxLine } from "react-icons/ri";

import { BiCalendar, BiDirections, BiSend } from "react-icons/bi";

import { TbNumbers } from "react-icons/tb";

import { CgListTree } from "react-icons/cg";

import { ResizableBox } from "react-resizable";

import { uniqueId } from "lodash";

import { ClassicSpinner } from "react-spinners-kit";

import axios from "axios";

import { toast } from "react-toastify";

import Draggable from "react-draggable";

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
  ButtonHeader,
  ListComponents,
  // ComponentDep,
  NoFormSelected,
  IconNoDoc,
  FormContainer,
  HeaderForm,
  Campo,
  HeaderComponents,
  TitleForm,
  BodyFormComponents,
  FooterFormComponents,
  ButtonSaveFormComponents,
  ButtonClose,
  AddItem,
  ButtonSaveItem,
  Delete,
  Element,
  BoxFormAddCampo,
  FormAddCampo,
  HeaderAddCampo,
  BodyAddCampo,
  FooterAddCampo,
  CheckBox,
  BoxRelacionar,
  FormRelacionar,
  HeaderRelacionar,
  BodyRelacionar,
  FooterRelacionar,
  ButtonSaveRelacionar,
} from "./styles";

import "./styles.css";

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
    idForm: "",
    idComponentForm: "",
    nameItem: "",
    valorItem: "",
    formdata: [
      {
        id: uniqueId(),
        type: "",
        element: "select",
        children: [],
        value: "",
        defaultValue: "",
        styles: {
          height: 40,
          width: 200,
          left: 0,
          top: 0,
        },
        placeholder: "",
        name: "",
      },

      {
        id: uniqueId(),
        type: "text",
        element: "input",
        children: [],
        value: "",
        defaultValue: "",
        styles: {
          height: 40,
          width: 200,
          left: 0,
          top: 0,
        },
        placeholder: "",
        name: "",
      },
      {
        id: uniqueId(),
        type: "number",
        element: "input",
        children: [],
        value: "",
        defaultValue: "",
        styles: {
          height: 40,
          width: 200,
          left: 0,
          top: 0,
        },
        placeholder: "",
        name: "",
      },

      {
        id: uniqueId(),
        type: "",
        element: "select",
        children: [],
        value: "",
        defaultValue: "",
        styles: {
          height: 40,
          width: 200,
          left: 0,
          top: 0,
        },
        placeholder: "",
        name: "",
      },
    ],
    titleForm: "",
    activeDrags: 0,

    defaultPosition: {
      x: 0,
      y: 0,
    },
    addCampo: false,
    relacionar: false,
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
        document.getElementById(`childSection${idSection}${id}`).style.display =
          "block";
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

  handleAddItem = (e) => {
    e.preventDefault();
    const { formdata, idComponentForm, nameItem, valorItem } = this.state;

    try {
      this.setState({
        formdata: formdata.map((el) =>
          el.id === idComponentForm
            ? {
                ...el,
                children: [
                  ...el.children,
                  { id: uniqueId(), name: nameItem, value: valorItem },
                ],
              }
            : el
        ),
      });
      this.setState({
        nameItem: "",
        valorItem: "",
      });
      document.getElementById(`additem${idComponentForm}`).style.display =
        "none";
    } catch (error) {
      window.alert("Falha ao adicionar item!");
    }
  };

  // Not using
  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };
  // Not using
  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  handleDrag = (e, ui) => {
    const { x, y } = this.state.defaultPosition;
    const { idComponentForm, formdata } = this.state;
    this.setState({
      defaultPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },

      formdata: formdata.map((el) =>
        el.id === idComponentForm
          ? {
              ...el,
              styles: { ...el.styles, left: x, top: y },
            }
          : el
      ),
    });

    if (idComponentForm) {
      this.setState({
        formdata: formdata.map((el) =>
          el.id === idComponentForm
            ? {
                ...el,
                styles: { ...el.styles, left: x, top: y },
              }
            : el
        ),
      });
    }

    console.log(formdata);
  };

  onResize = (event, { element, size, handle }) => {
    const { idComponentForm, formdata } = this.state;
    console.log("id: " + idComponentForm);
    console.log(size.width);

    this.setState({
      formdata: formdata.map((el) =>
        el.id === idComponentForm
          ? {
              ...el,
              styles: {
                ...el.styles,
                width: size.width,
                height: size.height >= 40 ? size.height : 40,
              },
            }
          : el
      ),
    });

    console.log(formdata);
  };

  handleRemoveCampo = (id) => {
    const { formdata } = this.state;

    this.setState({
      formdata: formdata.filter((campo) => Number(campo.id) !== Number(id)),
    });
  };

  handleSaveCampo = (e) => {
    e.preventDefault();
    const { formdata, campo } = this.state;

    this.setState({
      formdata: [...formdata, campo],
      addCampo: false,
    });
  };

  render() {
    document.title = "SEASPAC - HOMEBASE";
    // const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    const {
      newproject,
      sections,
      name,
      nameSection,
      nameForm,
      loading,
      firstLoading,
      titleForm,
      formdata,
      nameItem,
      valorItem,
      addCampo,
      campo,
      relacionar,
    } = this.state;

    return (
      <Container>
        {addCampo && (
          <BoxFormAddCampo>
            <FormAddCampo onSubmit={this.handleSaveCampo}>
              <HeaderAddCampo>
                <span>Adicionar campo</span>
                <ButtonClose
                  onClick={() => {
                    this.setState({
                      addCampo: false,
                      campo: "",
                    });
                  }}
                >
                  <MdClose size={20} color="#333" />
                </ButtonClose>
              </HeaderAddCampo>
              <BodyAddCampo>
                {campo && (
                  <>
                    <input
                      required
                      type="text"
                      placeholder="Título"
                      onChange={(e) => {
                        this.setState({
                          campo: {
                            ...campo,
                            title: e.target.value,
                          },
                        });
                      }}
                      value={campo.title}
                    />
                    <input
                      required
                      type="text"
                      placeholder="Nome do placeholder"
                      onChange={(e) => {
                        this.setState({
                          campo: {
                            ...campo,
                            placeholder: e.target.value,
                          },
                        });
                      }}
                      value={campo.placeholder}
                    />
                    <input
                      required
                      type="text"
                      placeholder="Nome para o dado"
                      onChange={(e) => {
                        this.setState({
                          campo: {
                            ...campo,
                            name: e.target.value,
                          },
                        });
                      }}
                      value={campo.name}
                    />
                    <input
                      type="text"
                      placeholder="Valor padrão"
                      onChange={(e) => {
                        this.setState({
                          campo: {
                            ...campo,
                            defaultValue: e.target.value,
                          },
                        });
                      }}
                      value={campo.defaultValue}
                    />

                    <input
                      type="text"
                      placeholder="Valor"
                      onChange={(e) => {
                        this.setState({
                          campo: {
                            ...campo,
                            value: e.target.value,
                          },
                        });
                      }}
                      value={campo.value}
                    />
                  </>
                )}
              </BodyAddCampo>
              <FooterAddCampo>
                <ButtonSaveItem>Salvar</ButtonSaveItem>
              </FooterAddCampo>
            </FormAddCampo>
          </BoxFormAddCampo>
        )}

        {relacionar && (
          <BoxRelacionar>
            <FormRelacionar>
              <HeaderRelacionar>
                <h2>Relacionar</h2>
                <Close>
                  <MdClose size={20} color="#333" />
                </Close>
              </HeaderRelacionar>
              <BodyRelacionar>
                <h2>Corpo</h2>
              </BodyRelacionar>
              <FooterRelacionar>
                <ButtonSaveRelacionar>
                  <span>Salvar</span>
                </ButtonSaveRelacionar>
              </FooterRelacionar>
            </FormRelacionar>
          </BoxRelacionar>
        )}

        <Row flexDirection="row">
          <Col
            size={2}
            minHeight="100vh"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="column"
            backgroundColor="#eee"
          >
            <ButtonHeader>
              <span>Estrutura</span>
            </ButtonHeader>

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

                              <Line
                                id={`childSection${section.id}${section.fk_dep_id}`}
                                width={0.5}
                                height={15}
                                top={15}
                                style={{
                                  display: "block",
                                  position: "relative",
                                  left: "-41px",
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
                              <DivOp style={{ right: "-20px" }}>
                                <Op
                                  onClick={() => {
                                    this.handleNewForm(
                                      section.id,
                                      section.fk_dep_id
                                    );

                                    this.handleShowFormsSection(
                                      section.id,
                                      section.fk_dep_id,
                                      section.formularios
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
                                  marginTop: "0px",
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
                                  <Form
                                    onClick={() => {
                                      this.setState({
                                        titleForm: form.title,
                                        id: form.fk_dep_id,
                                        idSection: form.fk_section_id,
                                        idForm: form.id,
                                        form: form.data,
                                      });
                                    }}
                                  >
                                    <Line width={0.5} height={35} top={-35} />
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

          <Col size={10} minHeight="100vh" backgroundColor="">
            {!titleForm ? (
              <NoFormSelected>
                <IconNoDoc>
                  <FcDocument size={50} />
                </IconNoDoc>
              </NoFormSelected>
            ) : (
              <ListComponents>
                <FormContainer>
                  <HeaderForm>
                    <TitleForm>{titleForm}</TitleForm>
                    <ButtonClose
                      onClick={() =>
                        this.setState({
                          id: "",
                          idSection: "",
                          idForm: "",
                          titleForm: "",
                        })
                      }
                    >
                      <MdClose size={20} color="#333" />
                    </ButtonClose>
                  </HeaderForm>
                  <HeaderComponents>
                    <Campo
                      onClick={() =>
                        this.setState({
                          addCampo: true,
                          campo: {
                            id: uniqueId(),
                            type: "text",
                            element: "input",
                            children: [],
                            value: "",
                            defaultValue: "",
                            styles: {
                              height: 40,
                              width: 200,
                              left: 0,
                              top: 0,
                            },
                            placeholder: "",
                            name: "",
                            title: "",
                          },
                        })
                      }
                    >
                      <span>Texto</span> <BsInputCursorText size={20} />
                    </Campo>
                    <Campo
                      onClick={() =>
                        this.setState({
                          addCampo: true,
                          campo: {
                            id: uniqueId(),
                            type: "number",
                            element: "input",
                            children: [],
                            value: "",
                            defaultValue: "",
                            styles: {
                              height: 40,
                              width: 200,
                              left: 0,
                              top: 0,
                            },
                            placeholder: "",
                            name: "",
                            title: "",
                          },
                        })
                      }
                    >
                      <span>Numérico</span> <TbNumbers size={20} />
                    </Campo>
                    <Campo
                      onClick={() =>
                        this.setState({
                          addCampo: true,
                          campo: {
                            id: uniqueId(),
                            type: "select",
                            element: "select",
                            children: [],
                            value: "",
                            defaultValue: "",
                            styles: {
                              height: 40,
                              width: 200,
                              left: 0,
                              top: 0,
                            },
                            placeholder: "",
                            name: "",
                            title: "",
                          },
                        })
                      }
                    >
                      <span>Seleção</span> <BsCardChecklist size={20} />
                    </Campo>
                    <Campo
                      onClick={() =>
                        this.setState({
                          addCampo: true,
                          campo: {
                            id: uniqueId(),
                            type: "textarea",
                            element: "textarea",
                            children: [],
                            value: "",
                            defaultValue: "",
                            styles: {
                              height: 40,
                              width: 200,
                              left: 0,
                              top: 0,
                            },
                            placeholder: "",
                            name: "",
                            title: "",
                          },
                        })
                      }
                    >
                      <span>Área de texto</span> <BsTextareaResize size={20} />
                    </Campo>
                    <Campo
                      onClick={() =>
                        this.setState({
                          addCampo: true,
                          campo: {
                            id: uniqueId(),
                            type: "date",
                            element: "input",
                            children: [],
                            value: "",
                            defaultValue: "",
                            styles: {
                              height: 40,
                              width: 200,
                              left: 0,
                              top: 0,
                            },
                            placeholder: "",
                            name: "",
                            title: "",
                          },
                        })
                      }
                    >
                      <span>Campo de data </span>
                      <BiCalendar size={20} />
                    </Campo>

                    <Campo
                      onClick={() =>
                        this.setState({
                          addCampo: true,
                          campo: {
                            id: uniqueId(),
                            type: "checkbox",
                            element: "input",
                            children: [],
                            value: "",
                            defaultValue: "",
                            styles: {
                              height: 40,
                              width: 20,
                              left: 0,
                              top: 0,
                            },
                            placeholder: "",
                            name: "",
                            title: "",
                          },
                        })
                      }
                    >
                      <span>Checkbox</span>
                      <RiCheckboxLine size={20} />
                    </Campo>
                    <Campo>
                      <span>Relacionar</span>
                      <CgListTree size={20} />
                    </Campo>
                    <Campo>
                      <span>Lista relacionada</span>
                      <BiDirections size={20} />
                    </Campo>
                    <Campo>
                      <span>Enviar</span>
                      <BiSend size={20} />
                    </Campo>
                  </HeaderComponents>

                  <BodyFormComponents>
                    <div id="content">
                      {formdata.map((el) => (
                        <Draggable
                          axis="both"
                          handle=".element"
                          defaultPosition={{
                            x: 0,
                            y: 0,
                          }}
                          position={{ x: el.styles.left, y: el.styles.top }}
                          grid={[5, 5]}
                          // scale={1}
                          onStart={() =>
                            this.setState({
                              idComponentForm: el.id,
                              defaultPosition: {
                                x: el.styles.left,
                                y: el.styles.top,
                              },
                            })
                          }
                          onDrag={this.handleDrag}
                          onStop={() => {
                            this.setState({
                              idComponentForm: "",
                              defaultPosition: {
                                x: 0,
                                y: 0,
                              },
                            });
                          }}
                        >
                          <ResizableBox
                            height={el.styles.height}
                            width={el.styles.width}
                            onResize={this.onResize}
                            onResizeStart={() => {
                              this.setState({
                                idComponentForm: el.id,
                              });
                            }}
                          >
                            <Element
                              id="element"
                              className="element"
                              styles={el.styles}
                            >
                              {el.type !== "checkbox" && (
                                <span id="span">{el.title}</span>
                              )}
                              {el.element === "input" &&
                                el.type !== "checkbox" && (
                                  <input
                                    id={`formElement${el}`}
                                    type={el.type}
                                    placeholder={`${el.placeholder}`}
                                    value={el.value}
                                    defaultValue={el.defaultValue}
                                    onChange={(e) => {
                                      this.setState({
                                        formdata: formdata.map((c) =>
                                          c.id === el.id
                                            ? { ...c, value: e.target.value }
                                            : c
                                        ),
                                      });
                                    }}
                                  />
                                )}
                              {el.element === "select" && (
                                <>
                                  <select
                                    value={el.value}
                                    onChange={(e) => {
                                      console.log(e);
                                      if (e.target.value === "add") {
                                        const div = document.getElementById(
                                          `additem${el.id}`
                                        );

                                        div.style.display = "flex";
                                      } else {
                                        this.setState({
                                          formdata: formdata.map((c) =>
                                            c.id === el.id
                                              ? { ...c, value: e.target.value }
                                              : c
                                          ),
                                        });
                                      }
                                    }}
                                    styles={{
                                      width: `${el.styles.width}px`,
                                    }}
                                  >
                                    <option value="">...</option>
                                    <option value="add">Adicionar item </option>

                                    {el.children.length && (
                                      <>
                                        {el.children.map((ch) => (
                                          <option value={ch.value}>
                                            {ch.name}
                                          </option>
                                        ))}
                                      </>
                                    )}
                                  </select>
                                  <AddItem
                                    className="areaAddItem"
                                    id={`additem${el.id}`}
                                    style={{ display: "none" }}
                                    onSubmit={this.handleAddItem}
                                    onSubmitCapture={() =>
                                      this.setState({ idComponentForm: el.id })
                                    }
                                  >
                                    <HeaderForm
                                      style={{ justifyContent: "flex-end" }}
                                    >
                                      <ButtonClose
                                        onClick={() =>
                                          (document.getElementById(
                                            `additem${el.id}`
                                          ).style.display = "none")
                                        }
                                      >
                                        <MdClose size={15} color="#333" />
                                      </ButtonClose>
                                    </HeaderForm>
                                    <input
                                      type="text"
                                      placeholder="Nome do item"
                                      onChange={(e) =>
                                        this.setState({
                                          nameItem: e.target.value,
                                        })
                                      }
                                      value={nameItem}
                                      required
                                    />
                                    <input
                                      type="text"
                                      placeholder="Valor do item"
                                      onChange={(e) =>
                                        this.setState({
                                          valorItem: e.target.value,
                                        })
                                      }
                                      value={valorItem}
                                    />

                                    <ButtonSaveItem>Adicionar</ButtonSaveItem>
                                  </AddItem>
                                </>
                              )}
                              {el.element === "textarea" && (
                                <>
                                  <textarea
                                    id={`formElement${el}`}
                                    type={el.type}
                                    placeholder={`${el.placeholder}`}
                                    value={el.value}
                                    defaultValue={el.defaultValue}
                                    onChange={(e) => {
                                      this.setState({
                                        formdata: formdata.map((c) =>
                                          c.id === el.id
                                            ? { ...c, value: e.target.value }
                                            : c
                                        ),
                                      });
                                    }}
                                  >
                                    {el.defaultValue}
                                  </textarea>
                                </>
                              )}
                              {el.element === "input" &&
                                el.type === "checkbox" && (
                                  <CheckBox>
                                    <input
                                      id={`formElement${el}`}
                                      type={el.type}
                                      placeholder={`${el.placeholder}`}
                                      value={el.value}
                                      defaultValue={el.defaultValue}
                                      onChange={(e) => {
                                        this.setState({
                                          formdata: formdata.map((c) =>
                                            c.id === el.id
                                              ? { ...c, value: e.target.value }
                                              : c
                                          ),
                                        });
                                      }}
                                    />
                                    <label>{el.title}</label>
                                  </CheckBox>
                                )}

                              <Delete
                                id="delete"
                                onClick={() => this.handleRemoveCampo(el.id)}
                              >
                                <MdDelete size={15} color="red" />
                              </Delete>
                            </Element>
                          </ResizableBox>
                        </Draggable>
                      ))}
                    </div>
                  </BodyFormComponents>

                  <FooterFormComponents>
                    <ButtonSaveFormComponents>
                      <span>Salvar</span>
                    </ButtonSaveFormComponents>
                  </FooterFormComponents>
                </FormContainer>
              </ListComponents>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
