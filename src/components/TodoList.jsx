import React, { useRef, useState } from 'react'
import todoData from '../db/List';
import TodoItem from './TodoItem';
import { Button, Divider, Input, List, Space } from 'antd';
import SearchTodo from './SearchTodo';

const TodoList = () => {
    const [tasks, setTasks] = useState(todoData);
    const [text, setText] = useState('');
    const taskInput = useRef(null)

    const addTask = () => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
        }
        setTasks([...tasks, newTask]);
        setText('')
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

    return (
        <>
            <Space style={{
                display: 'flex',
                justifyContent: 'space-around'
            }}>
                <Space.Compact>
                    <Input value={text} onChange={e => setText(e.target.value)} ref={taskInput} allowClear={true} />
                    <Button type='primary' onClick={addTask}>Add Task</Button>
                </Space.Compact>
                <SearchTodo />
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