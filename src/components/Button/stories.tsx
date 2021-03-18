import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story = () => <Button>Search</Button>

export const LargeButton: Story = () => <Button size="large">Search</Button>
