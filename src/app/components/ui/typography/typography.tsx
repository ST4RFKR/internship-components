import { cn } from '@/app/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import React, { ComponentPropsWithoutRef, JSX } from 'react';

type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'regular_text_16'
  | 'bold_text_16'
  | 'regular_text_14'
  | 'medium_text_14'
  | 'bold_text_14'
  | 'small_text'
  | 'semi_bold_small_text'
  | 'regular_link'
  | 'small_link';

type Props = {
  asChild?: boolean;
  variant: TypographyVariants;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'p'>;

const typographyVariants: Record<TypographyVariants, string> = {
  h1: 'text-[28px] leading-[25px] font-bold',
  h2: 'text-[22px] leading-[25px] font-bold',
  h3: 'text-lg leading-5 font-semibold',
  regular_text_16: 'text-base leading-6 font-normal',
  bold_text_16: 'text-base leading-6 font-bold',
  regular_text_14: 'text-sm leading-6 font-normal',
  medium_text_14: 'text-sm leading-6 font-medium',
  bold_text_14: 'text-sm leading-6 font-bold',
  small_text: 'text-xs leading-4 font-light',
  semi_bold_small_text: 'text-xs leading-4 font-semibold',
  regular_link: 'text-accent-500 underline text-sm leading-4 font-normal',
  small_link: 'text-accent-500 underline text-xs leading-4 font-normal',
};

const Typography = ({
  variant = 'regular_text_14',
  as: Tag = 'p',
  className,
  asChild,
  children,
  ...rest
}: Props) => {
  const Component = asChild ? Slot : Tag;
  return (
    <Component {...rest} className={cn(typographyVariants[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;
