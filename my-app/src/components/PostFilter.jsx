import React from 'react';
import MyInput from './UI/input/MyInput';
import Select from './UI/select/Select';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e=> setFilter({...filter, query: e.target.value})}
                placeholder={'Search'}/>

            <Select
                value={filter.sort}
                onChange={selectedSort=>setFilter({...filter, sort: selectedSort})}
                defaultValue='Search by'
                options={[
                    {value: 'title', name:'Title'},
                    {value: 'body', name: 'Description'}
                ]}
            />
        </div>
    );
};

export default PostFilter;
