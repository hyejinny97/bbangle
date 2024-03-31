import { BbangleSmileIcon } from '@/components/commons/Icon';
import PaddingWrapper from '@/components/commons/PaddingWrapper';
import { StarGrayIcon, StarYellowIcon } from '@/shared/components/icons';
import Image from 'next/image';

interface WishStroeProps {
  imgSrc: string;
  title: string;
  desc: string;
  isWished?: boolean; // default false로 임시 처리 (백엔드에서 안 줌)
}

const StoreCard = ({ imgSrc, title, desc, isWished = false }: WishStroeProps) => {
  const like = () => {};
  const hate = () => {};

  return (
    <PaddingWrapper className="flex gap-[10px] justify-between border-b border-gray-100">
      <div className="w-[40px] h-[40px] rounded-[6px] shrink-0">
        {imgSrc ? (
          <Image width={40} height={40} src={imgSrc} alt="store thumbnail" />
        ) : (
          <BbangleSmileIcon />
        )}
      </div>

      <div className="flex w-full flex-col overflow-hidden">
        <div className="flex justify-between">
          <div className="font-semibold leading-150 tracking-tight-2 text-14">{title}</div>
          {isWished ? (
            <button onClick={like}>
              <StarYellowIcon />
            </button>
          ) : (
            <button onClick={hate}>
              <StarGrayIcon />
            </button>
          )}
        </div>
        <p className="truncate text-gray-600 leading-130 tracking-tight-2 text-12">{desc}</p>
      </div>
    </PaddingWrapper>
  );
};

export default StoreCard;
