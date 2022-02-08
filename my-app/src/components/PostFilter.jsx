import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                style={{marginTop:'30px'}}
                value={filter.query}
                onChange={e=> setFilter({...filter, query: e.target.value})}
                placeholder={'Search'}/>

            <MySelect
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
