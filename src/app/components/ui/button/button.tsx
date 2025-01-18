'use client';

import { cn } from '@/app/utils/cn';
import { Slot } from '@radix-ui/react-slot';

import { ComponentPropsWithoutRef } from 'react';

type Props = {
  variant?: 'primary' | 'secondary' | 'outlined' | 'text' | 'iconBtn';
  asChild?: boolean;
  icon?: React.ReactNode;
} & ComponentPropsWithoutRef<'button'>;

const buttonVariants = {
  primary:
    'text-light-100 bg-accent-500 active:bg-accent-700 hover:bg-accent-100 focus:border-2 focus:border-accent-700 focus:rounded-sm disabled:bg-accent-900 disabled:text-light-900',
  secondary:
    'bg-dark-300 active:bg-[#212121] hover:bg-dark-100 focus:border-2 focus:border-accent-300 focus:rounded-sm disabled:bg-dark-500 disabled:text-light-900',
  outlined:
    'text-accent-500 bg-transparent border-2 border-accent-500 active:text-accent-700 active:border-2 active:border-accent-700 hover:text-accent-100 hover:border-2 hover:border-accent-100 focus:text-accent-700 focus:border-2 focus:border-accent-700 disabled:text-accent-900 disabled:border-2 disabled:border-accent-900',
  text: 'text-accent-500 border-transparent active:text-accent-700 hover:text-accent-100 focus:border-2 focus:border-accent-300 focus:rounded-sm disabled:text-accent-900',
  iconBtn: 'px-3 bg-dark-300 text-light-100',
};

export const Button = ({
  variant = 'primary',
  disabled,
  icon,
  children,
  className,
  asChild,
  ...rest
}: Props) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      disabled={disabled}
      className={cn(
        ' text-light-100 inline-flex py-1.5 px-6 border-2 border-transparent rounded-sm',
        buttonVariants[variant],
        className,
      )}
      {...rest}>
      <span className="flex items-center">
        {icon && <span className={cn(variant === 'iconBtn' && 'mr-[10px]')}>{icon}</span>}
        {children}
      </span>
    </Component>
  );
};
