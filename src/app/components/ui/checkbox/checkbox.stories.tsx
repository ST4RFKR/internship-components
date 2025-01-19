import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta = {
  component: Checkbox,
  title: 'Checkbox',
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export const DefaultLabel: Story = {
  args: {
    label: 'Check-box',
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
export const DefaultDisabled: Story = {
  args: {
    label: 'Check-box',
    disabled: true,
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
