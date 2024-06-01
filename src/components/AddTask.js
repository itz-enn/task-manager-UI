import "../style/AddTask.css";

const AddTask = ({ taskList, setTaskList, oneTask, setOneTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (oneTask.id) {
      //update function
      const date = new Date();
      const updateTask = taskList.map((task) =>
        task.id === oneTask.id
          ? {
              id: oneTask.id,
              name: oneTask.name,
              time: `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`,
            }
          : task
      );
      oneTask.name && setTaskList(updateTask);

      setOneTask({});
    } else {
      //Add function
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`,
      };

      //clears the input field
      oneTask.name && setTaskList([...taskList, newTask]);
      setOneTask({});
    }
  };
 
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={oneTask.name || " "}
          autoComplete="off"
          placeholder="add new task here..."
          onChange={(e) => setOneTask({ ...oneTask, name: e.target.value })}
        />
        <button type="submit">{oneTask.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};

export default AddTask;
