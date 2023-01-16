/* eslint-disable react/jsx-props-no-spreading */
import { CSSProperties, Dispatch, SetStateAction } from 'react'
import { FloatingLabel, Form, InputGroup } from 'react-bootstrap'

const DynamicInput = (props: {
  state: [string|null, Dispatch<SetStateAction<string|null>>]; } &
    { [key: string]: any; }) => {
  const { state: [value, setValue], ...formProps } = props
  return (
    <Form.Control
      {...formProps}
      value={value ?? ''}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
      }}
    />
  )
}

export const DynamicCheckbox = ({ label, state } : {label: string,
  state: [boolean, Dispatch<SetStateAction<boolean>>]
}) => (
  <InputGroup>
    <InputGroup.Checkbox
      checked={state[0]}
      onChange={(
        e: React.ChangeEvent<HTMLInputElement>,
      ) => state[1](e.currentTarget.checked)}
    />
    <InputGroup.Text>{label}</InputGroup.Text>
  </InputGroup>
)

export const DynamicTextArea = ({ state: [value, setValue], label, style } : {
  state: [string, Dispatch<SetStateAction<string>>],
  label: string
  style?: CSSProperties
}) => (
  <FloatingLabel label={label}>
    <Form.Control
      as="textarea"
      style={style}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
      }}
      value={value}
    />
  </FloatingLabel>
)

DynamicTextArea.defaultProps = {
  style: { height: '100px' },
}

export default DynamicInput
