import { Button, Form } from 'antd'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '../fields/TextField'
import Text from 'antd/lib/typography/Text'


const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Please input your E-mail!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'The input is not valid E-mail!';
    }
    if (!values.password) {
        errors.password = 'Please input your Password!';
    }
    return errors;
};
const LoginForm = ({ handleSubmit, invalid, pristine, submitting, errorMessage }) => {
    console.log("error=-=--=-=--=--=-=->>>", errorMessage);
    return (
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                <Field
                    name="email"
                    label="Email"
                    type="email"
                    component={TextField}
                    placeholder="email"
                />
            </Form.Item>
            <Form.Item>
                <Field
                    label="Password"
                    name="password"
                    type="password"
                    component={TextField}
                    placeholder="password"
                />
            </Form.Item>
            <div className='btn-container'>
                <Button
                    type="primary"
                    htmlType="submit"
                    disabled={invalid || pristine || submitting}
                    className="login-form-button"
                >
                    Log in
                </Button>
                {errorMessage && (
                    <Text style={{ fontSize: 12 }} type="danger">
                        {errorMessage}
                    </Text>
                )}
            </div>
        </Form>
    )
}

export default reduxForm({
    form: 'loginForm',
    enableReinitialize: true,
    validate,
})(LoginForm);