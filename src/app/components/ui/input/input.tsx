import { ComponentPropsWithoutRef, useState } from 'react';
import Typography from '../typography/typography';
import { cn } from '@/app/utils/cn';
import { Close, Eye, EyeOff, Search } from '@/app/assets/icon/components';

type Props = {
  variant?: 'default' | 'search';
  label?: string;
  error?: string;
} & ComponentPropsWithoutRef<'input'>;

export const Input = ({
  label,
  value = '',
  variant = 'default',
  error,
  disabled,
  type = 'text',
  placeholder,
  className,
  ...rest
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [localValue, setValue] = useState(value);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="flex-col inline-flex">
      {label && (
        <Typography
          className="text-light-900 disabled:text-dark-100"
          variant="regular_text_14"
          as="label">
          {label}
        </Typography>
      )}
      <div className="relative">
        <input
          {...rest}
          disabled={disabled}
          value={localValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder={placeholder}
          className={cn(
            'max-w-[280px] inline-block py-1.5 px-3 border border-dark-100 rounded-sm bg-transparent placeholder:text-light-900 placeholder:text-base placeholder:leading-6 ',
            'active:border-light-100 active:placeholder:text-light-100 ',
            'hover:border-light-900',
            'focus:outline focus:outline-2 focus:outline-accent-500',
            'disabled:text-dark-100 disabled:placeholder:text-dark-100 disabled:border-dark-100',
            variant === 'search' && 'pl-10 w-[315px]',
            error && 'border-danger-500 text-light-100 ',
            className,
          )}
          type={inputType}
        />
        {type === 'password' && (
          <div
            className="absolute right-1.5 top-[50%] translate-y-[-50%] cursor-pointer"
            onClick={togglePasswordVisibility}>
            {showPassword ? <EyeOff fill="#fff" /> : <Eye fill="#fff" />}
          </div>
        )}
        {variant === 'search' && (
          <>
            <div className="absolute left-1.5 top-[50%] translate-y-[-50%] cursor-pointer">
              {<Search fill="#FFF" />}
            </div>
            <div
              onClick={() => setValue('')}
              className="absolute right-1.5 top-[50%] translate-y-[-50%] cursor-pointer">
              {localValue.length > 0 && <Close fill="#FFF" />}
            </div>
          </>
        )}
      </div>

      {!!error && (
        <Typography className="text-danger-500" variant="regular_text_14">
          {error}
        </Typography>
      )}
    </div>
  );
};
