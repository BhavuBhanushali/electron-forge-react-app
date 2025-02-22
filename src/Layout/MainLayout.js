import { Spin } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const MainLayout = () => {
    // const navigation = useNavigate();
    // const isNavigating = Boolean(navigation.location);

    return (
        <div>
            {/* {isNavigating && <Spin />} */}
            this is the main layout
            <Outlet />
        </div>

    );
}
export default MainLayout