import React from 'react'
import { Form, InputNumber } from 'antd'
import Text from 'antd/lib/typography/Text'

const FormItem = Form.Item

const InputNumberField = ({ componentProps, fieldProps, input, meta, children, hasFeedback, label, showReadOnlyMode, ...props }) => {
  const hasError = meta.touched && meta.invalid
  const { defaultValue = undefined, placeholder, className } = componentProps
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

  if (defaultValue && !input.value) input.value = defaultValue
  const minValue = props.min ? props.min : 0

  return (
    <FormItem
      label={<Text className="custom-label">{label}</Text>}
      validateStatus={hasError ? 'error' : 'success'}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
      className={className}
    >
      <InputNumber defaultValue={defaultValue} min={minValue} {...input} {...props} />
    </FormItem>
  )
}

export default InputNumberField
