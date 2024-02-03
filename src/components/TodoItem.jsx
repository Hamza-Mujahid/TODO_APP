import { CloseCircleOutlined, EditOutlined } from '@ant-design/icons'
import { Button, List, Space, Typography } from 'antd'
import React, { useState } from 'react'
import EditTas from './EditTask';

const TodoItem = ({ task, deleteTask, toggleTask, editTask }) => {
    const time = new Date(task.createdAt).toLocaleTimeString();
    const [counter, setCounter] = useState('');
    const [editing, setEditing] = useState(false);

    // problem creating function I think it is still runnig in the background
    const countDownTimer = (givenTime) => {
        let x = setInterval(function () {
            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = givenTime - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            let counter = `${days}: ${hours}: ${hours}: ${minutes}: ${seconds}`
            setCounter(counter);

            // When Count donw is finished
            if (distance <= 0) {
                clearInterval(x)
                setCounter('Completed');
                toggleTask(task.id);
            }
        }, 1000);

        return counter
    }

    const handleChange = () => {
        toggleTask(task.id)
    }

    const handleUpdateClick = () => {
        setEditing(true);
    }
    const handleTextUpdate = (id, newText) => {
        editTask(id, newText);
        setEditing(false);
    }
    return (
        <List.Item className='listItem'>
            <Space>
                {time} : {countDownTimer(task.taskLimit)}
            </Space>
            <Space>
                {editing ? <EditTas task={task} handleTextUpdate={handleTextUpdate} /> : <Typography.Text >{task.text}</Typography.Text>}
            </Space>
            <Space>
                <Button type='primary' onClick={() => deleteTask(task.id)}><CloseCircleOutlined /></Button>
                <Button type='primary' onClick={handleUpdateClick}><EditOutlined /></Button>
            </Space>
        </List.Item>
    )
}

export default TodoItem