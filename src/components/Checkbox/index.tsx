import { InputHTMLAttributes, useState } from 'react'
import Typography from 'components/Typography'

import { Wrapper, Input } from './styles'

export type CheckboxProps = {
  label?: string
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  label = 'test',
  onCheck,
  isChecked = false,
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }
  return (
    <Wrapper>
      <Input
        type="checkbox"
        id={label}
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <Typography
          weight="medium"
          size="medium"
          color="darkBlue"
          htmlFor={label}
          tag="label"
        >
          {label}
        </Typography>
      )}
    </Wrapper>
  )
}

export default Checkbox
