import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";

function App() {

  const[showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: "Learning Slovene",
    day: "Thur 5th at 20:00pm",
    reminder: true,
    },
    {
    id: 2,
    text: "React Tutorial",
    day: "Friday 6th at 5:00pm",
    reminder: true,
    },
    {
    id: 3,
    text: "Watch Movie",
    day: "Saturday 7th at 2:00pm",
    reminder: false,
    } 
])

// Add Task
const addTask = (task) => {
 const id = Math.floor(Math.random() * 10000) + 1
 const newTask = { id, ...task }
 setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id ))
}

//Toggle reminder
const toggleReminder = (id) => {
  console.log('Toggle', id);
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd = {showAddTask}
      
      ></Header>
      {showAddTask &&  <AddTask onAdd={addTask}></AddTask> }
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : 'No tasks to show'}
    </div>
  );
}

export default App;
