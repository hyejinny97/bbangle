'use client';

import React, { ChangeEvent, ReactNode, useId } from 'react';
import Off from '../assets/icn_check_off.svg';
import On from '../assets/icn_check_on.svg';
import { twMerge } from 'tailwind-merge';

interface CheckBoxProps {
  isChecked: boolean;
  onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

const CheckBox = ({
  isChecked = false,
  onChange,
  name = '',
  value = '',
  required = false,
  children,
  className
}: CheckBoxProps) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={twMerge(
        'flex text-gray-800 text-xs font-normal cursor-pointer items-center',
        className
      )}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
        required={required}
        hidden
      />

      <span className="mr-[0.5rem]">{isChecked ? <On /> : <Off />}</span>
      {children}
    </label>
  );
};

export default CheckBox;
