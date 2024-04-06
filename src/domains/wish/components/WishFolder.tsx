'use client';

import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { MouseEventHandler } from 'react';
import { CloseIcon } from '@/components/commons/Icon';
import usePopup from '@/commons/hooks/usePopup';
import useModal from '@/commons/hooks/useModal';
import DeleteWishFolderPopup from './alert-box/DeleteWishFolderPopup';
import UpdateWishFolderModal from './alert-box/UpdateWishFolderModal';
import { isWishFolderEditingState } from '../atoms/wishFolder';
import FolderThumbnail from './common/FolderThumbnail';

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

  const deleteFolder: MouseEventHandler<HTMLButtonElement> = (e) => {
    openPopup(<DeleteWishFolderPopup folderName={name} folderId={id} />);
    e.preventDefault();
  };

  const updateFolderName: MouseEventHandler<HTMLButtonElement> = () => {
    openModal(<UpdateWishFolderModal folderId={id} />);
  };

  return (
    <div className="flex flex-col gap-[6.5px] rounded-[6px] overflow-hidden">
      <Link
        href={`/wishlist/detail/products/${id}`}
        className="relative flex justify-center items-center after:pb-[100%] w-full"
      >
        {isEditing && (
          <button
            className="p-[4px] rounded-full absolute top-[6px] right-[6px]"
            onClick={deleteFolder}
          >
            <CloseIcon />
          </button>
        )}

        <FolderThumbnail thumbnailList={thumbnailList} />
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
