import React, { useState } from 'react'
import todoData from '../db/List';
import TodoItem from './TodoItem';
import { Button, DatePicker, Divider, Input, List, Space, TimePicker } from 'antd';
import SearchTodo from './SearchTodo';

const TodoList = () => {
    const [tasks, setTasks] = useState(todoData);
    const [text, setText] = useState('');
    const date = new Date();
    const [userTime, setUserTime] = useState(date)
    const addTask = () => {
        if (text) {
            const newTask = {
                id: Date.now(),
                createdAt: date.getTime(),
                taskLimit: userTime,
                text,
                completed: false,
            }
            setTasks([...tasks, newTask]);
            setText('')
            console.log(date.getTime(), 'Date')
        }
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const editTask = (id, updatedText) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, text: updatedText } : task))

    }

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
    }

    const handleTimerChange = (e) => {
        setUserTime(e.$d)
        console.log(e)
    }

    return (
        <>
            <Space style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap'
            }}>
                <Space.Compact>git
                    <Input value={text} onChange={e => setText(e.target.value)} allowClear={true} />
                    <DatePicker showTime={{ format: 'hh:mm:ss:a' }} onChange={handleTimerChange} />
                    <Button type='primary' onClick={addTask}>Add Task</Button>
                </Space.Compact>
                <SearchTodo dataSource={tasks} />
            </Space>
            <Divider orientation='center'>Tasks</Divider>
            <List
                dataSource={tasks}
                renderItem={task => {
                    return <TodoItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleComplete} editTask={editTask} />
                }}
            />
        </>
    )
}

export default TodoList;