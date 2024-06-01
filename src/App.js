import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";
import "./App.css";

const App = () => {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("allTasks")) || []
  );
  const [oneTask, setOneTask] = useState({});
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(taskList));
  }, [taskList]);

  const handleClick = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);
  };

  return (
    <div className={isToggled ? " App dark" : "App"}>
      <Header handleClick={handleClick} isToggled={isToggled}/>
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        oneTask={oneTask}
        setOneTask={setOneTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        oneTask={oneTask}
        setOneTask={setOneTask}
      />
    </div>
  );
};

export default App;
