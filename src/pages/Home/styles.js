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
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  background-color: ${(props) => props.backgroundColor};
`;
