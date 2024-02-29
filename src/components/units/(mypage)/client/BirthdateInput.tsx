'use client';

import { useSetRecoilState } from 'recoil';
import { birthdateState } from '../atoms';
import Input from '@/components/commons/inputs/Input';
import { ChangeEventHandler } from 'react';

interface BirthdateInputProps {
  defaultValue?: string;
}

const BirthdateInput = ({ defaultValue }: BirthdateInputProps) => {
  const setBirthdate = useSetRecoilState(birthdateState);

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target;
    setBirthdate(value);
  };

  return (
    <Input
      type="date"
      defaultValue={defaultValue}
      label="생년월일"
      onChange={onChange}
      max="9999-12-31"
    />
  );
};

export default BirthdateInput;
