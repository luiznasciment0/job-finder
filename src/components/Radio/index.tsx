import { InputHTMLAttributes } from 'react'
import { RadioButton } from './styles'
import Typography from 'components/Typography'

type RadioValue = string | ReadonlyArray<string> | number

export type ItemProps = {
  label: string
  onCheck?: (value?: RadioValue) => void
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({ label, onCheck, value, ...props }: ItemProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }
  return (
    <div>
      <RadioButton
        type="radio"
        role="radio"
        id={label}
        onChange={onChange}
        {...props}
      />
      <Typography
        tag="label"
        htmlFor={label}
        weight="medium"
        size="medium"
        color="darkBlue"
      >
        {label}
      </Typography>
    </div>
  )
}

export default Radio
