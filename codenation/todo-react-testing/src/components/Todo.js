import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  getTasks,
  setTask,
  setTasks,
  updateTask,
  deleteTask,
} from "../actions";

const Todo = () => {
  const dispatch = useDispatch();
  const { task, tasks } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const handleInputChange = (evt) => dispatch(setTask(evt.target.value));

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (!task.trim()) return;
    dispatch(setTasks([...tasks, task]));
    dispatch(setTask(""));
  };

  const handleEditTask = (index) => {
    dispatch(updateTask(index));
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          data-testid="form-field"
          type="text"
          onChange={handleInputChange}
          placeholder="Type a new task"
          value={task}
        />
        <button data-testid="form-btn" type="submit">
          Add new task
        </button>

        <table data-testid="table">
          <thead>
            <tr>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t, index) => (
              <tr key={index}>
                <td>{t}</td>
                <td>
                  <button onClick={() => handleEditTask(index)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDeleteTask(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </>
  );
};

export default Todo;
