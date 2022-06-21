import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.form`
  min-height: 300px;
  min-width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const HeaderForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  min-height: 50px;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
`;

export const BodyForm = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const FooterForm = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  width: 90%;
  margin-top: 20px;
  min-height: 40px;
  font-size: 16px;
`;

export const ButtonSubmit = styled.button`
  width: 90%;
  margin-top: 20px;
  min-height: 40px;
  cursor: pointer;
`;

export const ButtonConfig = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
  background-color: rgba(255, 255, 255, 0);
  color: white;

  transition: all 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: #333;
  }
`;
