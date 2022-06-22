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
  width: 100%;
  background: transparent;
  border: none;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding-left: 10px;
  /* border: 1px solid #ccc; */
`;

export const Line = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin-top: ${(props) => `${props.top}px`};
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

export const ListSections = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 93.8vh;
  padding-bottom: 50px;
`;

export const Section = styled.div`
  width: 100%;
  background: transparent;
  border: none;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding-left: 10px;
  font-size: 11px;
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
