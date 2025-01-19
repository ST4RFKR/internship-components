import { Meta, StoryObj } from '@storybook/react';
import Typography from './typography';

const meta = {
  component: Typography,
  title: 'Typography',
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'regular_text_16',
        'bold_text_16',
        'regular_text_14',
        'medium_text_14',
        'bold_text_14',
        'small_text',
        'semi-bold_small_text',
        'regular_link',
        'small_link',
      ],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: 'This is H1',
    variant: 'h1',
  },
};

export const H2: Story = {
  args: {
    children: 'This is H2',
    variant: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'This is H3',
    variant: 'h3',
  },
};

export const RegularText16: Story = {
  args: {
    children: 'This is Regular Text 16',
    variant: 'regular_text_16',
  },
};

export const BoldText16: Story = {
  args: {
    children: 'This is Bold Text 16',
    variant: 'bold_text_16',
  },
};

export const RegularText14: Story = {
  args: {
    children: 'This is Regular Text 14',
    variant: 'regular_text_14',
  },
};

export const MediumText14: Story = {
  args: {
    children: 'This is Medium Text 14',
    variant: 'medium_text_14',
  },
};

export const BoldText14: Story = {
  args: {
    children: 'This is Bold Text 14',
    variant: 'bold_text_16',
  },
};

export const SmallText: Story = {
  args: {
    children: 'This is Small Text',
    variant: 'small_text',
  },
};

export const SemiBoldSmallText: Story = {
  args: {
    children: 'This is Semi-Bold Small Text',
    variant: 'semi-bold_small_text',
  },
};

export const RegularLink: Story = {
  args: {
    children: <a href={'/'}>This is a Regular Link</a>,
    variant: 'regular_link',
  },
};

export const SmallLink: Story = {
  args: {
    children: <a href={'/'}>This is a Small Link</a>,
    variant: 'small_link',
  },
};

export const H1asH1: Story = {
  args: {
    as: 'h1',
    children: 'h1',
    variant: 'h1',
  },
};
