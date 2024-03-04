import Header from '@/components/commons/header/client/Header';
import { IconSadCharacter } from '@/components/units/(mypage)/Withdraw/client/Icons';
import DeleteReasonList from '@/components/units/(mypage)/Withdraw/client/DeleteReasonList';
import Agree from '@/components/units/(mypage)/Withdraw/client/Agree';
import WithdrawButton from '@/components/units/(mypage)/Withdraw/client/WithdrawButton';

const Withdraw = () => {
  return (
    <form id="withdraw-form" action="">
      <Header title="회원 탈퇴" back />
      <div className="p-4 text-gray-900">
        <div className="mb-[40px] flex flex-col items-center">
          <div className="flex justify-center items-center w-[80px] h-[80px]">
            <IconSadCharacter />
          </div>
          <div className="leading-normal tracking-tight text-center">
            <p className="text-[16px] font-semibold">빵그리의 오븐과 이별인가요?</p>
            <p className="text-[14px] font-normal">
              계정을 삭제하면 내가 찜한 모든 상품들이 사라지게 돼요
            </p>
          </div>
        </div>
        <div>
          <p className="mb-4 text-[14px] font-semibold tracking-tight">
            계정을 삭제하는 이유를 알려주세요😢
            <span className="text-[12px] text-gray-400">(중복선택가능)</span>
          </p>
          <DeleteReasonList />
          <div className="flex justify-center mt-[20px]">
            <Agree />
          </div>
        </div>
      </div>
      <div className="mt-[10px] p-4">
        <WithdrawButton />
      </div>
    </form>
  );
};

export default Withdraw;
