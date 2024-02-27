'use client';

import useCheckbox from '@/commons/hooks/useCheckbox';
import CheckBox from '@/components/commons/checkbox/client/Checkbox';

const CheckSection = () => {
  const { checked: allChecked, onChange: onAllCheckedChange } = useCheckbox();
  const { checked: serviceChecked, onChange: onServiceChckedChange } = useCheckbox();
  const { checked: privacyChecked, onChange: onPrivacyCheckedChange } = useCheckbox();
  const { checked: marketingChecked, onChange: onMarketingCheckedChange } = useCheckbox();

  return (
    <div className="flex flex-col gap-[16px]">
      <CheckBox isChecked={allChecked} onChange={onAllCheckedChange}>
        모두 동의합니다.
      </CheckBox>
      <hr />
      <CheckBox isChecked={serviceChecked} onChange={onServiceChckedChange}>
        [필수] 서비스 이용약관
      </CheckBox>
      <CheckBox isChecked={privacyChecked} onChange={onPrivacyCheckedChange}>
        [필수] 개인 정보 처리방침 및 수집이용 동의
      </CheckBox>
      <CheckBox isChecked={marketingChecked} onChange={onMarketingCheckedChange}>
        [선택] 마케팅 수신 정보 및 이용 동의
      </CheckBox>
    </div>
  );
};

export default CheckSection;
