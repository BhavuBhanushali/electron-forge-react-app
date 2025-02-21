import { Button, Col, Form, Modal, Row, Select, Spin } from 'antd'
import SelectField from 'components/fields/SelectField'
import TextField from 'components/fields/TextField'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { dayOptions, departmentOptions, durationOption, generateTimeSlots, roomOptions, subjectOptions, toMilliseconds } from 'utils/helpers'


const validate = values => {
    const errors = {};
    if (!values.subject) {
        errors.subject = 'required';
    }
    if (!values.duration) {
        errors.duration = 'required';
    }
    if (!values.day) {
        errors.day = 'required';
    }
    if (!values.room) {
        errors.room = 'required';
    }
    if (!values.start) {
        errors.start = 'required';
    }
    if (!values.assigned) {
        errors.assigned = 'required';
    }
    return errors;
};
const startTime = new Date();
startTime.setHours(7, 30, 0, 0); // 7:30 AM

const endTime = new Date();
endTime.setHours(15, 0, 0, 0); // 3:00 PM

const interval = toMilliseconds(0, 30); // 30 minutes
const timeSlots = generateTimeSlots(startTime, endTime, interval);


const AddNewScheduleFormModal = ({ faculties, handleSubmit, pristine, reset, submitting, visible, invalid, onCancel, loading, isUpdatable }) => {
    const renderFaculties = () => {
        return faculties.map(faculty => {
            return {
                label: `${faculty.first_name} ${faculty.last_name}`,
                value: faculty.id
            }
        })
    }
    return (
        <Modal
            visible={visible}
            title="Add New Schedule"
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
                            <Field name="duration"
                                component={SelectField}
                                label="Duration"
                                componentProps={{
                                    optionType: Select.Option,
                                    defaultValue: undefined,
                                    placeholder: 'Select Duration',
                                    options: durationOption,
                                    showSearch: true
                                }}
                                fieldProps={{
                                    targetType: 'SelectField'
                                }} />
                        </Col>

                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Field
                                label="Day"
                                name="day"
                                component={SelectField}
                                componentProps={{
                                    optionType: Select.Option,
                                    defaultValue: undefined,
                                    placeholder: 'Select Day',
                                    options: dayOptions,

                                    showSearch: true
                                }}
                                fieldProps={{
                                    targetType: 'SelectField'
                                }}
                            />
                        </Col>

                        <Col span={12}>
                            <Field name="room"
                                component={SelectField}
                                label="Room"
                                componentProps={{
                                    optionType: Select.Option,
                                    defaultValue: undefined,
                                    placeholder: 'Select Room',
                                    options: roomOptions,
                                    showSearch: true
                                }}
                                fieldProps={{
                                    targetType: 'SelectField'
                                }}
                            />
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Field
                                label="Start Time"
                                name="start"
                                component={SelectField}
                                componentProps={{
                                    optionType: Select.Option,
                                    defaultValue: undefined,
                                    placeholder: 'Select Start Time',
                                    options: timeSlots,
                                    showSearch: true
                                }}
                                fieldProps={{
                                    targetType: 'SelectField'
                                }}
                            />
                        </Col>
                        <Col span={8}>
                            <Field
                                name="assigned"
                                component={SelectField}
                                label="Faculty"
                                componentProps={{
                                    optionType: Select.Option,
                                    defaultValue: undefined,
                                    placeholder: 'Select Faculty',
                                    options: renderFaculties(faculties),
                                    showSearch: true
                                }}
                                fieldProps={{
                                    targetType: 'SelectField'
                                }}
                            />
                        </Col>
                        <Col span={8}>
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
                        <Col span={24}>
                            <Field name="description" type="text" placeholder='Description' component={TextField} label="Description" />
                        </Col>
                    </Row>
                </Spin>
            </Form>
        </Modal >
    )
}

export default reduxForm({ form: "addScheduleForm", enableReinitialize: true, validate })(AddNewScheduleFormModal)