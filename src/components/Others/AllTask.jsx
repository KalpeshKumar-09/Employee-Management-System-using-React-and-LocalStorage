import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-60">
      <div className="h-[80%] overflow-auto">
        {authData.employees.map((elem) => (
          <div
            key={elem.id}
            className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded"
          >
            <h2 className="w-1/5">{elem.name}</h2>
            <h3 className="w-1/5">{elem.newTaskCount}</h3>
            <h5 className="w-1/5">{elem.activeTaskCount}</h5>
            <h5 className="w-1/5">{elem.completedTaskCount}</h5>
            <h5 className="w-1/5">{elem.failedTaskCount}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
