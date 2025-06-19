import React, { useEffect, useState} from 'react';

export interface InputField {
  inputComplete: Function,
  className?: string,
  name: string,
  placeholder?: string,
  type: string,
}

export function Input({inputComplete, className, name, placeholder, type} : InputField) {
    const [inputValue, setInputValue] = useState('');
    
    return (
        <form>
            <input 
                type = {type}                
                name = {name} 
                value = {inputValue} 
                className = {className || "input"} 
                placeholder = {placeholder}
                onChange = {(event) => {setInputValue(event.target.value); inputComplete(event)}}
            />            
        </form>
    );
}