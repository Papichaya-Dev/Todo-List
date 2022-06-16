import styled from "styled-components";
import { DatePicker } from "antd";

export const BoxAddTask = styled.div`
  width: 110%;
  height: 34vh;
  background-color: #f9f9f9;
  border-radius: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const RowOfTask = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-left: 20px;
  padding-top: 20px;
`;

export const InputField = styled.input`
  margin-left: ${(props) => `${props.margin}px`};
  background-color: ;
  border: none;
  width: 60%;

  padding-left: 10px;
  ::placeholder {
    color: #d3d3d3;
  }
`;

export const SelectDate = styled(DatePicker)`
  margin-left: 15px;
  margin-right: 20px;
  margin-bottom: 10px;
  border: none;
  width: 60%;
`;

export const ButtonAddTask = styled.button`
  background-color: #7ed296;
  font-weight: bold;
  border: none;
  width: 23%;
  height: 8vh;
  border-radius: 40px;
  font-size: 20px;
  color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #7ed296;
    opacity: 0.5;
  }
`;
