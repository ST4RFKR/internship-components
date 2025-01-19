'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Checked, Unchecked } from '@/app/assets/icon/components';
import { cn } from '@/app/utils/cn';
import Typography from '../typography/typography';

type Props = {
  label: string;
  disabled: boolean;
};

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & Props
>(({ label, className, disabled, ...props }, ref) => (
  <div className="flex items-center ">
    <CheckboxPrimitive.Root
      ref={ref}
      disabled={disabled}
      className={cn(
        'relative group peer h-5 w-5 border-2 rounded-sm border-light-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        className,
      )}
      {...props}>
      <span
        className="absolute inset-0 w-9 h-9 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] border border-transparent rounded-full 
        group-active:border-dark-100 group-active:bg-dark-100
      group-focus:border-dark-500 group-focus:bg-dark-500
      group-disabled:border-none group-disabled:bg-transparent
      group-hover:border-dark-300 group-hover:bg-dark-300 z-[-1]"></span>
      <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
        <Checked className="absolute w-min-[24px] h-min-[24px]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    <Typography
      className={cn('ml-[11px]', disabled && 'text-light-900', className)}
      as={'span'}
      variant="regular_text_14">
      {label}
    </Typography>
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
