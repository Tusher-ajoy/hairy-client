import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'
import { Outlet } from "react-router-dom";


const Dashboard = () => {
    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
    return (
        <div style={{ height: '100vh' }}>
            <Sidebar toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
            <FontAwesomeIcon className='btn-toggle' onClick={() => handleToggleSidebar(true)} icon={faBars} />
            <Outlet />
        </div>
    );
};

export default Dashboard;