import React, { useEffect, useState } from 'react';
import { Button, Icon, Layout } from 'antd';
import './index.less'
import Sidebar from 'components/Sidebar';
const { Content } = Layout;

const CustomLayout = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 992);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout className='layout-root'>
      {isMobile && (
        <Button type="primary" onClick={showDrawer} style={{ position: 'fixed', top: 16, left: 16, zIndex: 100 }}>
          <Icon type="menu" />
        </Button>
      )}
      <Sidebar visibleDrawer={visible} onClose={onClose} />
      {/* Content */}
      <Content className={`site-layout-content ${isMobile? "mobile-layout-content" : "web-layout-content"}`}>
        <div className={`main-content ${isMobile? "mobile-view" : ""}`} style={{ background: '#fff', padding: 24, minHeight: 'calc(100vh - 64px)' }}>
          {children}
        </div>
      </Content>
      {/* </Layout> */}
    </Layout>
  );
};

export default CustomLayout;
