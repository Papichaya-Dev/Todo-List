import styled from "styled-components";
import background from "../images/background.jpg";
import { DatePicker } from "antd";

export const Container = styled.div`
  width: 100%;
  height: calc(0.664 * 100vw);
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #fcfcfe;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: bold;
  color: #535353;
`;

export const BoxAddTask = styled.div`
  width: 35%;
  height: 34vh;
  background-color: #f9f9f9;
  border-radius: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const RowOfTask = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
  padding-top: 20px;
`;

export const InputField = styled.input`
  margin-left: ${(props) => `${props.margin}px`};
  background-color: ;
  border: none;
  width: 50%;
  padding-left: 10px;
  ::placeholder {
    color: #d3d3d3;
  }
`;

export const SelectDate = styled(DatePicker)`
  margin-left: 15px;
  margin-right: 20px;
  border: none;
`;

export const ButtonAddTask = styled.button`
  background-color: #7ed296;
  font-weight: bold;
  border: none;
  width: 15%;
  height: 10vh;
  border-radius: 40px;
  font-size: 20px;
  color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #7ed296;
    opacity: 0.5;
  }
`;

export const ButtonFilter = styled.button`
  width: 10%;
  height: 7vh;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 20px;
  margin-top: 20px;
  &:hover {
    opacity: 0.8;
`;

export const ContainerButtonFilter = styled.div`
  margin-left: 30px;
`;
