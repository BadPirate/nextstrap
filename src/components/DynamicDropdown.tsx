import { Dispatch, SetStateAction } from 'react'
import { Form } from 'react-bootstrap'

const DynamicDropdown = ({ options, state }: {
  state: [string | null, Dispatch<SetStateAction<string | null>>];
  options: { [value: string]: string; };
}) => (
  <Form.Select value={state[0] ?? undefined} onChange={(e) => state[1](e.currentTarget.value)}>
    {Object.keys(options).map((value) => (
      <option key={value} value={value}>{options[value]}</option>))}
  </Form.Select>
)

export default DynamicDropdown
