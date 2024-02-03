import { Input, List } from 'antd'
import React, { useState } from 'react'

const SearchTodo = (props) => {
    const { dataSource } = props;
    const { Search } = Input;
    const [searchedData, setSearchData] = useState([]);
    const onChangeHandler = (e) => {
        const searchText = e.target.value
        if (searchText === '') {
            setSearchData([])
        } else {
            setSearchData(dataSource.filter(d => d.text.toLowerCase().includes(searchText.toLowerCase())))
        }
    }
    return (
        <>
            <Search placeholder="input search text" size="middle" onChange={onChangeHandler} />
            {
                searchedData.length > 0 &&
                <List
                    style={{ position: 'absolute', backgroundColor: '#f0f0f0', zIndex: 9 }}
                    size='small'
                    className='listContainer'
                    bordered
                    dataSource={searchedData}
                    renderItem={(item) => <List.Item>{item.text}</List.Item>}
                />
            }
        </>
    )
}

export default SearchTodo
