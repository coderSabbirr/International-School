import React, { useEffect, useState } from 'react';
import Teacher from '../teacher/Teacher';
import './Teachers.css'

const Teachers = () => {
    const[teachers,setTeachers]=useState([])
    useEffect(()=>
    fetch('./teachers.JSON')
    .then(res => res.json())
    .then(data =>setTeachers(data))
    ,[])
    return (
        <div>
            <h1 className="thr-heading">TEACHERS</h1>
             <div className="all-thr container">
             {
            teachers.map(teacher => <Teacher
            key={teacher.key}
            teacher={teacher}
            ></Teacher>)
            }
             </div>
            
        </div>
    );
};

export default Teachers;