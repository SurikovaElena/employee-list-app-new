import React, { useEffect, useState} from 'react';
import { TOptions } from './add-employee-dialog-box';

export interface SelectField {
  selectComplete: Function,
  name: string,
  multiple: boolean,
  options: TOptions,
}

export function Select({selectComplete, name, multiple, options} : SelectField) {
    const [selectValue, setSelectValue] = useState('');
    
    return (
        <form>
            <select               
                name = {name}
                value = {selectValue} 
                className = "select"
                multiple = {multiple}
                onChange = {(event) => {setSelectValue(event.target.value); selectComplete(event)}}
            >    
                { options.map(option => (
                    <option key={option.key} value={option.value}>
                        {option.value}
                    </option>
                )) }
            </select>     
        </form>
    );
}