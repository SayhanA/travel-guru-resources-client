import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/shaired/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Main;