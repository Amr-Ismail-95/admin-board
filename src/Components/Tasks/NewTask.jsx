import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addOrUpdateTasks } from "../../config";

const NewTask = ({ handleFinishAdding, user, handlerefresh }) => {
  const [addedTask, setAddedTask] = useState("");
  const handleCancel = () => handleFinishAdding();
  const handleTask = (e) => setAddedTask(e.target.value);
  const handleNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      admin: user.name,
      adminId: user.id,
      body: addedTask,
      handler: user.name,
      handlerId: user.id,
      id: uuid(),
      selfAdded: true,
    };
    if (!newTask.body) {
      handleFinishAdding();
      return;
    }
    addOrUpdateTasks(newTask);
    handlerefresh();
    handleFinishAdding();
  };

  return (
    <form
      onSubmit={handleNewTask}
      className="bg-green flex justify-around tie font-bold"
    >
      <div className="flex flex-col justify-around gap-3">
        <div className=" h-1/6 text-xl flex gap-5 items-center justify-between">
          <label className="font-base text-3xl">Task</label>
          <textarea
            onChange={handleTask}
            type="text"
            className="outline-red-950 p-2 bg-zinc-100 text-red-950"
            cols="50"
            rows="8"
          />
        </div>
      </div>
      <div className="flex flex-col justify-evenly">
        <button
          onClick={handleCancel}
          className="bg-rose-500 w-28 text-2xl rounded-full h-9 font-bold text-zinc-200 hover:bg-zinc-600 hover:text-rose-500 duration-100 ease-in"
        >
          Cancel
        </button>
        <button
          className="bg-rose-500 w-28 text-2xl rounded-full h-9 font-bold text-zinc-200  hover:bg-zinc-600 hover:text-rose-500 duration-100 ease-in"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default NewTask;
