import { BbangleSmileIcon } from '@/components/commons/Icon';
import Image from 'next/image';

interface WishFolderProps {
  imgSrc?: string;
  name: string;
  count: number;
}

const WishFolder = ({ imgSrc, name, count }: WishFolderProps) => {
  return (
    <div className="flex flex-col gap-[6.5px]">
      <div className="flex justify-center items-center after:pb-[100%] w-full border border-gray-100 rounded-[6px]">
        {imgSrc ? <Image src={imgSrc} alt="test" /> : <BbangleSmileIcon width={80} height={80} />}
      </div>
      <div className="flex justify-between  items-center">
        <div className="font-semibold text-14 tracking-tight-4 leading-120">{name}</div>
        <div className="text-gray-500">({count})</div>
      </div>
    </div>
  );
};

export default WishFolder;
