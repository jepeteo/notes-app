import React from "react";
import "../css/TaskForm.css";


export default function Task({ addTask }) {
    const [newTask, setNewTask] = React.useState("")

    const handleChange = (event) => {
        setNewTask(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(newTask)
        if (!newTask.trim()) return // prevent adding empty task
        addTask(newTask)
        setNewTask("") // clear input field
    }

    return (
        <div>
            <form className="taskForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add new task"
                    value={newTask}
                    onChange={handleChange}
                />
                {/* <button type="submit" >Add</button> */}
            </form>
        </div>
    );
}