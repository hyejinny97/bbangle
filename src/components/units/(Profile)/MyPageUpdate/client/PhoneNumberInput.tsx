'use client';

import Input from '@/components/commons/inputs/Input';
import Button from '@/components/commons/button/client/Button';

const PhoneNumberInput = () => {
  return (
    <div className="relative">
      <Input
        label="휴대폰 번호"
        placeholder="-를 제외한 휴대폰 번호를 입력해 주세요."
        button={
          <Button variants="input" onClick={() => {}}>
            중복확인
          </Button>
        }
      />
    </div>
  );
};

export default PhoneNumberInput;
