'use client';

import Button from '@/components/commons/button/client/Button';
import Input from '@/components/commons/inputs/Input';
import { useId } from 'react';
import useNicknameDoubleCheckMutation from '../../hooks/useNicknameDoubleCheckMutation';
import useInput from '@/commons/hooks/useInput';

const NicknameInput = () => {
  const inputId = useId();
  const { onChange, value: nickname } = useInput('');
  const { mutate, data } = useNicknameDoubleCheckMutation();

  return (
    <div>
      <Input
        id={inputId}
        placeholder="닉네임을 입력해 주세요."
        label="닉네임"
        onChange={onChange}
        button={
          <Button type="button" variants="input" onClick={() => mutate(nickname)}>
            중복확인
          </Button>
        }
      />
      {data && <div className="text-xs mt-[4px] text-gray-600">{data?.data.message}</div>}
    </div>
  );
};

export default NicknameInput;
