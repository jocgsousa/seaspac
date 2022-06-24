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
  max-height: 93.8vh;
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
  right: -80px;
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
  /* display: none; */
  min-height: 0px;
  max-height: 250px;
  height: 0px;
  overflow-y: auto;
  overflow-x: hidden;
  border-left: 1px solid #333;
  margin-left: 10px;
  transition: 0.2s all;
  min-width: 20%;
  top: -15px;
  z-index: 1;
  position: relative;
`;

export const Form = styled.div`
  margin-top: 15px;
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
