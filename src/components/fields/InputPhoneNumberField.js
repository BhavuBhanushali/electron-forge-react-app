import React from 'react'
import { Form } from 'antd'
import ReactPhoneInput from 'react-phone-input-2'
import './react-phone-input-2.css'
const FormItem = Form.Item

const InputPhoneNumberField = ({ componentProps = {}, fieldProps = {}, input, meta, children, hasFeedback, label, colon = false, showReadOnlyMode, ...props }) => {
  const hasError = meta.touched && meta.invalid
  const { disabled, placeholder } = componentProps
  const { isReadOnly, isQuestionnaire } = fieldProps

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

  const onChange = value => {
    const phoneNumber = '+' + value
    input.onChange(phoneNumber)
  }

  return (
    <FormItem
      label={label}
      validateStatus={hasError ? 'error' : 'success'}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
      colon={colon}
      className={props.disabled ? 'form-disabled' : ''}
    >
      <ReactPhoneInput
        {...props}
        value={input && input.value}
        onChange={onChange}
        country={'ph'}
        disabled={disabled}
        specialLabel=""
        prefix="+"
      />

    </FormItem>
  )
}

export default InputPhoneNumberField
