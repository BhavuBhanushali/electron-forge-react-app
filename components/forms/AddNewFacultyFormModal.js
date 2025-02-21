import { Button, Col, Form, Modal, Row, Select, Spin } from 'antd'
import InputPhoneNumberField from 'components/fields/InputPhoneNumberField'
import SelectField from 'components/fields/SelectField'
import TextField from 'components/fields/TextField'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { departmentOptions, genderOptions, subjectOptions } from 'utils/helpers'


const validate = values => {
    const errors = {};
    if (!values.qr_id) {
        errors.qr_id = 'Please input your ID!';
    }
    if (!values.first_name) {
        errors.first_name = 'Please input your First Name!'
    }
    if (!values.email) {
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'The input is not valid E-mail!';
    }
    return errors;
};

const AddNewFacultyFormModal = ({ handleSubmit, pristine, reset, submitting, visible, invalid, onCancel, loading, isUpdatable }) => {
    return (
        <Modal
            visible={visible}
            title="Add New Faculty"
            onCancel={onCancel}
            footer={[
                <Button key="back" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button key="reset" onClick={reset} disabled={pristine || submitting}>
                    Reset
                </Button>,
                <Button key="submit" htmlType='submit' type="primary" onClick={handleSubmit} disabled={invalid || pristine || submitting}>
                    {isUpdatable ? "Update" : "Save"}
                </Button>,
            ]}
        >
            <Form>
                <Spin spinning={loading}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Field name="qr_id" type="text" placeholder='Enter ID' component={TextField} label="ID" />
                        </Col>
                        <Col span={12}>
                            <Field name="first_name" placeholder='Enter First Name' type="text" component={TextField} label="First Name" />
                        </Col>
                        <Col span={12}>
                            <Field name="last_name" placeholder='Enter Last Name' type="text" component={TextField} label="Last Name" />
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Field
                                label="Age"
                                name="age"
                                component={TextField}
                                normalize={val => (val || "").replace(/[^.\d]/g, "")}
                                placeholder='Enter Age'
                            />
                        </Col>
                        <Col span={12}>
                            <Field name="department"
                                component={SelectField}
                                componentProps={{
                                    optionType: Select.Option,
                                    defaultValue: undefined,
                                    placeholder: 'Select Department',
                                    options: departmentOptions,
                                    showSearch: true
                                }}
                                fieldProps={{
                                    targetType: 'SelectField'
                                }}
                                label="Department" />
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Field
                                label="Subject"
                                name="subject"
                                component={SelectField}
                                componentProps={{
                                    optionType: Select.Option,
                                    defaultValue: undefined,
                                    placeholder: 'Select Subject',
                                    options: subjectOptions,
                                    showSearch: true
                                }}
                                fieldProps={{
                                    targetType: 'SelectField'
                                }}
                            />
                        </Col>
                        <Col span={12}>
                            <Field name="email" type="email" placeholder='Email' component={TextField} label="Email" />
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Field
                                name="contact"
                                type="text"
                                component={InputPhoneNumberField}
                                label="Contact"
                                defaultCountry='sg'
                                disableAreaCodes
                            />
                        </Col>
                        <Col span={12}>
                            <Field name="gender"
                                component={SelectField}
                                componentProps={{
                                    optionType: Select.Option,
                                    defaultValue: undefined,
                                    placeholder: 'Select Gender',
                                    options: genderOptions,
                                    showSearch: true
                                }}
                                fieldProps={{
                                    targetType: 'SelectField'
                                }}
                                label="Gender" />

                        </Col>
                    </Row>
                </Spin>
            </Form>
        </Modal >
    )
}

export default reduxForm({ form: "addFacultyForm", enableReinitialize: true, validate })(AddNewFacultyFormModal)