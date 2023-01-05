import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

function App() {

  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: "Learning Slovene",
    day: "Thur 5th at 20:00pm",
    reminder: false,
    },
    {
    id: 2,
    text: "React Tutorial",
    day: "Friday 6th at 5:00pm",
        reminder: false,
    },
    {
        id: 3,
    text: "Watch Movie",
    day: "Saturday 7th at 2:00pm",
    reminder: false,
    } 
])

  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
