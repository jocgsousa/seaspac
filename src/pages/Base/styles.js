import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  display: flex;
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  background-color: ${(props) => props.backgroundColor};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
`;

export const Button = styled.button`
  /* width: 100%; */
  width: 317px;

  background: transparent;
  border: none;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;

  span {
    cursor: pointer;
  }
`;

export const Line = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin-top: ${(props) => `${props.top}px`};
  margin-left: ${(props) => `${props.left}px`};
  background: #333;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #333;
  min-height: 30px;
  border-right: none;
`;

export const FormNewProject = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-left: 10px;
`;

export const ListDeps = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 92vh;
  padding-bottom: 50px;
  margin-top: 25px;
`;

export const Dep = styled.div`
  /* width: 100%; */
  width: 380px;

  background: transparent;
  border: none;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* cursor: pointer; */
  padding-left: 10px;
  font-size: 11px;
  /* border: 1px solid red; */
  &:hover {
    background-color: #ddd;
  }

  span {
    white-space: nowrap;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;

    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    user-select: none;
  }
`;

export const Close = styled.button.attrs({
  type: "button",
})`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8c0000;
  border: 1px solid #333;
  cursor: pointer;

  &:active {
    background-color: #a80808;
  }
`;

export const Save = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #009999;
  border: 1px solid #333;
  cursor: pointer;
  border-right: none;

  &:active {
    background-color: #047e55;
  }
`;

export const DivOp = styled.div`
  right: -30px;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const Op = styled.button.attrs({
  type: "button",
})`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  position: relative;
  border: 1px solid #ccc;
  color: #777;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:active {
    background-color: #ccc;
  }
`;

export const SectionsDep = styled.div`
  /* display: none; */
  min-height: 0px;
  max-height: 400px;
  height: 0px;
  overflow-y: auto;
  overflow-x: hidden;
  border-left: 1px solid #333;
  margin-left: 10px;
  transition: 0.2s all;
`;

export const Loading = styled.div`
  width: 317px;
  display: flex;
  min-height: 85vh;
  align-items: center;
  justify-content: center;
`;

export const ListSections = styled.div`
  min-height: 200px;
  /* border: 1px solid red; */
  width: 100%;
  /* margin-top: -1px; */
  z-index: 9999999;
`;

export const Section = styled.div`
  width: 100%;
  background: transparent;
  border: none;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* cursor: pointer; */
  padding-left: 10px;
  font-size: 11px;
  /* border: 1px solid red; */
  &:hover {
    background-color: #ddd;
  }

  span {
    white-space: nowrap;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;

    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    user-select: none;
  }
`;

export const ListForms = styled.div`
  min-height: 0px;
  max-height: 250px;
  height: 0px;
  overflow-y: auto;
  overflow-x: hidden;
  border-left: 1px solid #333;
  margin-left: 10px;
  transition: 0.2s all;
  min-width: 20%;
  z-index: 3;
  position: relative;
`;

export const Form = styled.div`
  /* margin-top: 15px; */
  cursor: pointer;
  width: 100%;
  background: transparent;
  border: none;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* cursor: pointer; */
  padding-left: 10px;
  font-size: 11px;
  /* border: 1px solid red; */
  &:hover {
    background-color: #ddd;
  }

  span {
    white-space: nowrap;
    width: 210px;
    overflow: hidden;
    text-overflow: ellipsis;

    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    user-select: none;
  }
`;

export const ButtonHeader = styled.button.attrs({
  type: "button",
})`
  width: 100%;
  min-height: 30px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  span {
    font-size: 20px;
    text-transform: uppercase;
  }
`;

export const ComponentDep = styled.div``;

export const NoFormSelected = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconNoDoc = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  background-color: #ddd;
`;

export const ListComponents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

export const FormContainer = styled.div`
  height: 94vh;
  width: 72vw;
  background: #ddd;
`;

export const HeaderForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5%;
  padding-left: 5px;
  border-bottom: 1px solid #ccc;
`;

export const Campo = styled.button.attrs({
  type: "button",
})`
  min-width: 150px;
  min-height: 30px;
  padding-left: 4px;
  padding-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #3399cc;
  border: none;
  color: white;
  margin-right: 5px;
  span {
    margin-right: 4px;
  }
`;

export const HeaderComponents = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 8%;
  padding-left: 5px;
  border-bottom: 1px solid #ccc;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const TitleForm = styled.h4`
  white-space: nowrap;
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;

  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
`;

export const ButtonClose = styled.button.attrs({
  type: "button",
})`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  margin-right: 5px;
  cursor: pointer;
`;

export const BodyFormComponents = styled.div`
  height: 80%;
  width: 100%;
  position: relative;

  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  #content {
    padding: 2%;
    /* border: 2px solid red; */
    width: 100%;
    height: 100%;
    overflow: auto;
    /* display: grid; */
    /* grid: 100% / auto auto auto auto; */
    /* grid-gap: 5px; */
    /* background-color: #2196f3; */
    /* padding: 10px; */
  }
`;

export const Element = styled.div`
  /* border: 2px solid red; */
  position: relative;
  min-height: 40px;
  display: flex;
  width: 250px;
  align-items: flex-start;
  flex-direction: center;
  justify-content: flex-start;

  #delete {
    position: relative;
    left: 5%;
    margin-top: 5%;
  }
  #span {
    position: absolute;
    top: -20px;
  }
  input,
  select,
  textarea {
    padding-left: 2px;
    max-width: 500px;
    min-width: ${(props) =>
      props.styles.width ? `${props.styles.width}px` : "250px"};
    min-height: ${(props) =>
      props.styles.height ? `${props.styles.height}px` : "250px"};
    cursor: move;
  }
`;

export const CheckBox = styled.div`
  input[type="checkbox"] {
    /* Double-sized Checkboxes */
    -ms-transform: scale(0.4); /* IE */
    -moz-transform: scale(0.4); /* FF */
    -webkit-transform: scale(0.4); /* Safari and Chrome */
    -o-transform: scale(0.4); /* Opera */
    transform: scale(0.4);
    padding: 1px;
    position: relative;
  }
  /* border: 2px solid red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  label {
    white-space: nowrap;
  }
`;

export const FooterFormComponents = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  border-top: 1px solid #ccc;
  height: 8%;
`;

export const ButtonSaveFormComponents = styled.button.attrs({
  type: "button",
})`
  min-width: 100px;
  min-height: 25px;
  cursor: pointer;
`;

export const AddItem = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9999999999999999 !important;
  left: 8%;
  min-height: 100px;
  min-width: 200px;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    min-height: 30px;
    min-width: 90%;
    border: none;
    border-radius: 4px;
    padding-left: 2px;
    background-color: #ddd;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export const ButtonSaveItem = styled.button.attrs({
  type: "submit",
})`
  min-height: 30px;
  min-width: 90%;
  margin-bottom: 15px;
`;

export const Delete = styled.button.attrs({
  type: "button",
})`
  height: 20px;
  width: 20px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BoxFormAddCampo = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999999999999999999999999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const FormAddCampo = styled.form`
  position: absolute;
  margin-top: -140px;
  min-height: 200px;
  width: 400px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
`;

export const HeaderAddCampo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
  border-bottom: 1px solid #ccc;

  span {
    margin-left: 20px;
  }
`;

export const BodyAddCampo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  input,
  select,
  button {
    min-width: 90%;
    min-height: 30px;
    margin-top: 10px;
  }
`;

export const FooterAddCampo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  input,
  button {
    min-width: 90%;
    min-height: 30px;
    margin-top: 10px;
  }

  button {
    cursor: pointer;
  }
`;

export const BoxRelacionar = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999999999999999999999999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const FormRelacionar = styled.div`
  position: absolute;
  /* margin-top: -140px; */
  min-height: 90vh;
  min-width: 90vw;
  background-color: #fff;
  border: none;
  border-radius: 4px;
`;

export const HeaderRelacionar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
  border-bottom: 1px solid #ccc;

  span {
    margin-left: 20px;
  }
`;

export const HeaderFormPrincipal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  border-bottom: 1px solid #ccc;
  min-width: 100%;
`;

export const BodyRelacionar = styled.div`
  height: 81vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const FooterRelacionar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  height: 30px;
  border-top: 1px solid #ccc;
  margin-top: 10px;
  padding-top: 10px;
  button {
    cursor: pointer;
    min-height: 30px;
    min-width: 100px;
  }
`;

export const ButtonSaveRelacionar = styled.button.attrs({
  type: "button",
})``;

export const ColRelacionar = styled.div`
  flex: ${(props) => props.size};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormPrincipal = styled.div`
  min-width: 90%;
  min-height: 150px;
  border-radius: 10px;
  background-color: #eee;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 10px;
  flex-direction: column;
`;

export const BodyFormPrincipal = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListFormularios = styled.ul`
  min-width: 90%;
  min-height: 60vh;
  max-height: 60vh;
  overflow: auto;
`;

export const FormRelacionarItem = styled.li`
  min-width: 100%;
  min-height: 100px;
  border: 2px solid #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.2s all;
  background-color: ${(props) => (props.isSelected ? "#b8e2f8" : "")};
  &:hover {
    background-color: ${(props) => (props.isSelected ? "#964141" : "#b8e2f8")};
  }
`;
