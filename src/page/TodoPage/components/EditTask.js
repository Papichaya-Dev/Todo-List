import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BoxAddTask, RowOfTask, InputField, SelectDate, ButtonAddTask } from "../shared/style/EditTask.style";

function EditTask({ task }) {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newStartDate, setNewStartDate] = useState("");
  const [newEndDate, setNewEndDate] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setNewTaskName(task.taskName);
    setNewTaskDescription(task.taskDescription);
    setNewStartDate(task.startDate);
    setNewEndDate(task.endDate);
  }, [task]);

  function handleSubmitEditTask(event) {
    event.preventDefault();

    const data = {
      newTaskName,
      newTaskDescription,
      newStartDate,
      newEndDate,
    };
    dispatch({
      type: "UPDATE_TASK",
      id: task.id,
      data: data,
    });
  }

  return (
    <>
      <BoxAddTask>
        <form onSubmit={handleSubmitEditTask}>
          <RowOfTask>
            Name <InputField margin="42" placeholder="input name" type="text" onChange={(event) => setNewTaskName(event.target.value)} value={newTaskName} required />
          </RowOfTask>
          <RowOfTask>
            Description <InputField placeholder="input description" type="text" onChange={(event) => setNewTaskDescription(event.target.value)} value={newTaskDescription} required />
          </RowOfTask>
          <RowOfTask>
            Start date <SelectDate onChange={(date, dateString) => setNewStartDate(dateString)} allowClear={true} format={["DD/MM/YY"]} />
            End <SelectDate style={{ marginLeft: "60px" }} onChange={(date, dateString) => setNewEndDate(dateString)} allowClear={true} format={["DD/MM/YY"]} />
          </RowOfTask>
          <ButtonAddTask>SAVE</ButtonAddTask>
        </form>
      </BoxAddTask>
    </>
  );
}

export default EditTask;
