// Components
import { useState, useEffect } from "react";
import { Container } from "./components/container";
import { Menu } from "./components/menu";
import { NewItem } from "./components/newItem";
import { Tasks } from "./components/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [activeTag, setActiveTag] = useState("All");
  const [value, setValue] = useState("");

  const addTask = (value) => {
    if (value !== "") {
      const task = { name: value, completed: false, id: tasks.length + 1 };
      setTasks([...tasks, task]);
      fetch("http://localhost:8000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      }).catch((error) => console.log(error));
    }
  };

  const removeTask = (id) => {
    const updateTasks = [...tasks];
    setTasks(updateTasks.filter((task) => task.id !== id));
    fetch("http://localhost:8000/tasks/" + id, {
      method: "DELETE",
    }).catch((error) => console.log(error));
  };

  const changeTaskStatus = (id) => {
    const getIndex = tasks.findIndex((task) => task.id === id);
    const updateTasks = [...tasks];
    updateTasks[getIndex] = {
      ...updateTasks[getIndex],
      completed: !updateTasks[getIndex].completed,
    };
    setTasks(updateTasks);
    fetch("http://localhost:8000/tasks/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateTasks[getIndex]),
    }).catch((error) => console.log(error));
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <h1>
        <strong>#todo</strong>
      </h1>
      <Menu setActiveTag={setActiveTag} />
      <NewItem value={value} setValue={setValue} addTask={addTask} />
      <Tasks
        tasks={tasks}
        activeTag={activeTag}
        removeTask={removeTask}
        changeTaskStatus={changeTaskStatus}
      />
    </Container>
  );
}

export default App;
