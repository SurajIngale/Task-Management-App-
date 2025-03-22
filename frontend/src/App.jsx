import { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

const App = () => {
  const [refresh, setRefresh] = useState(false);
  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Task Management</h1>
      <AddTask refreshTasks={() => setRefresh(!refresh)} />
      <TaskList key={refresh} />
    </div>
  );
};

export default App;
