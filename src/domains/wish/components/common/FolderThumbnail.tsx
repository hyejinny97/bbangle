import { BbangleSmileIcon } from '@/components/commons/Icon';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface Props {
  thumbnailList?: string[];
  size?: 'lg' | 'sm';
}

const FolderThumbnail = ({ thumbnailList, size = 'lg' }: Props) => {
  const sizeClass = size === 'lg' ? 'size-full' : 'size-[24px]';

  return (
    <div
      className={twMerge(
        'flex justify-center items-center border border-gray-100 rounded-[6px]',
        sizeClass
      )}
    >
      {thumbnailList && thumbnailList.length !== 0 ? (
        <div className="grid grid-cols-2 grid-rows-2 size-full gap-[2px]">
          {thumbnailList.map((thumbnailSrc) => (
            <div key={thumbnailSrc} className="relative size-full">
              <Image src={thumbnailSrc} fill alt="thumbnail" />
            </div>
          ))}
        </div>
      ) : (
        <BbangleSmileIcon width={80} height={80} />
      )}
    </div>
  );
};

export default FolderThumbnail;
