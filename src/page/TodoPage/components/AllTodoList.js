import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BoxItem, FlexBoxContainer } from "../shared/style/Card.style";
import EditTask from "./EditTask";
import { ButtonFilter, ContainerButtonFilter } from "../shared/style/Todo.styled";
import filterButton from "../../../util/filterButton";
import Task from "./Task";

function AllTodoList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskReducer);
  const [checked, setChecked] = useState([]);
  //----------------- CREATE VARIABLE FOR FILTER BUTTON -----------------//
  const [filterTask, setFilterTask] = useState("All");

  // Add and Remove checked todo task
  function handleCheck(task, event) {
    var updatedTask = [...checked];
    const checkListID = checked?.map((item) => item.id);

    if (event.target.checked) {
      updatedTask = [...checked, event.target.value];
    } else {
      updatedTask.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedTask);
    dispatch({ type: "CHECK_TASK", id: task.id });
    checkListID.includes(task.id);
  }

  return (
    <>
      <ContainerButtonFilter>
        {filterButton.map((button, index) => {
          return (
            <ButtonFilter key={index} style={{ backgroundColor: `${button.background}` }} onClick={() => setFilterTask(button.value)}>
              {button.value}
            </ButtonFilter>
          );
        })}
      </ContainerButtonFilter>
      <FlexBoxContainer>
        {filterTask === "All"
          ? tasks?.map((task) => {
              return <BoxItem key={task.id}>{!task.editing ? <Task task={task} handleCheck={handleCheck} /> : <EditTask task={task} />}</BoxItem>;
            })
          : filterTask === "Completed" &&
            tasks
              .filter((task) => task.complete === true)
              .map((task) => {
                return <BoxItem key={task.id}>{!task.editing ? <Task task={task} handleCheck={handleCheck} /> : <EditTask task={task} />}</BoxItem>;
              })}
        {filterTask === "Incomplete" &&
          tasks
            .filter((task) => task.complete === false)
            .map((task) => {
              return <BoxItem key={task.id}>{!task.editing ? <Task task={task} handleCheck={handleCheck} /> : <EditTask task={task} />}</BoxItem>;
            })}
      </FlexBoxContainer>
    </>
  );
}

export default AllTodoList;
