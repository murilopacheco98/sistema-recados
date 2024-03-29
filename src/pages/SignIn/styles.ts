import styled from "styled-components";

export const Body = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: #1e40af;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftLogin = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: #77ffc0;
  }
`;

export const RightLogin = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: left;
  margin-left: 10vw;
  align-items: center;
`;

export const CardLogin = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 35px;
  background-color: #113059;
  border-radius: 20px;
  box-shadow: 0px 10px 40px #00000056;
  h1 {
    color: #91b7d9;
    font-weight: 800;
    margin: 0;
  }
`;

export const Chart = styled.div`
  width: 80%;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0px;
`;

export const FormField = styled.div`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 15px;
  background-color: #514869;
  color: #f0ffffde;
  font-size: 12pt;
  box-shadow: 0px 10px 40px #00000056;
  box-sizing: border-box;
  outline: none;
  label {
    color: #f0ffffde;
    margin-bottom: 10px;
  }
`;

export const FormError = styled.div`
  display: block;
  color: #fff;
  font-size: 0.8em;
  ::placeholder {
    color: #f0ffff94;
  }
`;

export const Button = styled.div`
  width: 100%;
  padding: 16px 0px;
  border: none;
  border-radius: 6px;
  outline: none;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 3px;
  cursor: pointer;
  margin-top: 15px;
  background: #b3daf2;
  color: black;
`;
