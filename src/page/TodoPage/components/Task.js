import React from "react";
import { CardContainer, DeleteButton, EditButton, CheckboxButton, CardDate, CalendarIcon } from "../shared/style/Card.style";
import { useDispatch } from "react-redux";
import { Card } from "antd";

const { Meta } = Card;
function Task({ task, handleCheck }) {
  const dispatch = useDispatch();

  return (
    <>
      <CardContainer
        style={{ width: 300 }}
        actions={[
          <CheckboxButton onChange={(event) => handleCheck(task, event)} key={task.id} value={task} checked={task.complete ? true : false} />,
          <EditButton
            onClick={() =>
              dispatch({
                type: "EDIT_TASK",
                id: task.id,
              })
            }
          />,
          <DeleteButton
            onClick={() =>
              dispatch({
                type: "DELETE_TASK",
                id: task.id,
              })
            }
          />,
        ]}
      >
        <Meta title={task.taskName} description={task.taskDescription} style={task.complete === true ? { textDecoration: "line-through" } : {}} />
        <CardDate>
          <CalendarIcon />
          <span style={task.complete === true ? { textDecoration: "line-through" } : {}}> {`${task.startDate} - ${task.endDate}`}</span>
        </CardDate>
      </CardContainer>
    </>
  );
}

export default Task;
