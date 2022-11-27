import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSideBare from './DashboardSideBare/DashboardSideBare';

const Dashboard = () => {
    return (
        <div>
            <DashboardSideBare>
                <Outlet />
            </DashboardSideBare>
        </div>
    );
};

export default Dashboard;