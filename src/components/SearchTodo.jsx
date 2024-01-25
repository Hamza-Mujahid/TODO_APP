import { Input } from 'antd'
import React, { useState } from 'react'

const SearchTodo = () => {
    const { Search } = Input;
    const [text, setText] = useState('')
    const onSearch = (value, _e, info) => {
        // setText(e.target.value);
        console.log(value.target.value)
    }
    return (
        <>
            <Search
                placeholder="input search text"
                enterButton
                size="large"
                onChange={onSearch}
            />
        </>
    )
}

export default SearchTodo
