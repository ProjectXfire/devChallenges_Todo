import React, { useState, useEffect } from "react";
// Providers
import { FaTrash } from "react-icons/fa";
// Styles
import { Tasks as TasksStyled } from "../styles/tasks";

export const Tasks = ({
  tasks = [],
  removeTask,
  changeTaskStatus,
  activeTag,
}) => {
  const [filterByTag, setFilterByTag] = useState([]);

  useEffect(() => {
    if (activeTag === "All") {
      setFilterByTag(tasks);
    }
    if (activeTag === "Active") {
      setFilterByTag(tasks.filter((item) => item.completed === false));
    }
    if (activeTag === "Completed") {
      setFilterByTag(tasks.filter((item) => item.completed === true));
    }
  }, [activeTag, tasks]);

  return (
    <TasksStyled activeTag={activeTag}>
      {filterByTag.map((task, index) => (
        <li key={index}>
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => changeTaskStatus(task.id)}
            />
            <p>{task.name}</p>
          </div>
          <FaTrash
            color="#f44336"
            size="20"
            onClick={() => removeTask(task.id)}
          />
        </li>
      ))}
    </TasksStyled>
  );
};
