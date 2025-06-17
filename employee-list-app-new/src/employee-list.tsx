import React, { useEffect, useState} from 'react';
import { TEmployees } from './index';

export function EmployeeList (props: {employeeList : TEmployees}){
    return (
    <div> 
        <div className = 'grid-container'>
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
                        {employee.dob}
                    </div>
                    <div className = "grid-item"> 
                        {employee.position}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
