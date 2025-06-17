import React, { useEffect, useState} from 'react';
import Modal from 'react-modal';
import { Input } from './input';
import { Button } from './button';

export function AddEmployeeDialogBox ({show, onRequestClose, addEmployee}){
    const [inputValueLastName, setInputValueLastName] = useState('');
    const [inputValueFirstName, setInputValueFirstName] = useState('');
    const [inputValueMiddleName, setInputValueMiddleName] = useState('');
    const [inputValueGender, setInputValueGender] = useState('');
    const [inputValueDob, setInputValueDob] = useState('');
    const [inputValuePosition, setInputValuePosition] = useState('');
    if (!show) {
        return null;
    }
    //получение значения inputa 
    const onInputCompleteLastName = (event) => { 
        setInputValueLastName(event.target.value)
    };
    const onInputCompleteFirstName = (event) => { 
        setInputValueFirstName(event.target.value)
    };
    const onInputCompleteMiddleName = (event) => { 
        setInputValueMiddleName(event.target.value)
    };
    const onInputCompleteGender = (event) => { 
        setInputValueGender(event.target.value)
    };
    const onInputCompleteDob = (event) => { 
        setInputValueDob(event.target.value)
    };
    const onInputCompletePosition = (event) => { 
        setInputValuePosition(event.target.value)
    };

    const handleClick = () => {
        addEmployee(inputValueLastName, inputValueFirstName, inputValueMiddleName, inputValueGender, inputValueDob, inputValuePosition);
        onRequestClose();
    };

    return (
        <div className="modal-box" onClick={onRequestClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div>
                        Введите данные по сотруднику
                    </div>
                    <button className = "modal-close-button" onClick = {onRequestClose} > 
                        &times; 
                    </button>  
                </div>
                <div className="modal-body">
                    <div>
                        <div className = "attribute-employee">
                            <div> Фамилия*: </div>
                            <Input inputComplete={onInputCompleteLastName}/>
                        </div>
                        <div className = "attribute-employee">
                            <div> Имя*: </div>
                            <Input inputComplete={onInputCompleteFirstName}/>
                        </div>
                        <div className = "attribute-employee">
                            <div> Отчество: </div>
                            <Input inputComplete={onInputCompleteMiddleName}/>
                        </div>
                        <div className = "attribute-employee">
                            <div> Пол: </div>
                            <Input inputComplete={onInputCompleteGender}/>
                        </div>
                        <div className = "attribute-employee">
                            <div> Дата Рождения: </div>
                            <Input inputComplete={onInputCompleteDob}/>
                        </div>
                        <div className = "attribute-employee">
                            <div> Должность: </div>
                            <Input inputComplete={onInputCompletePosition}/>
                        </div>
                        <div className = "attribute-employee">
                            <div className = "footnote"> * - обязательное поле </div>
                            <button className = "button" onClick = {handleClick} > 
                                Сохранить 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}