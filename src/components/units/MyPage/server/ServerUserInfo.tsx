import Image from 'next/image';
import Link from 'next/link';
import { IconCharacter } from '@/components/units/MyPage/client/Icons';
import { fetchUserProfile } from '@/components/units/MyPage/api/fetchUserProfile';

const ServerUserInfo = async () => {
  const { profileImg, nickname } = await fetchUserProfile();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-between items-center">
          {profileImg ? (
            <Image
              src={profileImg}
              width={30}
              height={30}
              alt={`${nickname}'s profile image`}
              className="rounded-lg"
            />
          ) : (
            <IconCharacter />
          )}
          <p className="ml-[6px] text-[18px] text-color-Gray900 font-bold tracking-tight">
            {nickname}
          </p>
        </div>
        <Link href="/mypage/update">
          <p className="text-[11px] text-color-Gray500 tracking-tight">프로필 수정</p>
        </Link>
      </div>
      <p className="text-[14px] text-color-Gray800">반가워요 :) 무엇을 도와드릴까요?</p>
    </div>
  );
};

export default ServerUserInfo;
