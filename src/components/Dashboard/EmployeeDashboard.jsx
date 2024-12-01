import Header from "../Others/Header";
import TaskCard from "../Others/TaskCard";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header data={data} />
      <TaskCard data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
