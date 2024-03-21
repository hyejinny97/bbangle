import PaddingWrapper from '@/components/commons/PaddingWrapper';
import BtnStar from '@/components/commons/button/client/Btn_start';
import Image from 'next/image';

interface WishStroeProps {
  imgSrc: string;
  title: string;
  desc: string;
  isWished: boolean;
}

const WishStore = ({ imgSrc, title, desc, isWished }: WishStroeProps) => {
  return (
    <PaddingWrapper className="flex gap-[10px] justify-between border-b border-gray-100">
      <Image
        className="rounded-[6px] shrink-0"
        width={40}
        height={40}
        src={imgSrc}
        alt="store thumbnail"
      />
      <div className="flex w-full flex-col overflow-hidden">
        <div className="flex justify-between">
          <div className="font-semibold leading-150 tracking-tight-2 text-14">{title}</div>
          <BtnStar isLiked={isWished} />
        </div>
        <p className="truncate text-gray-600 leading-130 tracking-tight-2 text-12">{desc}</p>
      </div>
    </PaddingWrapper>
  );
};

export default WishStore;
