import React, { useEffect, useState} from 'react';

export function Input (props: {inputComplete}){
    const [inputValue, setInputValue] = useState('');
    
    return (
        <div>
            <input 
                type="text"                 
                name='inputName' 
                value={inputValue} 
                className = "input"
                onChange={(event) => {setInputValue(event.target.value); props.inputComplete(event)}}
            />            
        </div>
    );
}