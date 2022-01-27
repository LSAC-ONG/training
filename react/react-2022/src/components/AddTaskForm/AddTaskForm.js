import React from 'react';

import { useState } from 'react';
import { useContext } from 'react';
import { WorkspaceContext } from '../../pages/Workspace/Workspace';

export default function AddTaskForm(props) {

    const { color } = useContext(WorkspaceContext);

    const [newTask, setNewTask] = useState('');

    const handleNewTaskChange = (event) => {
        setNewTask(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        props.addTask(newTask);
        setNewTask('');
    }

    return (
        <div className="ml-4 mt-4 w-full max-w-xl">
            <form>
                <span>{color}</span>
                <div>
                    <label className='block text-gray-700 text-xl font-bold mb-2' htmlFor="addTaskForm">Create new task:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="addTaskForm" type="text" placeholder="New task... (e.g. Take trash out)"
                        value = {newTask}
                        onChange = {handleNewTaskChange}
                        />
                </div>
                <div className="mt-4">
                    <button class="bg-blue-500 
                        hover:bg-blue-700 
                        text-white 
                        font-bold 
                        py-2 px-8 
                        rounded 
                        focus:outline-none 
                        focus:shadow-outline" 
                        type="button"
                        onClick={submitForm}>
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}