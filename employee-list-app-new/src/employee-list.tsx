import React, { useEffect, useState} from 'react';
import { TEmployees, TEmployee } from './index';

export function EmployeeList( {employeeList, deleteEmployee}) {
    const [listItems, setListItems] = useState(employeeList);
    const [sorting, setSorting] = useState<'ASC' | 'DESC'>('ASC');

    function sort (field, direction)  {
        const sortedItems = [...listItems].sort((a, b) => {
            if (direction === 'ASC') {
                if (a[field] > b[field])
                {
                    return 1;
                }
                if (a[field] < b[field])
                {
                    return -1;
                }
                return 0;
                /*if (typeof a[field])
                    return a[field] - b[field];
                else 
                    return a[field].localeCompare(b[field]);*/
            }
            if (direction === 'DESC') {
                /*if (typeof a[field])
                    return b[field] - a[field];
                else 
                    return b[field].localeCompare(a[field]);*/
                if (a[field] < b[field])
                {
                    return 1;
                }
                if (a[field] > b[field])
                {
                    return -1;
                }
                return 0;
            }
            return 0;
        });
        setListItems(sortedItems);
    };

    useEffect(() => {

    }, [sorting]);

    return (
    <div> 
        <div className = 'grid-container'>
            <div >
                <div className = "grid-row">
                        <div className = "grid-item pointer" onClick = {() => {setSorting(sorting === 'ASC' ? 'DESC' : 'ASC'); sort("id", sorting); }}> 
                            №
                        </div>
                        <div className = "grid-item pointer" onClick = {() => {setSorting(sorting === 'ASC' ? 'DESC' : 'ASC'); sort("lastName", sorting); }}> 
                            Фамилия
                        </div>
                        <div className = "grid-item pointer" onClick = {() => {setSorting(sorting === 'ASC' ? 'DESC' : 'ASC'); sort("firstName", sorting); }}> 
                            Имя
                        </div>
                        <div className = "grid-item pointer" onClick = {() => {setSorting(sorting === 'ASC' ? 'DESC' : 'ASC'); sort("middleName", sorting); }}> 
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
                {listItems.map(employee => (
                    <RowGrid employee = {employee} deleteEmployee = {deleteEmployee}/>
                ))}
            </div>
        </div>
    </div>
  );
}

export function RowGrid ({employee, deleteEmployee}) {
    const [isHovered, setIsHovered] = useState(false);

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
        <div 
            className = "grid-row"
            key = {employee.id}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} 
        >
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
                { isHovered && (
                    <div className="hover-element">
                        <button className = "delete-button"  onClick = { () => {deleteEmployee(employee.id)}}> 
                            Удалить
                        </button> 
                    </div>
                )} 
            </div>
        </div>
    )
}
