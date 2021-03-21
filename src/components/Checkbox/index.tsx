import Item from './Item'
import { Checklist } from './styles'

interface CheckboxProps {
  items: string[]
}

const Checkbox = ({ items = ['Teste1', 'Teste2'] }: CheckboxProps) => {
  return (
    <Checklist>
      {items.map((item: string) => (
        <Item item={item} key={items.indexOf(item)} />
      ))}
    </Checklist>
  )
}

export default Checkbox
