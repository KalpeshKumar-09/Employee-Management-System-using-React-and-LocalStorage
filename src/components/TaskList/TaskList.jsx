import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="taskList"
      className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap  h-[50%] w-full  mt-10 py-5"
    >
      {data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={index} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={index} data={elem} />;
        }
        if (elem.completedTask) {
          return <CompleteTask key={index} data={elem} />;
        }
        if (elem.failedTask) {
          return <FailedTask key={index} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
