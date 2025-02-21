import React from 'react'
import { DatePicker, Form } from 'antd'
import moment from 'moment'
import Text from 'antd/lib/typography/Text'

const FormItem = Form.Item

const DatePickerField = ({ componentProps, fieldProps, input, meta, children, hasFeedback, label, showReadOnlyMode, ...props }) => {
  const hasError = meta.touched && meta.invalid
  const { dateTimeFormat, isDateTime, placeholder, showToday = undefined } = componentProps
  const { customDateTimeOnChange, isDisabled, isReadOnly } = fieldProps

  if (isDisabled || isReadOnly) {
    input.disabled = isDisabled || isReadOnly
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

  if (isDateTime && dateTimeFormat) {
    const { value } = input
    input.format = dateTimeFormat
    if (value) {
      input.value = moment(value)
    } else {
      input.value = null
    }
    if (showToday) {
      props.showToday = showToday
    }
    if (customDateTimeOnChange) {
      props.onChange = (currentDate, dateTimeFormat) => {
        input.onChange(moment(currentDate, dateTimeFormat).format(moment.defaultFormatUtc))
      }
    }
  }

  return (
    <FormItem
      label={props.requireIndicator === "true" ? <Text> {label}<span className='color-required'>*</span></Text> : label}
      validateStatus={hasError ? 'error' : 'success'}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <DatePicker {...input} {...props} />
    </FormItem>
  )
}

export default DatePickerField
