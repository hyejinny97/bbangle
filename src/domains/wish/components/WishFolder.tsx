'use client';

import { BbangleSmileIcon } from '@/components/commons/Icon';
import Image from 'next/image';
import Link from 'next/link';
import { CloseIcon } from '@/shared/components/icons';
import DeleteWishFolderPopup from './DeleteWishFolderPopup';
import { useRecoilValue } from 'recoil';
import { isWishFolderEditingState } from '../atoms/wishFolder';
import usePopup from '@/commons/hooks/usePopup';
import { MouseEventHandler } from 'react';
import useModal from '@/commons/hooks/useModal';
import UpdateWishFolderModal from './UpdateWishFolderModal';

interface WishFolderProps {
  id: number;
  thumbnailList?: string[];
  name: string;
  count: number;
}

const WishFolder = ({ id, thumbnailList, name, count }: WishFolderProps) => {
  const isEditing = useRecoilValue(isWishFolderEditingState);
  const { openPopup } = usePopup();
  const { openModal } = useModal();

  const deleteFolder: MouseEventHandler<HTMLButtonElement> = e => {
    openPopup(<DeleteWishFolderPopup folderId={id} />);
    e.preventDefault();
  };

  const updateFolderName: MouseEventHandler<HTMLButtonElement> = () => {
    openModal(<UpdateWishFolderModal folderId={id} />);
  };

  return (
    <div className="flex flex-col gap-[6.5px] rounded-[6px] overflow-hidden">
      <Link
        href={`/wishlist/detail/products/${id}`}
        className="relative flex justify-center items-center after:pb-[100%] w-full border border-gray-100 rounded-[6px]"
      >
        {isEditing && (
          <button
            className="p-[4px] rounded-full absolute top-[6px] right-[6px]"
            onClick={deleteFolder}
          >
            <CloseIcon />
          </button>
        )}

        {thumbnailList && thumbnailList.length !== 0 ? (
          <div className="relative grid grid-cols-2 grid-rows-2">
            {thumbnailList.map(thumbnailSrc => (
              <Image key={thumbnailSrc} src={thumbnailSrc} fill alt="thumbnail" />
            ))}
          </div>
        ) : (
          <BbangleSmileIcon width={80} height={80} />
        )}
      </Link>
      <div className="flex justify-between items-center">
        {isEditing ? (
          <button
            onClick={updateFolderName}
            className="font-semibold text-14 tracking-tight-4 leading-120, underline"
          >
            {name}
          </button>
        ) : (
          <div className="font-semibold text-14 tracking-tight-4 leading-120">{name}</div>
        )}

        <div className="text-gray-500">({count})</div>
      </div>
    </div>
  );
};

export default WishFolder;
