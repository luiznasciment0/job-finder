import React, { useState } from 'react'
import { RadioButton, ListItem } from './styles'
import Typography from 'components/Typography'

interface ItemProps {
  item: string
}

const Item = ({ item }: ItemProps) => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <ListItem>
      <Typography tag="label" weight="medium" size="medium" color="darkBlue">
        <RadioButton
          type="radio"
          role="radio"
          checked={value === item}
          value={item}
          onChange={handleChange}
        />
        {item}
      </Typography>
    </ListItem>
  )
}

export default Item
