'use client';

import React, { ChangeEvent, ReactNode, useId } from 'react';
import Off from './assets/icon_radio_off.svg';
import On from './assets/icon_radio_on.svg';

interface RadioProps {
  isChecked: boolean;
  onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  required?: boolean;
  children: ReactNode;
}

const Radio = ({
  isChecked = false,
  onChange,
  name = '',
  value = '',
  required = false,
  children
}: RadioProps) => {
  const id = useId();

  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
        required={required}
        hidden
      />
      <label htmlFor={id} className="flex text-gray-800 text-xs font-normal">
        <span className="mr-[0.5rem]">{isChecked ? <On /> : <Off />}</span>
        {children}
      </label>
    </div>
  );
};

export default Radio;
