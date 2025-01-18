import { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './select';
import RussinFlag from '@/app/assets/icon/components/RussinFlag';
import EnglishFlag from '@/app/assets/icon/components/EnglishFlag';

const meta = {
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
        <SelectTrigger className="w-[210px]" icon={<RussinFlag />}>
          <SelectValue placeholder="Russia" />
        </SelectTrigger>
        <SelectContent
          onPointerDownOutside={(event) => {
            event.preventDefault();
          }}>
          <SelectItem value="Select-box" icon={<EnglishFlag />}>
            English
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
