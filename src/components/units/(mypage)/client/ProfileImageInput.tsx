'use client';

import Icon from '@/components/commons/Icon';
import { ChangeEventHandler, memo, useId } from 'react';
import { useRecoilState } from 'recoil';
import { profileImgState } from '../Registration/atoms';
import Image from 'next/image';

const ProfileImageInput = () => {
  const inputId = useId();
  const [profileImg, setProfileImg] = useRecoilState(profileImgState);

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const file = e.target.files?.[0];
    if (!file) throw Error('파일이 없습니다.');
    setProfileImg(file);
  };

  return (
    <label
      htmlFor={inputId}
      className="cursor-pointer relative flex justify-center items-center rounded-full overflow-hidden w-[100px] h-[100px]"
    >
      <input id={inputId} type="file" hidden onChange={onChange} multiple={false} />
      {profileImg ? (
        <Image
          src={URL.createObjectURL(profileImg)}
          alt="profile preview"
          width={100}
          height={100}
        />
      ) : (
        <Icon.bbangleSmile />
      )}
      <div className="absolute h-[26px] leading-[26px] bottom-0 w-full text-center text-white bg-gray-800/50">
        편집
      </div>
    </label>
  );
};

export default memo(ProfileImageInput);
