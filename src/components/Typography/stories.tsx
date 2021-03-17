import { Story, Meta } from '@storybook/react/types-6-0'
import Typography from '.'

export default {
  title: 'Typography',
  component: Typography
} as Meta

export const Default: Story = (args) => <Typography {...args}>Test</Typography>

export const secondary: Story = () => (
  <Typography
    tag="p"
    color="blue"
    size="xlarge"
    weight="bold"
    family="secondary"
  >
    Test
  </Typography>
)

secondary.args = {
  tag: 'p',
  color: 'blue',
  size: 'xlarge',
  weight: 'bold',
  family: 'secondary'
}
