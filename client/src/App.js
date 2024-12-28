import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AttendanceForm from './components/AttendanceForm';
import Reports from './components/Reports';
import RoleManagement from './components/RoleManagement';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/attendance" element={<AttendanceForm />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/roles" element={<RoleManagement />} />
        </Routes>
    </Router>
);

export default App;
