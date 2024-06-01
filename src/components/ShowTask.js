import "../style/ShowTask.css";
const ShowTask = ({ taskList, setTaskList, oneTask, setOneTask }) => {
  const handleClick = () => {
    setTaskList([]);
  };

  const handleEdit = (id) => {
    setOneTask({});
    const selectedTask = taskList.find((task) => task.id === id);
    setOneTask(selectedTask);
  };

  const handleDelete = (id) => {
    const updatedList = taskList.filter((task) => id !== task.id);
    setTaskList(updatedList);
  };

  return (
    <section className="showTask">
      <div className="top">
        <div className="title">
          <span className="todo">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>

        <button onClick={handleClick} className="clearAll">
          Clear All
        </button>
      </div>
      <ul>
        {taskList.map((e) => (
          <li key={e.id}>
            <p>
              <span className="name">{e.name}</span>
              <span className="time">{e.time}</span>
            </p>
            <div>
              <i
                onClick={() => handleEdit(e.id)}
                className="bi bi-pencil-square"
              ></i>
              <i onClick={() => handleDelete(e.id)} className="bi bi-trash"></i>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
