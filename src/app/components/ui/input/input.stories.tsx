import { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
  component: Input,
  title: 'Input',
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    placeholder: 'Epam@epam.com',
    value: '',
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
export const DefaultLabel: Story = {
  args: {
    label: 'Email',
    variant: 'default',
    placeholder: 'Epam@epam.com',
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
export const Error: Story = {
  args: {
    variant: 'default',
    placeholder: 'Epam@epam.com',
    error: 'Error text',
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
export const ErrorLabel: Story = {
  args: {
    label: 'Email',
    variant: 'default',
    placeholder: 'Epam@epam.com',
    error: 'Error text',
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
export const Password: Story = {
  args: {
    variant: 'default',
    placeholder: 'Password',
    type: 'password',
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
export const PasswordError: Story = {
  args: {
    variant: 'default',
    placeholder: 'Password',
    type: 'password',
    error: 'Error text',
    label: 'Password',
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
export const Search: Story = {
  args: {
    variant: 'search',
    placeholder: 'Input search',
    type: 'text',
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export const SearchError: Story = {
  args: {
    variant: 'search',
    placeholder: 'Input search',
    type: 'text',
    error: 'Error text',
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
