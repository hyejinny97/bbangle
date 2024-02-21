'use client';

import Input from '@/components/commons/inputs/Input';
import { useId } from 'react';

const NicknameInput = () => {
    const inputId = useId();

    return (
        <div>
            <label className="inline-block mb-[6px]" htmlFor={inputId}>
                닉네임
            </label>
            <div className="relative">
                <Input id={inputId} placeholder="닉네임을 입력해 주세요." />
                <button
                    // disabled={buttonDisabled}
                    className=" disabled:bg-gray-200 disabled:text-gray-500 absolute h-[30px] w-[64px] text-xs right-[10px] top-1/2 -translate-y-1/2 rounded-[8px] bg-gray-700 text-gray-50"
                >
                    중복확인
                </button>
            </div>
        </div>
    );
};

export default NicknameInput;
