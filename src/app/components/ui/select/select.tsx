'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/app/utils/cn';
import ChevronDown from '@/app/assets/icon/components/Chevron-down';
type PropsTriger = {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  disabled: boolean;
};

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & PropsTriger
>(({ icon, label, className, children, ...props }, ref) => (
  <>
    {label && (
      <label
        className={cn('text-sm leading-6  text-light-900 disabled:text-light-900 ', className)}>
        {label}
      </label>
    )}
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex h-9 w-full items-center justify-between whitespace-nowrap rounded-sm border border-dark-100 bg-transparent px-3 py-1.5 text-base hover:border-light-900 hover:text-light-900 placeholder:text-muted-foreground focus:border-2 focus:border-accent-500 disabled:cursor-not-allowed disabled:text-dark-100 disabled:border-dark-100 [&>span]:line-clamp-1 data-[state=open]:rounded-b-none data-[state=open]:border-light-100',
        className,
      )}
      {...props}>
      <div className="flex">
        {' '}
        {icon && (
          <SelectPrimitive.Icon asChild className="mr-3">
            {icon}
          </SelectPrimitive.Icon>
        )}
        {children}
      </div>
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="group-data-[state=open]:rotate-180" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  </>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'max-w-[210px] relative z-50 max-h-96 min-w-[8rem] overflow-hidden border-dark-100  rounded-sm border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=open]:rounded-t-none data-[state=open]:border-light-100',

        position === 'popper' &&
          'data-[side=bottom]:translate-y-0 data-[side=left]:-translate-x-0 data-[side=right]:translate-x-0 data-[side=top]:-translate-y-0',
        className,
      )}
      position={position}
      {...props}>
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}>
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-base font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

type PropsItem = {
  icon?: React.ReactNode;
};
const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & PropsItem
>(({ icon, className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full h-full cursor-default select-none items-center pl-2 pr-8 text-base outline-none hover:text-accent-500 hover:bg-dark-300 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}>
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center"></span>
    {icon && (
      <SelectPrimitive.Icon asChild className={cn('mr-[12px]')}>
        {icon}
      </SelectPrimitive.Icon>
    )}
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem };
