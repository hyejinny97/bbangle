import Popup from '@/components/commons/Popup';
import Btn from '@/components/commons/button/client/Btn';
import Input from '@/components/commons/inputs/Input';

const BirthdayPopup = () => {
  return (
    <Popup className="p-[16px] flex flex-col gap-[26px]">
      <div>생년월일 8자를 입력해주세요.</div>
      <Input />
      <div className="flex gap-[10px]">
        <Btn title="취소" active={false} onClick={() => {}} />
        <Btn title="확인" active={true} onClick={() => {}} />
      </div>
    </Popup>
  );
};

export default BirthdayPopup;
