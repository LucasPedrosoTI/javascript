export function getTasks() {
  return {
    type: "GET_TASKS",
  };
}

export function setTask(task) {
  return {
    type: "SET_TASK",
    payload: task,
  };
}

export function setTasks(tasks) {
  return {
    type: "SET_TASKS",
    payload: tasks,
  };
}

export function updateTask(index) {
  return {
    type: "UPDATE_TASK",
    payload: index,
  };
}

export function deleteTask(index) {
  return {
    type: "DELETE_TASK",
    payload: index,
  };
}
