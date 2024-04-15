'use client';

import { ChangeEventHandler } from 'react';
import Input from '@/shared/components/Input';
import Button from '@/shared/components/Button';
import { useSetRecoilState } from 'recoil';
import { phoneNumberState } from '../../atoms/profile';

interface PhoneNumberInputProps {
  defaultValue?: string;
}

const PhoneNumberInput = ({ defaultValue }: PhoneNumberInputProps) => {
  const setPhoneNumber = useSetRecoilState(phoneNumberState);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
  };

  return (
    <div className="w-full">
      <Input
        type="tel"
        label="휴대폰 번호"
        placeholder="-를 제외한 휴대폰 번호를 입력해 주세요."
        button={
          <Button disabled type="button" variants="input" onClick={() => {}}>
            인증하기
          </Button>
        }
        defaultValue={defaultValue}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default PhoneNumberInput;
