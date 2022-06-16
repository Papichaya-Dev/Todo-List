import styled from "styled-components";
import { Button, Card, Checkbox } from "antd";
import deleteButton from "../images/delete.png";
import editButton from "../images/edit.png";
import calendar from "../images/calendar.png";

export const FlexBoxContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const BoxItem = styled.div`
  display: block;
  box-sizing: border-box;
  width: 20%;
  padding-left: 16px;
  padding-right: 16px;

  width: 20%;
  height: 20vh;
  margin-right: 20px;
  margin-bottom: 100px;
`;

export const CardContainer = styled(Card)`
  border-radius: 20px;
  .ant-card-body {
    padding: 20px;
  }
  .ant-card-meta-detail > div:not(:last-child) {
    font-size: 20px !important;
    font-weight: bold;
    color: #69ab7c;
  }
  .ant-card-meta-description {
    color: #898989;
    font-size: 16px !important;
  }
  & .ant-card-actions {
    background-color: #747dca;
    border-radius: 0px 0px 15px 15px;
  }
  & .ant-card-actions > li > span {
    display: flex;
    justify-content: center;
  }
`;

export const DeleteButton = styled.div`
  background-image: url(${deleteButton});
  width: 40px;
  height: 40px;
`;

export const EditButton = styled.div`
  background-image: url(${editButton});
  width: 50px;
  height: 40px;
  background-repeat: no-repeat;
`;
export const CheckboxButton = styled(Checkbox)`
  width: 40px;
  height: 40px;
  transform: translateY(5px);
  display: flex;
  justify-content: center;

  .ant-checkbox-inner,
  .ant-checkbox-input {
    transform: scale(1.5);
  }
`;

export const CardDate = styled.div`
  color: gray;
  padding-top: 20px;
  font-size: 16px;
`;

export const CalendarIcon = styled.div`
  background-image: url(${calendar});
  width: 30px;
  height: 40px;
  background-repeat: no-repeat;
  display: inline-block;
  float: left;
`;

export const ButtonLoginForm = styled(Button)`
  border-radius: 30px;
  background-color: #eb5f91;
  color: white;
  height: 50px;
  font-size: 16px;
  margin: 0 auto;
  display: block;
  width: 213px;
`;
