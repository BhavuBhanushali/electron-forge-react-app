import React from 'react'
import { Form, Select } from 'antd'
import map from 'lodash/map'
import isArray from 'lodash/isArray'
import Text from 'antd/lib/typography/Text'

const FormItem = Form.Item

const SelectField = ({ componentProps = {}, fieldProps = {}, input, meta, children, hasFeedback, label, colon = false, showReadOnlyMode, ...props }) => {
  const hasError = meta.touched && meta.invalid
  let renderChildren = children

  const { defaultValue = undefined, disabled, filterOption, options, optionType: OptionType, placeholder, dropdownRender, mode = 'default', showSearch, suffixIcon, className } = componentProps
  const { isReadOnly, isQuestionnaire, onTemplateChange = null, targetType } = fieldProps

  // Extension for Select field
  if (options && (targetType === 'SelectField')) {
    renderChildren = map(options, (option, i) => {
      const { value, label, description, ...rest } = option
      return description ? <OptionType key={value} value={String(value)} {...rest}><span className='font-weight-bold'>{label}</span>
        <div style={{ color: 'rgba(0, 0, 0, 0.65)' }}>{description}</div></OptionType> : <OptionType key={value} value={String(value)} {...rest}>{label}</OptionType>
    })
  } else {
    props.options = options
    renderChildren = options
  }
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

  if (onTemplateChange) {
    input.onChange = (value) => {
      onTemplateChange(value)
    }
  }

  props.mode = mode
  if (mode !== 'default') {
    input.value = isArray(input.value) ? input.value : [ input.value ]
  }

  if (defaultValue && !input.value) input.value = defaultValue
  if (showSearch && filterOption) {
    props.showSearch = showSearch
    props.filterOption = filterOption
  }
  if (dropdownRender) {
    props.dropdownRender = dropdownRender
  }

  return (
    <FormItem
      label={props.requireIndicator === "true" ? <Text> {label}<span className='color-required'>*</span></Text> : label}
      validateStatus={hasError ? 'error' : 'success'}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
      colon={colon}
      className={className}
    >
      <Select defaultValue={defaultValue} suffixIcon={suffixIcon} disabled={disabled} {...input} {...props} children={renderChildren} />
    </FormItem>
  )
}

export default SelectField
