'use client';

import { useId } from 'react';

import Input from '@/components/commons/inputs/Input';
import Button from '@/components/commons/button/client/Button';

const PhoneNumberInput = () => {
  const inputId = useId();

  return (
    <div>
      <label className="inline-block mb-[6px]" htmlFor={inputId}></label>
      <div className="relative">
        <Input
          id={inputId}
          label="휴대폰 번호"
          placeholder="-를 제외한 휴대폰 번호를 입력해 주세요."
          button={
            <Button variants="input" onClick={() => {}}>
              중복확인
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
