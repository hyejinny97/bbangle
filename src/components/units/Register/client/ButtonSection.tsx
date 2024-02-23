'use client';

import Btn from '@/components/commons/button/client/Btn';

function ButtonSection() {
    return (
        <div className="flex gap-[10px]">
            <Btn title="건너뛰기" onClick={() => {}} active={false} />
            <Btn title="완료" onClick={() => {}} active={true} />
        </div>
    );
}

export default ButtonSection;
