import React, {useState} from 'react';
import {Button} from "./Button";
import {TaskFilterPropsType} from "./App";


type TodolistPropsType = {
    title: string,
    tasks: TaskPropsType[],
    removeTask: (taskId: string) => void
    changeTask: (filter: TaskFilterPropsType) => void
    addTasks: (title: string) => void
}

export type TaskPropsType = {
    id: string,
    title: string,
    isDone: boolean
}

export const Todolist = ({title, tasks, removeTask, changeTask, addTasks}: TodolistPropsType) => {
    const [taskTitle, setTaskTitle] = useState('')

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={taskTitle} onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
                <Button title={'+'}
                        onClick={() => {
                            addTasks(taskTitle)
                            setTaskTitle('')
                        }}/>
                {/*<button>+</button>*/}
            </div>

            {tasks.length === 0 ? (
                <p>Список пуст</p>
            ) : (
                <ol>
                    {tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox"
                                       checked={task.isDone}/>
                                <span>{task.title}</span>
                                <Button title={'+'} onClick={() => removeTask(task.id)}/>
                                {/*<button onClick={() =>removeTask(task.id)}>+</button>*/}
                            </li>
                        )
                    })}
                </ol>
            )}
            <div>
                {/*<button>All</button>*/}
                {/*<button>Active</button>*/}
                {/*<button>Completed</button>*/}
                <Button title={'Полный список'} onClick={() => changeTask('Полный список')}/>
                <Button title={'Эксклюзивный'} onClick={() => changeTask('Эксклюзивный')}/>
                <Button title={'Обычный'} onClick={() => changeTask('Обычный')}/>
            </div>
        </div>
    );
};

