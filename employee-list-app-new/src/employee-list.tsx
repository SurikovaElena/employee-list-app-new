import React, { useEffect, useState} from 'react';
import { TEmployees } from './index';

export function EmployeeList(props: {employeeList : TEmployees}) {
    function formatDate(dob: Date | undefined): string {
        let date: string = "";
        if (dob) {
            if (dob.getDate() < 10 )
                date = '0';
            date += dob.getDate() + '.';
            if ((dob.getMonth() + 1) < 10 )
                date += '0';
            date += (dob.getMonth() + 1) + '.' + dob.getFullYear();            
        }
        return date;
    }
    return (
    <div> 
        <div className = 'grid-container'>
            <div >
                <div className = "grid-row">
                        <div className = "grid-item"> 
                            №
                        </div>
                        <div className = "grid-item"> 
                            Фамилия
                        </div>
                        <div className = "grid-item"> 
                            Имя
                        </div>
                        <div className = "grid-item"> 
                            Отчество
                        </div>
                        <div className = "grid-item"> 
                            Пол
                        </div>
                        <div className = "grid-item"> 
                            Дата Рождения
                        </div>
                        <div className = "grid-item"> 
                            Должность
                        </div>
                        <div className = "grid-item"> 
                            
                        </div>
                    </div>
            </div>
            <div className="content">
                {props.employeeList.map(employee => (
                    <div className = "grid-row">
                        <div className = "grid-item"> 
                            {employee.id}
                        </div>
                        <div className = "grid-item"> 
                            {employee.lastName}
                        </div>
                        <div className = "grid-item"> 
                            {employee.firstName}
                        </div>
                        <div className = "grid-item"> 
                            {employee.middleName}
                        </div>
                        <div className = "grid-item"> 
                            {employee.gender}
                        </div>
                        <div className = "grid-item"> 
                            {formatDate(employee.dob)}
                        </div>
                        <div className = "grid-item"> 
                            {employee.position}
                        </div>
                        <div className = "grid-item"> 
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}
