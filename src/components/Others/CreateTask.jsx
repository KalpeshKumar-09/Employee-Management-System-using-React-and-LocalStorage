import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failedTask: true,
      completedTask: false,
    });

    const data = userData;

    data.forEach((elem) => {
      if (assignTo == elem.name) {
        elem.tasks.push(task);
        elem.newTaskCount = elem.newTaskCount + 1;
      }
    });
    setUserData(data);

    setTaskDate("");
    setTaskDescription("");
    setAssignTo("");
    setCategory("");
    setTaskTitle("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task TItle</h3>
            <input
              type="text"
              placeholder="Make"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4 border-[1px]"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              name=""
              id=""
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4 border-[1px]"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input
              type="text"
              placeholder="employee name"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4 border-[1px]"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              placeholder="design, dev, etc"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4 border-[1px]"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name=""
            id=""
            rows="10"
            cols="30"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4 border-[1px]"
          ></textarea>
          <button className="bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full py-3">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
