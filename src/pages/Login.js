import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Button, Card, Spin } from 'antd';
// import { postLoginRequest } from 'actions/authActions';
import LoginForm from '../components/forms/LoginForm';
import { useNavigate } from 'react-router-dom'



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
    <div className="login-container">
      <Card className="login-card" title="Login">
        <Spin spinning={loading}>
          <LoginForm initialValues={{ email: 'bhaveshgajra4599@gmail.com', password: 'Gems@459' }} errorMessage={error} onSubmit={handleSubmit} />
        </Spin>
        <Button type='link' onClick={() => history("/home")}>Home</Button>
      </Card>
    </div>
  );
};

export default Login;
