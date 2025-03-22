import React, { useState } from "react";

const TaskItem = ({ task, onEdit, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
      {/* Editable Task Title */}
      {editMode ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded"
        />
      ) : (
        <span className="text-lg font-medium">{task.title}</span>
      )}

      {/* Status Label (Displayed Separately) */}
      <span
        className={`px-3 py-1 rounded-full text-sm font-semibold ${
          task.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600"
        }`}
      >
        {task.status}
      </span>

      <div className="flex gap-2">
        {/* Status Change Button */}
        <button
          onClick={() => onEdit(task._id, newTitle, task.status === "Pending" ? "Completed" : "Pending")}
          className="px-3 py-1 rounded bg-gray-800 text-white hover:bg-gray-600"
        >
          {task.status === "Pending" ? "Mark as Completed" : "Mark as Pending"}
        </button>

        {/* Edit/Save Button */}
        {editMode ? (
          <button
            onClick={() => {
              onEdit(task._id, newTitle, task.status);
              setEditMode(false);
            }}
            className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Save
          </button>
        ) : (
          <button onClick={() => setEditMode(true)} className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">
            Edit
          </button>
        )}

        {/* Delete Button */}
        <button onClick={() => onDelete(task._id)} className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
