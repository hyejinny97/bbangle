'use client';

import Logo from '../assets/logo.svg';

const ProfileImage = () => {
    return (
        <div className="overflow-hidden flex-col w-[100px] h-[100px] rounded-full bg-gray-100 flex items-center justify-center">
            <Logo />
            <div className="bg-gray-800/50 text-gray-50 w-full text-center h-[26px] leading-[26px]">
                추가
            </div>
        </div>
    );
};

export default ProfileImage;
