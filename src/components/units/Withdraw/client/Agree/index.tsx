'use client';

import { useState } from 'react';
import CheckBox from '@/components/commons/checkbox/client/Checkbox';

const Agree = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <CheckBox
            title="회원탈퇴 유의사항을 확인했으며 이에 동의합니다."
            isChecked={isChecked}
            onClick={handleCheckClick}
        />
    );
};

export default Agree;
