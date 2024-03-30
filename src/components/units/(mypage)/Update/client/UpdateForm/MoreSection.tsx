import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

const MoreSection = ({ className }: Props) => {
  return (
    <div className={twMerge('flex justify-between text-gray-600 text-sm', className)}>
      <Link href="/mypage/withdraw">
        <button type="button">회원탈퇴</button>
      </Link>
      <button type="button">로그아웃</button>
    </div>
  );
};

export default MoreSection;
