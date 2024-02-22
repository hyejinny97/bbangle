import IconCharacter from '@/components/units/MyPage/client/IconCharacter';

const ServerUserInfo = () => {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex justify-between items-center">
                    <IconCharacter />
                    <p className="ml-[6px] text-[18px] text-color-Gray900 font-bold tracking-tight">
                        빵그리의 오븐
                    </p>
                </div>
                <p className="text-[11px] text-color-Gray500 tracking-tight">프로필 수정</p>
            </div>
            <p className="text-[14px] text-color-Gray800">반가워요 :) 무엇을 도와드릴까요?</p>
        </div>
    );
};

export default ServerUserInfo;
