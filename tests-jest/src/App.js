import { useState } from "react";

function App() {
  const [task, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function registerNewTask() {
    setTasks([...task, newTask]);
    setNewTask("");
  }

  return (
    <div className="App">
      <input
        data-testid="input-task"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button data-testid="btn-task" type="button" onClick={registerNewTask}>
        cadastrar
      </button>
      <ul>
        {task.map((task) => (
          <li id={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
