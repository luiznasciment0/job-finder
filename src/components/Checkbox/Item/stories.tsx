import { Story, Meta } from '@storybook/react/types-6-0'
import Item from '.'

export default {
  title: 'Item',
  component: Item
} as Meta

export const Default: Story = () => <Item item="Teste" />
