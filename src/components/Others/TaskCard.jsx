const TaskCard = ({ data }) => {
  return (
    <div className="flex screen justify-between gap-5 mt-10">
      <div className="w-[50%] bg-red-400 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.newTaskCount}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[50%] bg-red-400 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.completedTaskCount}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="w-[50%] bg-red-400 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.activeTaskCount}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="w-[50%] bg-red-400 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.failedTaskCount}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskCard;
