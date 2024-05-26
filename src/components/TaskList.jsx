import React from 'react';
import TaskItem from './TaskItem';
import '../css/TaskList.css';

export default function TaskList({ taskList, onChange, onDelete, onSave }) {
    return (
        <div>
            {taskList.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onChange={onChange}
                    onDelete={onDelete}
                    onSave={onSave}
                />
            ))}
        </div>
    );
}
