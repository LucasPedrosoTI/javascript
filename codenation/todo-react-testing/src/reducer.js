const INITIAL_STATE = {
  task: "",
  tasks: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        tasks: ["task1", "task2"],
      };
    case "SET_TASK":
      return {
        ...state,
        task: action.payload,
      };

    case "UPDATE_TASK":
      const editedTask = window.prompt("Please enter new name for this task");

      if (!editedTask.trim()) {
        window.alert("Invalid task name");
        return { ...state };
      }

      const editedTasks = state.tasks.map((task, i) => {
        if (i === action.payload) return (task = editedTask);
        return task;
      });

      return {
        ...state,
        tasks: editedTasks,
      };

    case "DELETE_TASK":
      const shouldDeleteTask = window.confirm(
        "Are you sure you want to delete this task?"
      );

      if (!shouldDeleteTask) return { ...state };

      const filteredTasks = state.tasks.filter((_, i) => i !== action.payload);

      return {
        ...state,
        tasks: filteredTasks,
      };
    case "SET_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };

    default:
      return state;
  }
}
