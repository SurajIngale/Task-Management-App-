const TaskItem = ({ task, onDelete }) => {
    return (
      <div className="flex justify-between p-3 border rounded bg-gray-100 mb-2">
        <span>{task.title}</span>
        <button onClick={() => onDelete(task._id)} className="bg-red-500 text-white px-2 rounded">
          Delete
        </button>
      </div>
    );
  };
  
  export default TaskItem;
  