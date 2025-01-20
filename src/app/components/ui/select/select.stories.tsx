import { Meta, StoryObj } from '@storybook/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { EnglishFlag, RussianFlag } from '@/app/assets/icon/components';

const meta = {
  title: 'Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <SelectTrigger className="w-[210px]">
          <SelectValue placeholder="Select-box" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Select-box">Light</SelectItem>
          <SelectItem value="Select-box">Dark</SelectItem>
          <SelectItem value="Select-box">System</SelectItem>
        </SelectContent>
      </>
    ),
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
export const Label: Story = {
  args: {
    children: (
      <>
        <SelectTrigger className="w-[210px]" label={'Select-box'}>
          <SelectValue placeholder="Select-box" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Select-box">Light</SelectItem>
          <SelectItem value="Select-box">Dark</SelectItem>
          <SelectItem value="Select-box">System</SelectItem>
        </SelectContent>
      </>
    ),
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
export const SelectIcon: Story = {
  args: {
    children: (
      <>
        <SelectTrigger className="w-[210px]" label="Select Language" icon={<RussianFlag />}>
          <SelectValue>{'Русский'}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en" icon={<EnglishFlag />}>
            English
          </SelectItem>
          <SelectItem value="ru" icon={<RussianFlag />}>
            Русский
          </SelectItem>
        </SelectContent>
      </>
    ),
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
