import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import axios from '../services/api';

const Reports = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/attendance/report')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Reports</h1>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="hoursWorked" stroke="#8884d8" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Reports;
