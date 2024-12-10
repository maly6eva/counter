import React, {useState} from 'react';
import './App.css';
import {TaskPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";


export type TaskFilterPropsType = 'Полный список' | 'Эксклюзивный' | 'Обычный';

function App() {

    let [tasks, setTasks] = useState<TaskPropsType[]>([
        // {id: v1(), title: 'HTML&CSS', isDone: true},
        // {id: v1(), title: 'JS', isDone: true},
        // {id: v1(), title: 'ReactJS', isDone: false},
        // {id: v1(), title: 'ReachjJS', isDone: false},
    ])

    const removeTask = (taskId: string) => {
        const filterTasks = tasks.filter(t => {
            return t.id !== taskId
        })
        setTasks(filterTasks)
    }

    let [filter, setFilter] = useState<TaskFilterPropsType>('Полный список')
    const changeTask = (filter: TaskFilterPropsType) => {
        setFilter(filter)
    }

    let taskForTodolist = tasks
    if (filter === 'Эксклюзивный') {
        taskForTodolist = tasks.filter(t => t.isDone)
    }
    if (filter === 'Обычный') {
        taskForTodolist = tasks.filter(t => !t.isDone)
    }

    const addTasks = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }


    return (
        <div className="App">
            <Todolist title={'Удачной работы!'} tasks={taskForTodolist} removeTask={removeTask} changeTask={changeTask}
                      addTasks={addTasks}/>
        </div>
    );
}

export default App;
