'use client';

import Icon from '@/components/commons/Icon';

const ProfileImage = () => {
  return (
    <div className="relative flex justify-center items-center rounded-full overflow-hidden w-[100px] h-[100px]">
      <Icon.bbangleSmile />
      <div className="absolute h-[26px] leading-[26px] bottom-0 w-full text-center text-white bg-gray-800/50">
        편집
      </div>
    </div>
  );
};

export default ProfileImage;
