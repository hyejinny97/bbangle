'use client';

import usePopup from '@/commons/hooks/usePopup';
import { isWishFolderEditingState } from '@/domains/wish/atoms/wishFolder';
import DeleteWishFolderPopup from '@/domains/wish/components/DeleteWishFolderModal';
import WishFolder from '@/domains/wish/components/WishFolder';
import { WishFolderType } from '@/domains/wish/types/wishFolder';
import { useRecoilValue } from 'recoil';

const MOCK_DATA: WishFolderType[] = [
  {
    folderId: 1,
    title: '변경한 제목',
    count: 1,
    productImages: []
  }
];

const WishFolderGrid = () => {
  const isEditing = useRecoilValue(isWishFolderEditingState);
  const { openPopup } = usePopup();

  const deleteFolder = (folderId: number) => {
    openPopup(<DeleteWishFolderPopup folderId={folderId} />);
  };

  return (
    <div className="grid gap-[16px] grid-cols-2">
      {MOCK_DATA.map(({ folderId, title, count, productImages }) => (
        <WishFolder
          key={folderId}
          id={folderId}
          name={title}
          thumbnailList={productImages}
          count={count}
          onDeleteClick={() => deleteFolder(folderId)}
          isEditing={isEditing}
        />
      ))}
    </div>
  );
};

export default WishFolderGrid;
