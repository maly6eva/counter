import React, {useState} from 'react';
import {Button} from "./Button";
import {TaskFilterPropsType} from "./App";


type TodolistPropsType = {
    title: string,
    tasks: TaskPropsType[],
    removeTask: (taskId: string) => void
    addTasks: (numberId: number) => void
}

export type TaskPropsType = {
    id: string,
    title: string,
    isDone: boolean
}

export const Todolist = ({title, tasks, removeTask, addTasks}: TodolistPropsType) => {
    const [taskTitle, setTaskTitle] = useState<number | ''>('')
    const [numbers, setNumbers] = useState<number[]>([])


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setTaskTitle(value === '' ? '' : Number(value))
    }


    const handleAddNumber = () => {
        if (taskTitle !== '' && !isNaN(taskTitle)) {
            setNumbers((prev) => [...prev, taskTitle])
            addTasks(taskTitle)
            setTaskTitle('')
        }
    }

    const handleRemoveNumber = (numToRemove: number) => {
        setNumbers((prev) => prev.filter((num) => num !== numToRemove))
    }

    const totalDigitsSum = numbers
        .reduce((sum, digit) => sum + digit, 0)


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input type={'number'}
                       placeholder={'Вводи числа'}
                       value={taskTitle}
                       onChange={handleInputChange}/>

                <Button title={'+'} onClick={handleAddNumber}/>

            </div>
            <h4>Вся сумма: {totalDigitsSum}</h4>
            {tasks.length === 0 ? (
                <p>Список пуст 😜</p>
            ) : (
                <ol>
                    {numbers.map((num, index) => {
                        return (
                            <li key={index}>
                                <input type='text' placeholder={'для заметок'}
                                       />
                                {num}<Button title={'+'} onClick={() => handleRemoveNumber(num)}/>
                            </li>
                        )
                    })}
                </ol>
            )}
        </div>
    );
};

