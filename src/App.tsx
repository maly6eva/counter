import React, {useState} from 'react';
import './App.css';
import {TaskPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";


export type TaskFilterPropsType = 'Полный список' | 'Эксклюзивный' | 'Обычный' | 'Итого';

function App() {

    let [tasks, setTasks] = useState<TaskPropsType[]>([
    ])

    const removeTask = (taskId: string) => {
        const filterTasks = tasks.filter(t => {
            return t.id !== taskId
        })
        setTasks(filterTasks)
    }

    let [filter, setFilter] = useState<TaskFilterPropsType>('Полный список')

    let taskForTodolist = tasks
    if (filter === 'Эксклюзивный') {
        taskForTodolist = tasks.filter(t => t.isDone)
    }
    if (filter === 'Обычный') {
        taskForTodolist = tasks.filter(t => !t.isDone)
    }


    const addTasks = (numberId: number) => {
        let newTask = {id: v1(), title: numberId.toString(), isDone: false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }


    return (
        <div className="App">
            <Todolist title={'Удачной работы!  🦁'} tasks={taskForTodolist} removeTask={removeTask}
                      addTasks={addTasks}/>
        </div>
    );
}

export default App;
