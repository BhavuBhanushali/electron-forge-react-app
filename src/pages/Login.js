import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Button, Card, Spin } from 'antd';
// import { postLoginRequest } from 'actions/authActions';
import LoginForm from '../components/forms/LoginForm';
import { useNavigate } from 'react-router-dom'
import imag from "/assets/login3.png";
import { showToast, Toast } from '../components/Toasts/ToastMessage';

const Login = props => {
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useNavigate()

  const handleSubmit = async (formValues) => {
    // setLoading(true);
    console.log("--------------------------->>>", formValues);    
    const response = await window.electronAPI.login(formValues);
    console.log("response===>", response);
    
  };

  const onClickTest = async () => {
    const response = await window.electronAPI.openDailogBox();
    console.log("response===>", response);
    response && showToast("Hello World!!", "success")
  }

  return (
    <div>
      <Button type='primary' onClick={onClickTest}>Test</Button>
      <div className="login-root">
        <div className="login-container">
          <div className="login-left" style={{ background: `url(${imag}) no-repeat center` }}>
            {/* <div className="login-overlay"> */}
            {/* <h1>Welcome to Sneat!</h1> */}
            {/* </div> */}
          </div>
          <div className='border' />
          <div className="login-right">
            <div className="login-form-container">
              <h1>Login</h1>
              <LoginForm initialValues={{ email: 'bhavesh@gmail.com', password: 'test1234' }} errorMessage={error} onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <Toast />
    </div>
  );
};

export default Login;
