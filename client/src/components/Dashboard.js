import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const Dashboard = () => {
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        axios.get('/attendance/summary')
            .then(response => setAttendanceData(response.data))
            .catch(error => console.error(error));
    }, []);
    return(
        <div>
            <h1> Dashboard </h1>
            <p> Present: {attendanceData.present} </p>
            <p> Late: {attendanceData.late} </p>
            <p> Absent: {attendanceData.absent} </p>
        </div>
    );
};

export default Dashboard;
