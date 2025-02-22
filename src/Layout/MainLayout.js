import { Spin } from 'antd';
import React from 'react';
import { useNavigation } from 'react-router-dom';

const MainLayout = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <html>
            <body>
                {isNavigating && <Spin />}
                <Outlet />
            </body>
        </html>
    );
}
export default MainLayout