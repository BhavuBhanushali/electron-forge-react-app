import React from 'react'
import { Form, Input } from 'antd'
import Text from 'antd/lib/typography/Text'
import Icon from '@ant-design/icons'

const FormItem = Form.Item

const TextField = ({ componentProps = {}, fieldProps = {}, input, meta, children, formItemClassName = '', hasFeedback, label, type = 'text', colon = false, showReadOnlyMode, ...props }) => {
    const hasError = meta.touched && meta.invalid
    const { autoFocus, defaultValue = undefined, disabled, placeholder } = componentProps
    const { isReadOnly, isQuestionnaire, onProcedureChange = null } = fieldProps

    if (isReadOnly) {
        input.disabled = isReadOnly
    }
    if (showReadOnlyMode) {
        input.disabled = showReadOnlyMode
        props.disabled = showReadOnlyMode
    }
    if (placeholder) {
        input.placeholder = placeholder
        props.placeholder = placeholder
        input.value = input.value || undefined
    }
    if (isQuestionnaire) {
        input.placeholder = ''
        props.placeholder = ''
    }

    if (autoFocus) {
        input.autoFocus = autoFocus
    }
    if (onProcedureChange) {
        const realOnChange = input.onChange
        input.onChange = (event) => {
            if (event && event.target) {
                const { target: { value = null } = null } = event
                realOnChange(value)
                onProcedureChange(value)
            }
        }
    }

    if (defaultValue && !input.value) input.value = defaultValue

    const getInput = () => {
        if (type === 'password') {
            return (
                <Input.Password
                    iconRender={visible => (visible ? <Icon type="eye" /> : <Icon type="eye-invisible" />)}
                    defaultValue={defaultValue} disabled={disabled} {...input} {...props}
                />
            )
        } else {
            return (
                <Input
                    defaultValue={defaultValue} disabled={disabled} {...input} {...props}
                />
            )
        }
    }

    return (
        <FormItem
            label={props.requireIndicator === "true" ? <Text> {label}<span className='color-required'>*</span></Text> : label}
            validateStatus={hasError ? 'error' : 'success'}
            hasFeedback={hasFeedback && hasError}
            help={hasError && meta.error}
            className={formItemClassName}
            colon={colon}
        >
            {getInput()}
        </FormItem>
    )
}

export default TextField