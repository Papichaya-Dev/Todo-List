import React, { useState } from "react";
import { BoxAddTask, RowOfTask, InputField, SelectDate, ButtonAddTask } from "../shared/style/Todo.styled";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

function TodoForm() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(event) {
    const task = {
      id: uuidv4(),
      taskName,
      taskDescription,
      startDate,
      endDate,
      editing: false,
      complete: false,
    };
    dispatch({
      type: "ADD_TASK",
      task,
    });

    setTaskName("");
    setTaskDescription("");
    setStartDate("");
    setEndDate("");
  }

  return (
    <BoxAddTask>
      <form onSubmit={handleSubmit}>
        <RowOfTask>
          Name <InputField margin="55" placeholder="input name" type="text" onChange={(event) => setTaskName(event.target.value)} value={taskName} required />
        </RowOfTask>
        <RowOfTask>
          Description <InputField placeholder="input description" type="text" onChange={(event) => setTaskDescription(event.target.value)} value={taskDescription} required />
        </RowOfTask>
        <RowOfTask>
          Start date <SelectDate onChange={(date, dateString) => setStartDate(dateString)} allowClear={true} format={["DD/MM/YY"]} required />
          End <SelectDate onChange={(date, dateString) => setEndDate(dateString)} allowClear={true} format={["DD/MM/YY"]} required />
        </RowOfTask>
        <ButtonAddTask>ADD</ButtonAddTask>
      </form>
    </BoxAddTask>
  );
}

export default TodoForm;
