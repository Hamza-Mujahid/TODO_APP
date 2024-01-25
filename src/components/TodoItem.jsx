import { CloseCircleOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Checkbox, List, Space, Typography } from 'antd'
import React, { useState } from 'react'
import EditTas from './EditTask';

const TodoItem = ({ task, deleteTask, toggleTask, editTask }) => {
    const [editing, setEditing] = useState(false);
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
                <Checkbox checked={task.completed} onChange={handleChange} >
                    Task Completed
                </Checkbox>
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