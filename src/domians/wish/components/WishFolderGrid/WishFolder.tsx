import { BbangleSmileIcon } from '@/components/commons/Icon';
import Image from 'next/image';

interface WishFolderProps {
  thumbnailList?: string[];
  name: string;
  count: number;
}

const WishFolder = ({ thumbnailList, name, count }: WishFolderProps) => {
  return (
    <div className="flex flex-col gap-[6.5px] rounded-[6px] overflow-hidden">
      <div className="flex justify-center items-center after:pb-[100%] w-full border border-gray-100 rounded-[6px]">
        {thumbnailList && thumbnailList.length !== 0 ? (
          <div className="grid grid-cols-2 grid-rows-2">
            {thumbnailList.map(thumbnailSrc => (
              <Image key={thumbnailSrc} src={thumbnailSrc} alt="thumbnail" />
            ))}
          </div>
        ) : (
          <BbangleSmileIcon width={80} height={80} />
        )}
      </div>
      <div className="flex justify-between  items-center">
        <div className="font-semibold text-14 tracking-tight-4 leading-120">{name}</div>
        <div className="text-gray-500">({count})</div>
      </div>
    </div>
  );
};

export default WishFolder;
