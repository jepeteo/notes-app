import React from 'react'
import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Footer from './components/Footer'
import icon_sun from '/src/assets/sun1.png'
import icon_moon from '/src/assets/half-moon.png'
import { nanoid } from 'nanoid'

function App() {
    const [taskList, setTaskList] = React.useState(() => {
        const storedTasks = JSON.parse(localStorage.getItem('taskList'))
        return storedTasks || []
    })
    const [darkMode, setDarkMode] = React.useState(true)

    // Save taskList to localStorage
    React.useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList))
    }, [taskList])

    const addTask = (text) => {
        const newTask = {
            id: nanoid(8),
            text: text,
            isCompleted: false
        }
        setTaskList([...taskList, newTask])
    }

    const handleCheckboxChange = (taskId) => {
        setTaskList(prevTaskList =>
            prevTaskList.map(task =>
                task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task

            )
        )
    }

    const handleSaveTask = (taskId, newText) => {
        setTaskList(prevTaskList =>
            prevTaskList.map(task =>
                task.id === taskId ? { ...task, text: newText } : task
            )
        )
    }

    const handleDeleteTask = (taskId) => {
        setTaskList(prevTaskList =>
            prevTaskList.filter(task => task.id !== taskId)
        )
    }

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <Header />
            <button className={`switch ${darkMode ? "off" : "on"}`} onClick={toggleDarkMode}>
                <span className="switch--icon" >
                </span>
            </button>
            <div className="task-list">
                <TaskForm addTask={addTask} />
                <TaskList
                    taskList={taskList}
                    onChange={handleCheckboxChange}
                    onDelete={handleDeleteTask}
                    onSave={handleSaveTask}
                />
            </div>
            <Footer />
        </div>
    )
}

export default App
