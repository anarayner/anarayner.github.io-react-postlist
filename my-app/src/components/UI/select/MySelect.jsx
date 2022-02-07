import React from 'react';
import classes from './Select.module.css'

const MySelect = ({defaultValue, options, value, onChange}) => {
    return (
        <select
            className={classes.select}
            value={value}
            onChange={event=> onChange(event.target.value)}>
            <option  value='' disabled>{defaultValue}</option>
            {options.map(option =>
               <option 
                   key={option.value}
                   value={option.value}>{option.name}
               </option>
            )}

        </select>
    );
};

export default MySelect;
