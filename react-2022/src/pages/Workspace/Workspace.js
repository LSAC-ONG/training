import React from 'react';

import Board from '../../components/Board/Board';
import Footer from '../../components/Footer/Footer';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';

import { useState, useEffect, createContext } from 'react';	

// tree de componente
// root - App
// copii - Workspace
// copii - Board, AddNewTaskForm, Footer
// ...

// state management solutions
// 

export const WorkspaceContext = createContext(null);

export default function Workspace() {

    const [boardTitles] = useState(['To Do', 'In Progress', 'Done']);
    const [toDoTasks, setToDoTasks] = useState(['Task1', 'Tasl10', 'Task2', 'Task3']);
    const [inProgressTasks, setInProgressTasks] = useState(['Task4', 'Task5', 'Task6']);
    const [doneTasks, setDoneTasks] = useState(['Task7', 'Task8', 'Task9']);

    useEffect(() => {
        //callback cand se monteaza componenta
        //facem fetch de date de la un server
    }, []);

    useEffect(() => {
        console.log("S-a updatat lista de taskuri");
    }, [toDoTasks, inProgressTasks, doneTasks]);

    const addTask = (newTask) => {
        //console.log("[Workspace] New task: " + newTask);
        setToDoTasks([...toDoTasks, newTask]);
    }

    const workspaceContextValues = { color: "red" };

    return (
        <WorkspaceContext.Provider value={workspaceContextValues}>
            <div>
                <AddTaskForm addTask = {addTask}/>
            </div>
            <div className="flex flex-row justify-between mt-10 ml-4 mr-4">
                <Board title={boardTitles[0]} items={toDoTasks}/>
                <Board title={boardTitles[1]} items={inProgressTasks}/>
                <Board title={boardTitles[2]} items={doneTasks}/>
            </div>
            <div>
                <Footer/>
            </div>
        </WorkspaceContext.Provider>
    );
}