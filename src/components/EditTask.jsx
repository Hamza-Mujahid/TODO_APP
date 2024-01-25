import React, { useState } from 'react'
import { Button, Input, Space } from 'antd'
import { EditFilled } from '@ant-design/icons'

const EditTask = ({ task, handleTextUpdate }) => {
    const [text, setText] = useState(task.text);
    return (
        <Space.Compact>
            <Input value={text} onChange={e => setText(e.target.value)} />
            <Button type='primary' onClick={() => handleTextUpdate(task.id, text)}><EditFilled /></Button>
        </Space.Compact>
    )
}

export default EditTask
