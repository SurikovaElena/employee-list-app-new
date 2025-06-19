import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
import './app.css';
import { Input } from './input';
import { Button } from './button';
import { EmployeeList } from './employee-list';
import { AddEmployeeDialogBox } from './add-employee-dialog-box';

//тип данных для одного Сотрудника
export type TEmployee = {
  id?: number;
  lastName?: string;
  firstName?: string;
  middleName?: string;
  gender?: string;
  dob?: Date;
  position?: string;
};

//тип данных для Списка сотрудников
export type TEmployees = TEmployee[];

function App() {
  const [employeeList, setEmployeeList] = useState<TEmployees>(
  [
  {
    "id": 1,
    "lastName": "Иванов",
    "firstName": "Иван",
    "middleName": "Петрович",
    "gender": "Мужской",
    "position": "Дворник",
    "dob": (new Date("1950-12-05T00:00:00.000Z"))
  },
  {
    "id": 2,
    "lastName": "Смирнова",
    "firstName": "Елена",
    "middleName": "Сергеевна",
    "gender": "Женский",
    "position": "Бухгалтер",
    "dob": (new Date("1985-03-12T00:00:00.000Z"))
  },
  {
    "id": 3,
    "lastName": "Петров",
    "firstName": "Алексей",
    "middleName": "Иванович",
    "gender": "Мужской",
    "position": "Инженер",
    "dob": (new Date("1978-07-28T00:00:00.000Z"))
  },
  {
    "id": 4,
    "lastName": "Сидорова",
    "firstName": "Ольга",
    "middleName": "Викторовна",
    "gender": "Женский",
    "position": "Менеджер по продажам",
    "dob": (new Date("1992-01-15T00:00:00.000Z"))
  },
  {
    "id": 5,
    "lastName": "Кузнецов",
    "firstName": "Дмитрий",
    "middleName": "Андреевич",
    "gender": "Мужской",
    "position": "Программист",
    "dob": (new Date("1989-09-03T00:00:00.000Z"))
  },
  {
    "id": 6,
    "lastName": "Васильева",
    "firstName": "Наталья",
    "middleName": "Дмитриевна",
    "gender": "Женский",
    "position": "Дизайнер",
    "dob": (new Date("1995-05-20T00:00:00.000Z"))
  },
  {
    "id": 7,
    "lastName": "Михайлов",
    "firstName": "Сергей",
    "middleName": "Александрович",
    "gender": "Мужской",
    "position": "Водитель",
    "dob": (new Date("1965-11-10T00:00:00.000Z"))
  },
  {
    "id": 8,
    "lastName": "Федорова",
    "firstName": "Анна",
    "middleName": "Павловна",
    "gender": "Женский",
    "position": "Секретарь",
    "dob": (new Date("1982-06-01T00:00:00.000Z"))
  },
  {
    "id": 9,
    "lastName": "Морозов",
    "firstName": "Игорь",
    "middleName": "Владимирович",
    "gender": "Мужской",
    "position": "Аналитик",
    "dob": (new Date("1998-02-22T00:00:00.000Z"))
  },
  {
    "id": 10,
    "lastName": "Лебедева",
    "firstName": "Татьяна",
    "middleName": "Юрьевна",
    "gender": "Женский",
    "position": "HR-менеджер",
    "dob": (new Date("1975-08-18T00:00:00.000Z"))
  }
  ]);
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
  const addEmployee = (employee) => {
    let id = employeeList.length + 1;
    let newEmployee = {
      id: id,
      lastName: employee.lastName,
      firstName: employee.firstName,
      middleName: employee.middleName,
      gender: employee.gender,
      dob: employee.dob,
      position: employee.position
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





