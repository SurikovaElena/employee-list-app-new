import React, { useEffect, useState} from 'react';
import Modal from 'react-modal';
import { Input } from './input';
import { Button } from './button';
import { Select } from './select';
import { TEmployee } from './index';

//тип данных для списка полов
export type Toption = {
  key: string;
  value: string
};

//тип данных для Списка сотрудников
export type TOptions = Toption[];

export function AddEmployeeDialogBox({show, onRequestClose, addEmployee}) {
    const [employee, setEmployee] = useState<TEmployee>({id: 0});

    if (!show) {
        return null;
    }

    const handleClick = () => {
        addEmployee(employee);
        setEmployee({id: 0});
        onRequestClose();
    };

    const handleChange = (event) => {
        let updatedValue = {};
        updatedValue = {[event.target.name]:event.target.value};
        setEmployee(employee => ({
            ...employee,
            ...updatedValue
        }));
    }

    const options: TOptions = [
        {key: 'unknown', value: "Не выбрано"},
        {key: 'male', value: "Мужской"}, 
        {key: 'female', value: "Женский"}
    ]
    
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
                            <Input inputComplete={(event) => handleChange(event)} name = {"lastName"} placeholder = {'Фамилия'} type = {"text"}/>
                        </div>
                        <div className = "attribute-employee">
                            <Input inputComplete={(event) => handleChange(event)} name = {"firstName"} placeholder = {'Имя'} type = {"text"}/>
                        </div>
                        <div className = "attribute-employee">
                            <Input inputComplete={(event) => handleChange(event)} name = {"middleName"} placeholder = {'Отчество'} type = {"text"}/>
                        </div>
                        <div className = "attribute-employee">
                            <Input inputComplete={(event) => handleChange(event)} name = {"position"} placeholder = {'Должность'} type = {"text"}/>
                        </div>
                        <div className = "attribute-employee">
                            <Select selectComplete={(event) => handleChange(event)} name = {"gender"} multiple = {false} options = {options}/>
                        </div>
                        <div className = "attribute-employee">
                            <div className = "dob"> Дата Рождения </div>
                            <Input inputComplete={(event) => handleChange(event)} className = {"input-date"} name = {"dob"} type = {"date"}/>
                        </div>

                        <div className = "atribute-basement">
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