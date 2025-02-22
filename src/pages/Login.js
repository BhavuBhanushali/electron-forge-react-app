import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Button, Card, Spin } from 'antd';
// import { postLoginRequest } from 'actions/authActions';
import LoginForm from '../components/forms/LoginForm';
import { useNavigate } from 'react-router-dom'
import imag from "/assets/login3.png";

const Login = props => {
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useNavigate()

  const handleSubmit = formValues => {
    setLoading(true);
    // dispatch(
    //   postLoginRequest({
    //     ...formValues,
    //     onSuccess: value => {
    //       !value
    //         ? setError('Invalid email or password. Please try again.')
    //         : setError('');
    //       setLoading(false);
    //       value && props.history.push('/schedules');
    //     },
    //   })
    // );
  };


  return (
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
            <LoginForm initialValues={{ email: '', password: '' }} errorMessage={error} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
