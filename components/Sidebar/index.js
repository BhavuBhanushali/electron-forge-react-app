import React, { useEffect, useState } from 'react';
import { Drawer, Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './index.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RESET_STATE } from 'reducers';
import history from '../../utils/history';
import { useLocation } from 'react-router-dom';
import { ReactComponent as CheckingLogo } from "../../assets/images/display-svgrepo-com.svg";

const { Sider } = Layout;

const Sidebar = ({ auth, logout, onClose, visibleDrawer }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

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
    <>
      {!isMobile && (
        <Sider width={200} theme="light" className='web-sidebar'>
          <Menu mode="inline" defaultSelectedKeys={['home']} selectedKeys={[location.pathname === "/" ? "home" : location.pathname.split('/')[1]]} >
            <Menu.Item key="home">
              <Link to="/">
                <Icon type="home" className="sidebar-icon" /> Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item key="faculties" onClick={onClose}>
              <Link to="/faculties">
                <Icon type="team" className="sidebar-icon" />
                Faculty
              </Link>
            </Menu.Item>
            <Menu.Item key="schedules">
              <Link to="/schedules">
                <Icon type="calendar" className="sidebar-icon" />
                Schedule
              </Link>
            </Menu.Item>
            <Menu.Item key="checkins" >
              <Link to="/checkins">
                <Icon type="clock-circle" />
                Check IN/OUT
              </Link>
            </Menu.Item>
            <Menu.Item key={"login"}>
              {auth.isLogin ? (
                <div
                  type="link"
                  onClick={() => {
                    history.replace('/login');
                    logout();
                  }}
                ><Icon type="unlock" /> Logout</div>
              ) : (
                <Link to="/login">
                  <Icon type="lock" className="sidebar-icon" />
                  Login
                </Link>
              )}
            </Menu.Item>
            <Menu.Item key="about-us">
              <Link to="/about-us">
                <Icon type="info-circle" className="sidebar-icon" /> About
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      )}
      {isMobile && (
        <Drawer
          title="Menu"
          placement="left"
          closable={true}
          onClose={onClose}
          visible={visibleDrawer}
          bodyStyle={{ padding: 0 }}
        >
          <Menu mode="inline" defaultSelectedKeys={['home']} selectedKeys={[location.pathname === "/" ? "home" : location.pathname.replace('/', '')]}>
            <Menu.Item key="home">
              <Link to="/" onClick={onClose}>
                <Icon type="home" className="sidebar-icon" /> Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item key="faculties" onClick={onClose}>
              <Link to="/faculties">
                <Icon type="team" className="sidebar-icon" />
                Faculty
              </Link>
            </Menu.Item>
            <Menu.Item key="schedules" onClick={onClose}>
              <Link to="/schedules">
                <Icon type="calendar" className="sidebar-icon" />
                Schedule
              </Link>
            </Menu.Item>
            <Menu.Item key="checkins" onClick={onClose}>
              <Link to="/checkins">
                <Icon type="clock-circle" />
                Check IN/OUT
              </Link>
            </Menu.Item>
            <Menu.Item key="4" onClick={onClose}>
              {auth.isLogin ? (
                <div
                  type="link"
                  onClick={() => {
                    history.replace('/login');
                    logout();
                  }}
                  block
                ><Icon type="unlock" /> Logout</div>
              ) : (
                <Link to="/login" onClick={onClose}>
                  <Icon type="lock" className="sidebar-icon" />
                  Login
                </Link>
              )}
            </Menu.Item>
            <Menu.Item key="about" onClick={onClose}>
              <Link to="/about">
                <Icon type="info-circle" className="sidebar-icon" /> About
              </Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout: () => ({
        type: RESET_STATE,
      }),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
