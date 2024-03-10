import { useEffect, useState } from 'react';
import './index.css';
import Link from 'next/link';
import useToast from '@/commons/hooks/useToast';

interface IToastPopProps {
  content: string;
  isAddWish?: boolean;
}

const ToastPop = ({ content, isAddWish }: IToastPopProps) => {
  const [isToast, setIsToast] = useState(false);
  const { openToast } = useToast();

  useEffect(() => {
    setIsToast(true);

    const timer = setTimeout(() => {
      setIsToast(false);
      openToast(null);
    }, 3000); // 3초 후에 사라지도록 설정 (원하는 시간으로 변경 가능)

    return () => clearTimeout(timer);
  }, []);

  return (
    isToast && (
      <div className="toast-pop">
        <span className="text-sm text-white">{content}</span>
        {isAddWish && (
          <Link href="/wishlist" className="text-xs text-white underline">
            편집
          </Link>
        )}
      </div>
    )
  );
};

export default ToastPop;
