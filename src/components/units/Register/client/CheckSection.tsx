'use client';

import CheckBox from '@/components/commons/checkbox/client/Checkbox';

function CheckSection() {
    return (
        <div className="flex flex-col gap-[16px]">
            <CheckBox isChecked={false} title="모두 동의합니다." onClick={() => {}} />
            <hr />
            <CheckBox isChecked={false} title="[필수] 서비스 이용약관" onClick={() => {}} />
            <CheckBox
                isChecked={false}
                title="[필수] 개인 정보 처리방침 및 수집이용 동의"
                onClick={() => {}}
            />
            <CheckBox
                isChecked={false}
                title="[선택] 마케팅 수신 정보 및 이용 동의"
                onClick={() => {}}
            />
        </div>
    );
}

export default CheckSection;
