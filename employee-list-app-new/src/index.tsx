import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
import './app.css';
import { Input } from './input';
import { Button } from './button';
import { EmployeeList } from './employee-list';
import { AddEmployeeDialogBox } from './add-employee-dialog-box';

//тип данных для одного Сотрудника
type TEmployee = {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  gender: string;
  dob: string;
  position: string;
};

//тип данных для Списка сотрудников
export type TEmployees = TEmployee[];

function App() {
  const [employeeList, setEmployeeList] = useState<TEmployees>([]);
  const [show, setShow] = useState(false);

  //открытие диалогового окна
  const onClickOpen = () => {
    setShow(true);
  };
  
  //закрытие диалогового окна
  const onClickClose = () => {
    setShow(false);
  };  
  
  //добавление сотрудника 
  const addEmployee = (inputValueLastName, inputValueFirstName, inputValueMiddleName, inputValueGender, inputValueDob, inputValuePosition) => {
    let id = employeeList.length + 1;
    let newEmployee = {
      id: id,
      lastName: inputValueLastName,
      firstName: inputValueFirstName,
      middleName: inputValueMiddleName,
      gender: inputValueGender,
      dob: inputValueDob,
      position: inputValuePosition
    };
    setEmployeeList([...employeeList, newEmployee]);
  }

  return (
        <>
          <div className = "header">
            <div className = "headline"> 
              Сотрудники
            </div>
            <button className = "add-button" onClick = {onClickOpen} > 
              +
            </button> 
          </div>
          <AddEmployeeDialogBox show={show} onRequestClose={onClickClose} addEmployee ={addEmployee}/>
          <EmployeeList employeeList={employeeList}/>
        </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); 
root.render(<App />); 





