'use client';

import Button from '@/components/commons/button/client/Button';
import Input from '@/components/commons/inputs/Input';
import { useId } from 'react';

const NicknameInput = () => {
  const inputId = useId();

  return (
    <Input
      id={inputId}
      placeholder="닉네임을 입력해 주세요."
      label="닉네임"
      button={
        <Button variants="input" onClick={() => {}}>
          중복확인
        </Button>
      }
    />
  );
};

export default NicknameInput;
