import { Story, Meta } from '@storybook/react/types-6-0'
import Input from '.'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    placeholder: {
      type: 'string'
    },
    icon: {
      type: 'string'
    },
    large: {
      type: 'boolean'
    },
    hasButton: {
      type: 'boolean'
    }
  }
} as Meta

export const Default: Story = (args) => <Input {...args} />

export const MainInput: Story = (args) => <Input {...args} />
MainInput.args = {
  placeholder: 'Title, companies, experti...',
  icon: 'bag',
  large: true
}

export const WithButton: Story = (args) => <Input {...args} />
WithButton.args = {
  hasButton: true
}
