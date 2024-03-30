'use client';

import { deleteCookie } from '@/action';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

const MoreSection = ({ className }: Props) => {
  const logout = async () => {
    await Promise.all([deleteCookie('accessToken'), deleteCookie('refreshToken')]);
  };

  return (
    <div className={twMerge('flex justify-between text-gray-600 text-sm', className)}>
      <Link href="/mypage/withdraw">
        <button type="button">회원탈퇴</button>
      </Link>
      <Link href="/">
        <button onClick={logout} type="button">
          로그아웃
        </button>
      </Link>
    </div>
  );
};

export default MoreSection;
