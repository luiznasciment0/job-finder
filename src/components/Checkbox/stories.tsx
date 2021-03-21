import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox from '.'

export default {
  title: 'Checkbox',
  component: Checkbox
} as Meta

const items = ['London', 'Amsterdam', 'New York', 'Berlin', 'Brazil']

export const Default: Story = () => <Checkbox items={items} />
