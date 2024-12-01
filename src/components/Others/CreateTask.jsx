const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task TItle</h3>
            <input
              type="text"
              placeholder="Make"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4 border-[1px]"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              name=""
              id=""
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4 border-[1px]"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input
              type="text"
              placeholder="employee name"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 mb-4 border-[1px]"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              placeholder="design, dev, etc"
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
