const taskReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return state.concat([action.task]);
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.id);
    case "EDIT_TASK":
      return state.map((task) => (task.id === action.id ? { ...task, editing: !task.editing } : task));
    case "CHECK_TASK":
      return state.map((task) => (task.id === action.id ? { ...task, complete: !task.complete } : task));
    case "UPDATE_TASK":
      return state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            editing: !task.editing,
            taskName: action.data.newTaskName,
            taskDescription: action.data.newTaskDescription,
            startDate: action.data.newStartDate,
            endDate: action.data.newEndDate,
          };
        } else return task;
      });

    default:
      return state;
  }
};
export default taskReducer;
